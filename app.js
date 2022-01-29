const cors = require('cors') // Place this with other requires (like 'path' and 'express')

const corsOptions = {
    origin: "https://stormy-cove-50903.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Em19970413:Em19970413@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";
                        



const http = require('http');

// function rqListener(req, res) {
// }

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text.html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);


