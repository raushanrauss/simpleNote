const { userModel } = require("../Schema/userSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

// Register function
const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        // Check if username already exists
        const userExit = await userModel.findOne({ username });
        if (userExit) {
            return res.status(409).send("Username already exists");
        }

        // Check if email already exists
        const emailExit = await userModel.findOne({ email });
        if (emailExit) {
            return res.status(409).send("Email already exists");
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(409).send("Password and confirm password should be the same");
        }

        // Check if password length is sufficient
        if (password.length < 8) {
            return res.status(409).send("The length of the password should be greater than or equal to 8");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new userModel({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).send({ msg: "User Created", user: user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(401).send("Invalid Credentials");
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            // Generate JWT token
            const token = jwt.sign({ id: user._id }, process.env.Secret_key, { expiresIn: '1h' });
            res.status(200).send({ token });
        } else {
            res.status(401).send("Invalid Credentials");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

module.exports = { register, login };
