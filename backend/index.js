import express from "express";
import Routes from  "./Routes/index.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use(Routes);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});