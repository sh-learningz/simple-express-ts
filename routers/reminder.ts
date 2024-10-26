import { Router } from "express";
import createReminderDTO from "../dtos/create-reminder";

const router = Router();

router.get('/', (req, res) => {
    res.send('List of reminders');
})

router.post('/', (req, res) => {
    const {title} = req.body as createReminderDTO
})

export default router;
