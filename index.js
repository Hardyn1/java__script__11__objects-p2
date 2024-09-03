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

// let maria = new CreateUser("Maria", "Novikova", 14);
// let alex = new CreateUser("Alex", "Kirkorov", 30);
// let tatiana = new CreateUser("Tatiana", "Lukoshenko", 60);
// console.log(maria);
// console.log(alex);
// console.log(tatiana);

// Преобразование аргументов в обьектный литерал.
const sergeyParams = {
    firstName: 'Sergey',
    lastName: 'Demin',
    age: 26,
    job: 'Harman',
    position: 'Software Engineer'
};

let sergey = new CreateUser(sergeyParams);
console.log(sergey);
