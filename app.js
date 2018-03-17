var readline = require("readline");

var readlineObj = readline.createInterface({ input: process.stdin });

//read line from the console
readlineObj.question("Input :", answer => {
  console.log(burnThemAll(answer));
  readlineObj.close();
});

//function to return maximum dragons tat can be killed
function burnThemAll(answer) {
  var finArr = [];
  obj = JSON.parse(answer);
  if (typeof obj == "object") {
    if (obj != null && obj != undefined && obj != "") {
      obj.forEach(element => {
        var c = 0;
        obj.forEach((innerElement, index) => {
          var dx = Math.pow(
            parseFloat(innerElement.x) - parseFloat(element.x),
            2
          );
          var dy = Math.pow(
            parseFloat(innerElement.y) - parseFloat(element.y),
            2
          );
          var sum = parseFloat(dx) + parseFloat(dy);
          if (parseFloat(sum) <= parseFloat(5 / 2 * (5 / 2))) {
            c++;
          }
          if (index == obj.length - 1) {
            finArr.push(parseInt(c));
          }
        });
      });
      console.log(finArr);

      return Math.max.apply(null, finArr);
    }
    return 0;
  }
}
