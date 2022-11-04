const express = require('express')
const app = express()
const cors = require("cors");
const userRouter = require('./routes/v1/users.route')
const port = 5000


app.use(express.json());
app.use(cors());

//main routes
app.use("/api/v1/user/", userRouter)


app.get('/', (req, res) => {
    res.send('Home Page!')
})
app.all('*', (req, res) => {
    res.send('No Route Found')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})