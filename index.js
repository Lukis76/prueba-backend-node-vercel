import express from 'express'
import morgan from 'morgan'

const app = new express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
}
)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})