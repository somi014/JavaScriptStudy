console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

var total = 200;    // 총 인원

var x = 120;        // a 참가
var y = 115;        // b 참가
var z = 17;         // 참가 x
var onlyB;          // b만 참가한 인원

///
var other = total - z;  // 하나 이상 참가한 인원
var both = x + y - (other);     // 둘 다 참가한 인원 52
onlyB = y - both;

console.log("B만 참가한 인원 : " + onlyB);

//onlyB = y - (x + y - (total - z))
//onlyB = -x + total - z;
console.log((total - onlyB) === (x + z));