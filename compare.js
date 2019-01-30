var a = Number(prompt("a?"));
var b = Number(prompt("b?"));
function compare(a,b){
if (a > b) {return "a大於b";}
else if (a < b){return"a小於b";}
else if (a == b){return"a等於b";}
else {return"可能a或b不是數字";}}
alert(compare(a,b));
