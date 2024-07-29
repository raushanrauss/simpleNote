const jwt=require('jsonwebtoken')
const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, process.env.Secret_key, (err, decoded) => {
            if (err) {
                return res.status(403).send("Unathorized");
            }
            else {
                req.userId = decoded.indexOf;
                next();
            }
        })
    }
    else {
        res.status(403).send("No token Provided");
    }
}
module.exports = { auth };