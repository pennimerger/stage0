import express from 'express';
import cors from "cors";
import "dotenv/config";
const app = express();
const port = 3033;
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
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
console.log(1 + 1);
