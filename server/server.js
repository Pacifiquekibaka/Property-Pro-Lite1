import express from 'express';
import router from './routes/routes';

require('dotenv').config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1', router)


app.listen(3000, () => console.log(`Server started on port 3000...`))

export default app;