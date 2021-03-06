const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/Admin");
const client = require("./routes/client");
const admin = require("./routes/Admin");
// const userRoute = require('./routes/user')

dotenv.config();
const PORT = process.env.PORT || 8000;
const corsOptions={
  "origin":"*",
}

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

/* All Routes here */
// app.use("/api/user", userRoute);

app.use("/api/client", client);
app.use("/api/Admin", admin);

app.listen(PORT, () => {
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
      },
      () => console.log(`Server running at port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
});
