require('dotenv').config();


//const bcrypt = require('bcrypt');
const config = require('./config.json');
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

mongoose.connect(config.connectionString);

const User = require("./models/user.model.js")
const Note = require("./models/note.model.js");

const app = express();

const jwt = require("jsonwebtoken");
const {autenticateToken} = require("./utilities.js");
app.use(express.json());

app.use(cors({origin: '*'}));

app.get("/", (req, res) => {
    res.json({ data: "Hello!" });
});

// Create Account
app.post("/create-account", async (req, res) => {
    const {fullName, email, password} = req.body;
    if(!fullName){
        return res 
            .status(400).json({error: true, message: "Full Name is required"});

    }
    if (!email){ 
        return res 
            .status(400).json({error: true, message: "Email is required"});
    }
    if (!password){
        return res 
            .status(400).json({error: true, message: "Password is required"});
    }

    const isUser = await User.findOne({email:email});

    if (isUser) {
        return res.json({
            error: true, 
            message: "User already exists",
    });
    }

    const user = new User({email, password, fullName,});

    await user.save();

    const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '3600m',})
    return res.json({
        error: false,
        user,
        accessToken,
        message: "User created successfully"
        
    });
});

// Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({message: "Password is required" });
    }

    const userInfo = await User.findOne({ email: email});

    if (!userInfo) {
        return res.status(400).json({message: "User does not exist" });
    }

    if ( userInfo.email == email && userInfo.password == password) {
        const user = { user : userInfo };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '3600m',})
    

        return res.json({
            error: false,
            message: "User logged in successfully",
            email,
            accessToken,
            
        });
    } else {
        return res.status(400).json({ 
            error: true, 
            message: "Invalid email or password",
        });
    }

});

// Add Notes
app.post('/add-note', autenticateToken, async (req, res) => {
    const { title, content, tags } = req.body;
    
    if (!title) {
        return res.status(400).json({ error: true, message: "Title is required" });
    }

    if (!content) {
        return res.status(400).json({ error: true, message: "Content is required"});
    }
    
    try {
        const note = new Note({ 
            title, 
            content, 
            tags: tags || [], 
            userId: req.user.user._id, // Assign the authenticated user's _id to userId
        });

        await note.save();

        return res.json({ 
            error: false,
            note, 
            message: "Note added successfully" 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

// Edit Notes

app.put('/edit-note/:noteId', autenticateToken, async (req, res) => {
    const noteId = req.params.noteId;
    const { title, content, tags , isPinned } = req.body;
    const {user} = req.user;

    if (!title && !content && !tags) {
        return res
            .status(400)
            .json({ error: true, message: "Title, Content or Tags is required" });
    }

    try {
        const note = await Note.findOne({ _id: noteId, userId: user._id });

        if (!note) {
            return res
               .status(404)
               .json({ error: true, message: "Note not found" });
        }

        if (title) note.title = title;
        if (content) note.content = content;
        if (tags) note.tags = tags;
        if (isPinned) note.isPinned = isPinned;

        await note.save();

        return res.json({ 
            error: false, 
            note, 
            message: "Note updated successfully" 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

// Get All Notes

app.put('/edit-note/:noteId', autenticateToken, async (req, res) => {

});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
    
});

module.exports = app;
