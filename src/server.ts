import app from './app'

const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val:string) {
    const port = parseInt(val, 10);
    
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

app.listen(port, function () {
    console.log(` `);
    console.log(`Starting Server...`);
    console.log(`Listening on port ${port}`);
});