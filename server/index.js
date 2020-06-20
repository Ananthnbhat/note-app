const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

if (process.env.NODE_ENV === 'production') {
    //Express will serve production assets like our main.js or main.css file.
    //if we dont have a specific route handler for a request, then look into client/build dir to find a file which matches the request.
    app.use(express.static('../client/build'));
    //if no files match, then go to the below route handler, which is the last resort
    
    //Express will serve the index.html of it doesn't recognise the route.
    //last route handler.
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/api', (req, res) => {
    res.send({ server: 'Express server is running' });
});