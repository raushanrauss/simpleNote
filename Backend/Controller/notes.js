const { noteModel } = require("../Schema/noteSchema");
const { userModel } = require("../Schema/userSchema");


const createNote = async (req, res) => {

    try{
        const { title, description, category } = req.body;
        const note=new noteModel({title,description,category})
        await note.save();
        res.status(201).send({ msg: "Note created successfully", note})
    }
    catch (error) {
        console.log(error);
    }
}
const readNote = async (req,res) => {
    try {
        const note = await noteModel.find({ userId: req.userId })
        res.status(201).send({msg:"Getting data",note})
    }
    catch (error) {
        
    }
    
}
const updateNote = async (req, res) => {
    try {
        const id = req.params;
        const { title, description, category } = req.body;
        await noteModel.findOneAndUpdate({ _id: id, userId: req.userId }, { title, description, category })
        res.status(201).send("Note updated");
    }
    catch (error) {
        console.log(error);
    }
    
}
const deleteNote = async(req,res) => {
    const id = req.params;
    await noteModel.findOneAndDelete({ id: id, userId: req.userId })
    res.send("Note Deleted successfully");

}
module.exports = { createNote, readNote, updateNote,deleteNote };