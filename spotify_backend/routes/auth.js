const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");

// This POST route will help to register a user
router.post("/register", async (req,res) =>{
    //{email, password, firstName, lastName, username}
    const{email, password, firstName, lastName, username} = req.body;

    //User already exist with the email id? If yes, error
    const user =await User.findOne({email: email});
    if(user){
        return res.status(403).json({error:"A user with this email already exists"});
    }
    // Valid request
    //create new user in db
    // do not store password in plain text, convert it into hash
    const hashedPassword = await bcrypt.hash(password,10);
    const newUserData = {
        email, 
        password: hashedPassword, 
        firstName, 
        lastName, 
        username
    };
    const newUser = await User.create(newUserData);

    // create Unique token to return to the user
    const token = await getToken(email, newUser);

    //Return result to the user
    const userToReturn = { ...newUser.toJSON(), token}; // converting everything to JSON and returning to user with token
    delete userToReturn.password; // not returning the hashed password to user
    return res.status(200).json(userToReturn);

});

router.post("/login", async (req,res) =>{
    //Get email and password from req.body
    const {email,password} = req.body;

    //Check user exists or not , if not credentials invalid
    const user = await User.findOne({email:email});

    if(!user){
        return res.status(403).json({err:"Invalid credentials"});
    }

    //If user exists, check if the password is correct, if not, credentials invalid
    const isPasswordValid = await bcrypt.compare(password, user.password); // to compare one password in plain text to a hashed password in our db
    
    if(!isPasswordValid){
        return res.status(403).json({err:"Invalid credentials"});
    }


    //If the credentials are correct, return token
    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token}; // converting everything to JSON and returning to user with token
    delete userToReturn.password; // not returning the hashed password to user
    return res.status(200).json(userToReturn);


});

module.exports = router;