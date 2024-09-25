import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log("Received request on /");
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
