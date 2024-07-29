const express = require('express');
const { createNote, readNote, updateNote, deleteNote } = require('../Controller/notes');
const { auth } = require('../MiddleWare/auth');
const notesRouter = express.Router();

notesRouter.post("/create", auth, createNote);
notesRouter.get("/read", auth, readNote);
notesRouter.put("/update/:id", auth, updateNote);
notesRouter.delete("/delete/:id", auth, deleteNote);

module.exports = {notesRouter};
