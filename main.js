console.log('HEROPY')

console.log(new Date('2022-02-13').getDay());

function helloFunc() {

    console.log(1234);
}
helloFunc();

function returnFunc() {
    return 123;
}
//let a = returnFunc();
//console.log(a);

function sum(a, b) { //매개변수
    return a+b;
}

let a = sum(1,2);   //인수
let b = sum(3,6);
let c = sum(4,8);

console.log(a,b,c);

//익명함수 -> 데이터로서 활용 및 변수에 할당하여 사용
let world = function () {
    console.log('world');
}
world();

//객체 데이터
const heropy = {
    name: 'HEROPY',
    age: 85,
    //메소드
    getName: function (){
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
}

const hisName = heropy.getName();
console.log(hisName);

console.log(heropy.getName());

const hisAge = heropy.getAge();
console.log(hisAge);

console.log(heropy.getAge());

let isShow = true;

if (isShow) {
    console.log('Show');
} else {
    console.log('No');
}