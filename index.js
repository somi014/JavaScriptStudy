var foo = null ?? 'default string';
console.log(foo);   //default string

//논리 연산자를 사용한 단축 평가의 경우 좌항의 연산자가 Falsy값이면
//우항의 피연산자를 반환한다.
//만약 Falsy 값인 0이나 ''도 기본값으로서 유요하다면 예기치 않은 동작이 발행할 수 있다.
foo = '' || 'default string';
console.log(foo);   //default string

//null 병합 연산자는 ?? 좌항의 피연산자가 Falsy값이라도
//null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.
foo = '' ?? 'default string';
console.log(foo);   //''
