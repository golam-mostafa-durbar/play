require("dotenv").config();
const express = require("express");

const userRoute = require("./routes/userRoute");

const app = express();
app.use(express.json());
app.use("/api/users", userRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
