import e from "express";
import { errorHandler, routeNotFound } from "./middlewares/middlewares.js";
import postsRouter from "./routers/posts.js";

const app = e();
const port = 3000;

app.use(e.json());
app.use(e.static("imgs"));
app.use("/posts", postsRouter);

app.use("/", (req, res) => {
  res.send("Express Blog SQL");
});

app.use(errorHandler);
app.use(routeNotFound);

app.listen(port, () => {
  console.log("Server in ascolto sulla porta:", port);
});
