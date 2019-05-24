const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.static(`${ __dirname }/public`))

// Start server
app.listen(app.get('port'), () => {
    console.log(`Server on ${app.get('port')}`)
})