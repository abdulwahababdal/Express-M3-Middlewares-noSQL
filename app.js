const express = require("express");
const morgan = require("morgan");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDB = require("./database");
const { url, errorHandling } = require("./middlewares");
const path = require("path");
connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/posts", postsRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.all("*", url);

app.use(errorHandling);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`the app is running in port http://localhost:${PORT}`);
});
