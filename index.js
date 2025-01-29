// var figlet = require('figlet');

// figlet('Hello World!', function(err,data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err)
//         return;
//     }
//     console.log(data)
// });
// npm instsll express
// npm install cors

const express = require("express");
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors()) // 모든 요청에서 허용

app.get("/", function (req, res) {
  res.send("Welcome Himedia");
});

app.get("/dog", function (req, res) {
  res.send("Hello puppy");
});

app.get("/cat", function (req, res) {
  res.send({"sound": "BarkBark"});
});

// 변수를 받는 두가지 방식, :id params, query
app.get("/user/:id", (req, res) => {
    // const p = req.params;
    // console.log(p.id)
    const q = req.query;
    console.log(q)

    // res.json({"userid": p.id});
    res.json({"userid": q.id});
  });

app.get('/sound/:name', (req, res) => {
const { name } = req.params;
    if ( name == "dog"){
        res.json({'sound': '멍멍'})
    } else if( name == "cat") {
        res.json({'sound': "야옹"})
    } else if (name == 'pig') {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': 'Unknown'})
    }
});

app.listen(port, () => {
  console.log(`Linstening on port ${port}`);
});
