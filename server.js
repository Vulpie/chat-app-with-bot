const app = require('./server/app')

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server started on port ${port}`))
