const express = require('express');
const routes = require('./routes/routes');
const helmet = require("helmet");
const bodyParser = require("body-parser");

const {printPrimitiveObject} = require("./utils/utils");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})

const p1 = {
    age: 55,
    name: {
        first: 'aaa',
        last: 'bbb'
    }
}

const p2 = {
    age: 25,
    name: {
        first: 'ccc',
        last: 'ddd'
    }
}
// Single use
printPrimitiveObject(p1, 1);

// Array use
const dividerString = ('--------------------');
const familyMembers = [p1, p2];

for (let i=0; i<familyMembers.length; i++) {
    printPrimitiveObject(familyMembers[i], 1);
    console.log(dividerString+dividerString+dividerString);
}

