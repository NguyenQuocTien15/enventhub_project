const express = require('express');

const app = express();
const PORT = 3001;

app.get('/hello', (_req, res) => {
    res.send('<h1> Hello!!!!!! </h1>');
}
);
app.listen(PORT,(err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server starting at http://localhost:${PORT}`);
});