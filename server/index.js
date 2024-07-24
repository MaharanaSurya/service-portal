import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// database connection
dbConnection();

// Routes
app.use("/api/auth/user/", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on the PORT: ${PORT} ):`);
});
