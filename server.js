import e from "express";
import { errorHandler, routeNotFound } from "./middlewares/middlewares";

const app = e();
const port = 3000;

app.use(e.json());
app.use(e.static("imgs"));

app.use("/", (req, res) => {
  res.send("Express Blog SQL");
});

app.use(errorHandler);
app.use(routeNotFound);

app.listen(port, () => {
  console.log("Server in ascolto sulla porta:", port);
});
