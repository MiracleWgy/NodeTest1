var fs = require("fs");


//阻塞式调用
var data = fs.readFileSync("test.txt");

console.log("The block call  is Start ！！！");
console.log("data = " + data.toString());
console.log("The block call  is END ！！！");


//非阻塞式调用
var data_nonblock = fs.readFile("test.txt", function (err, data) {

    if(err) return console.error(err.toString());
    console.log("[DATA]:" + data.toString());
    console.log("############The nonblock call is END!!!################");
});

console.log("############The nonblock call is START!!!################");
