var elem = null;

var value = elem?.value;
console.log(value);     //undefined

value = elem && elem.value;
console.log(value);     //null

//논리 연산자는 좌항 피연산자가 false로 평가되는 Falsy값이면
//좌항 피연산자를 그대로 반환한다.
//하지만 0 이나 ''은 객체로 평가될 떄도 있다.
var str = '';

var length = str && str.length;
console.log(length);    //''

//옵셔널 체이닝 연산자는 좌항 피연산자가 Falsy값이라도
//null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다
length = str?.length;
console.log(length);    //0