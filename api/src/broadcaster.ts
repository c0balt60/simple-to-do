import express from "express"
import { User } from "@pkg/shared";

const app = express();
app.use(express.json());

app.get("/user", (req, res) => {
  const user: User = {
    id: "1",
    username: "John"
  };

  res.json(user);
});

app.listen(3001, () => {
  console.log("API running on port 3001");
});
