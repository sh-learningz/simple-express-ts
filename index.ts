import express from "express";
import reminderRouter from "./routers/reminder";

const app = express();

app.use(express.json());
app.use('/reminders', reminderRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(8000, () => {console.log("server started")});
