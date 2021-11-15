const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(
  "/api/users",
  require("./routes/users.routes")
);


app.get("/api", function (req, res) {
    res.send("API is running");
});

const PORT = config.get("port") || 4000;
async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () =>
      console.log(`Application is started on port ${PORT}`)
    );
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}
start();
