const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db.config");

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

app.use("/api/v1", require("./routes/test.route"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.DEV_MODE} modeon prot ${process.env.PORT}`
      .bgBlue.white
  );
});
