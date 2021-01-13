const express = require('express')
const path = require('path')
const notifier = require('node-notifier');

const app = express()
const PORT = 12345

app.get('/notify/:type', (req, res) => {
  notifier.notify({
    title: `${req.params.type} time has fineshed`,
    message: req.params.type == 'Work' ? 'Lets take a break!' : 'We have to start work!',
    sound: true,
    icon: path.join(__dirname, '/src/tomato.png')
  })
})

// Midlewares
app.use(express.static(path.join(__dirname, '/dist')))

// Server init
app.listen(PORT, () => {
  console.log(`[OK] Server has been starter on port ${PORT}`)
})