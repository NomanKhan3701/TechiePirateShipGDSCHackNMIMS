const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/Admin");
const client = require("./routes/client");
// const userRoute = require('./routes/user')

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* All Routes here */
// app.use("/api/user", userRoute);

app.use("/api", client);

app.listen(PORT, () => {
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
      },
      () => console.log(`Server running at port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
});
