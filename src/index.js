import express from 'express';
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    const currentDatetime = new Date();
    const basicInfo = {
        "email": process.env.EMAIL,
        "current_datetime": currentDatetime.toISOString(),
        "github_url": process.env.GITHUB_URL
    };
    res.json(basicInfo);
});
app.listen(3033, () => {
    console.log(`Server started.`);
});
