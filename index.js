// Создание обьектов с использованием обьектных литералов.
let user = {
    name: "Sergey",
    age: 26,
    status: "Software Engineer",
    company: "Harman"
};

let cat = {
    name: "vasya",
    age: 4,
    weight: 10,
};

// Конструкторы обьектов, помогают для написания повторяющихся ссылок users на обьекты.
// Конструктор обьекта его название начинается с БОЛЬШОЙ БУКВЫ.
// В параметр функции мы пишем property обьекта.
// Чтобы работать с параметрами то через this.name (Обозначает name обьекта Cat равен параметру в цункции ).
function Cat(name,age,weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
    // Добавим голос.
    this.voice = function(){
        console.log("meow, moew, meow");
    };
};

// Функция добавления голоса в ОБЬЕКТНОМ ЛИТЕРАЛЕ.
let voice = {
    voice: function(){
        console.log("meow, meow");
    }
};

voice.voice();

// Если до этого обьектного литерала нет, то в случае конструктора =>
// this.name название обьекта внутри функции, = name будет из вне.
// Оператор new создает новый конструктор.
// И в скобках передаем аргументы
let vasya = new Cat("vasya", 4, 10);
vasya.voice();
// ТЕПЕРЬ КОНСТРУКТОР VOICE МОЖНО ИСПОЛЬЗОВАТЬ ДЛЯ ВСЕХ ОБЬЕКТОВ.
// Создание новых обьектов.
let murzik = new Cat("murzik", 10, 10);
murzik.voice();
let matroskin = new Cat('matroskin', 2, 2);

// НОВЫЙ КОНСТРУКТОР.
function CreateUser(firstName, lastName, age, job, position){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
    this.position = position;
};

let maria = new CreateUser("Maria", "Novikova", 14);
let alex = new CreateUser("Alex", "Kirkorov", 30);
let tatiana = new CreateUser("Tatiana", "Lukoshenko", 60);
console.log(maria);
console.log(alex);
console.log(tatiana);

// Преобразование аргументов в обьектный литерал.
function CreateUsers(params){
    // Когда передаем в аргументы обьект то надо один параметр вводить.
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.age = params.age;
    this.job = params.job;
    this.position = params.position;
};

const sergeyParams = {
    firstName: 'Sergey',
    lastName: 'Demin',
    age: 26,
    job: 'Harman',
    position: 'Software Engineer'
};

let sergey = new CreateUsers(sergeyParams);

console.log(sergey);

// ЭКЗЕМПЛЯРЫ КОНСТРУКТОРА.
// Любой обьект созданный конструктором является экземпляром конструктора.
// Конструктор одного вида соответственоо и обьект тоже.
// МОЖЕМ ПРОВЕРИТЬ КАКОГО ЭКЗЕМПЛЯРОМ КАКОГО КОНСТРУКТОРА У НАС ЯВЛЯЕТСЯ ОБЬЕКТ.
// ЧЕРЕЗ INSTANCEOF.
console.log(sergey instanceof CreateUsers);

// ГОТОВЫЙ КОНСТРУКТОР ОБЬЕКТА.
// ОБЬЕКТ ДАТЫ.
// У обьекта Date есть готовые методы.
let now = new Date();
console.log(now); // "2024-09-04T15:50:42.625Z"

// 1 МЕТОД.
let dataString = now.toString();
console.log(dataString);

// 2 МЕТОД. - Узнать: дату, месяц и тд.
let currentYear = now.getFullYear(); 
console.log(currentYear); // 2024
let currentDay = now.getDay(); 
console.log(currentDay) // 3 номер дня недели (среда).

// 3 МЕТОД. - Создать свою дату.
let myOwnDate = new Date('August 1 1993');
console.log(myOwnDate); // "1993-07-31T21:00:00.000Z"

// ОБЬЕКТ МАССИВ - С помощью конструктора можно создать массив.
// 4 МЕТОД.
let arr = new Array();
arr[0] = 'New-Yourk';
console.log(arr);

// ОБЬЕКТ MATH - Без ключевого слова new.
// 5 МЕТОД.
let objMath = Math;
console.log(objMath);


