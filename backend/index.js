import express from "express";

const app = express();
const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "Hello from Express backend" });
});

app.listen(port, () => {
  console.log(`listening to backend at port ${port}`);
});
