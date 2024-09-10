import express from 'express' 
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())  // Middleware to parse JSON

const PORT = 3001

app.get('/ping', (_req , res) => {
  console.log('Someone pinged /ping!!!')
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    })

