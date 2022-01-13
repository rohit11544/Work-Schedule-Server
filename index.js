import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import workRoutes from "./routes/work.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/work", workRoutes);

const CONNECTION_URL =
  "mongodb+srv://sandhya:sandhya@cluster0.trov7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// Mongoose.connect(CONNECTION_URL,{useNewUrlParser : true, useUnifiedTopogy: true})

// .catch((error) => console.log(error.message));
// Mongoose.set('useFindAndModify', false);

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
