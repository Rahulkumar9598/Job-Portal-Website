import { Router } from "express";
import userModel from "../models/user.model.js";

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.json({
                message: "plaesen provide usename eamil and password",
                error: true,
                success: false
            });
        }
        const user = await userModel.findOne({ email: email })

        if (user) {
            return res.json({
                message: "User already exists with this email",
                error: true,
                success: false
            })
        }
        const newUser = new userModel({
            username,
            email,
            password,

        })
        await newUser.save();

        res.json({
            message: "User registered successfully",
            error: false,
            success: true,
        });

    } catch (error) {
        res.json({
            message: "User registered successfully",
            error: false,
            success: true,
        })

    }
})

userRouter.post("/login", async (req, res) => {
    try {
        const {email , password} = req.body;

        if(!email || !password){
            return res.json({
                message : "email or password are required",
                error : true,
                success : false
            })
        }

        const user = await userModel.findOne({email : email});

        if(!user){
            return res.json({
                message : "no user found",
                error : true,
                success : false
            })
        }

        const match = user.password === password

        if(!match){
            return res.json({
                message : "Email or password not matched",
                error : true,
                success : false
            })
        }

        res.json({
            message : "login successfull",
            error : false,
            success : true,
            user
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })

    }
})

export default userRouter;