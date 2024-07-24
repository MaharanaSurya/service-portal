import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { errorHandler } from "../utils/error.js";
import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// User SignUp Api
export const signup = catchAsyncErrors(async (req, res, next) => {
  const { userName, email, password } = req.body;
  if (
    !userName ||
    !email ||
    !password ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(404, "All fields are required!"));
  }
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "User Registered Successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// user SignIn Api
export const signin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required!"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(500, "User not found!"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(500, "Invalid password!"));
    }
    // if email and Password are correct then generate a web Token.
    const token = jwt.sign(
      {
        id: validUser._id, // Reference the validUser._id for JWT token generation
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access token", token, {
        httpOnly: true,
      })
      .json({
        message: "Sign in Successfully",
        rest,
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// create getAllUser api for getting all registered User
export const getAllUser = catchAsyncErrors(async (req, res, next) => {
  const allUser = await User.find();
  res.status(200).json({
    message: "Fetched all the user details",
    allUser,
  });
});
