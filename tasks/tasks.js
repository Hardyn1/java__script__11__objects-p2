/* 
    TASK 1

    Напишите функцию конструктор, которая создает объект 'comment' со свойствами :
    - id
    - author
    - text

    Создайте с помощью этого конструктора минимум 3 объекта
*/

function Comment(id, author, text){
    this.id = id;
    this.author = author;
    this.text = text;
};

let name1 = new Comment('Name1', 'Me', 'Hello');
let name2 = new Comment('Name2', 'Him', 'Hi');
let name3 = new Comment('Name3', 'Her', 'Nice');
console.log(name1);
console.log(name2);
console.log(name3);


/*
    TASK 2
    У нас есть три собаки.
    Собака rex умеет лаять,
    собака charlie умеет быстро бегать,
    а вот собака martin к сожалению ничего из этого не может. 
    Научите собаку charlie лаять, а собаку martin и лаять и быстро бегать.
*/


var rex = {
        animal: 'dog',
        makeSound: function(){
            console.log('Гав Гав');
        }
};

var charlie = {
        animal: 'dog',
        runFast : function() {
            console.log('I can run very fast');
        },
        __proto__: rex,
};

charlie.makeSound();
console.log(charlie);

var martin = {
        animal: 'dog',
};   

martin = Object.create({charlie});
console.log(martin);

/* 
    TASK 3

    Создайте объект работника с именем Евгений
    которому 33 года,
    который работает дизайнером,
    и у которого зарплата 2500$ в месяц. 
    Сделайте так,
    чтобы при проверке этого задания я не смог с помощью перебора свойств,
    этого объекта узнать какая зарплата у этого работника.
    Само свойство зарплат,
    и его значение должно присутствовать в объекте.

*/

let userName = Object.create({}, {

    name : {
        value: 'Евгений',
        enumerable: true,
    },
    age : {
        value: 33,
        enumerable: true,
    },
    position: {
        value: 'Дизайнер',
        enumerable: true,
    },
    salary : {
        value: '2500$ в месяц',
        enumerable: false,
    },
   
})

for(let keys in userName){
    console.log(keys + ":" + [userName]);
};

/*
    TASK 4

    Выведите на экран текущую дату-время в формате '00:00:00 31.12.2010'.
    Также напишите функцию,
    которая будет добавлять 0 перед днями и месяцами,
    которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).

*/

function ownDate(){

    let currentD = new Date();

    let resD = addsZero(currentD.getDay());
    let resM = addsZero(currentD.getMonth());
    let resY = addsZero(currentD.getFullYear());
    let fullDate = resD + ':' + resM + ':' + resY;
    console.log(fullDate);

};

ownDate();

function addsZero(num){
    if(num <= 9){
        return `0` + num;
    } else {
        return num;
    };
};
