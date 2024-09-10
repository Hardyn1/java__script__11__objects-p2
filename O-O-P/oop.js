// ООП в JavaScript.
function CreateUser(name, age, position){
    this.name = name;
    this.age = age;
    this.position = position;
    this.getSalary = function(){
        console.log('Получил зарплату');
    };
    // Если вызовем метод, то будет будет получить каждый сотрудник
};

let mara = new CreateUser("Maria", 14, "Manager");
let serg = new CreateUser("Sergey", 32, "Designer");
let oleg = new CreateUser("Oleg", 24, "Director");

console.log(mara);
console.log(serg);
console.log(oleg);

let smartphone = {
    company: 'Apple',
    model: 'Iphone 11',
    color: 'Green',
    year: 2019,
    call: function(){
        console.log('Начинаю набор');
    }
};

console.log(smartphone);

// ПРОТОТИП.
function UserCreate(name, age, position){
        this.name = name;
        this.age = age;
        this.position = position;
        this.getSalary = function(){
            console.log("Got salary");
        };
};

let yura = new UserCreate("Yura", 30, "Software Engineer");
let elena = new UserCreate("Elena", 37, "Manager");
console.log(yura);
// Добавим новый метод через прототип.
// ЧЕРЕЗ ТОЧКУ КЛЮЧЕВОЕ СЛОВО PROTOTYPE.МЕТОД И РАВЕН = ФУНКЦИИ.
// И ТЕПЕРЬ МЕТОД HAPPYBIRTHDAY ДОСТУПЕН ДЛЯ ВСЕХ ЭКЗЕМПЛЯРОВ ЭТОГО КОНСТРУКТОРА.
UserCreate.prototype.happyBirthday = function(){
    console.log('Happy Birthday');
};

yura.happyBirthday();
elena.happyBirthday();

console.log(yura);
console.log(elena);

// ЧТОБЫ МЕТОД НЕ ПОВТОРЯЛСЯ ПРИ ВЫВОДЕ В КОНСОЛЬ ТО...
// У ПРОТОТИПА ОБЬЕКТЫ USERCREATE ЕСТЬ МЕТОД GETSALARY И ОН НЕ КАЧУЕТ ИЗ ОБЬЕКТА В ДРУГОЙ.
// ИЗНАЧАЛЬНО В КОНСТРУКТОРЕ ЭТОГО МЕТОДА НЕТ, НО ЧЕРЕЗ ПРОТОТИП МЫ ЕГО ПРИСВОИЛИ. 
UserCreate.prototype.getSalary = function(){
    console.log("Got salary");
};

yura.getSalary();
elena.getSalary()

// hasOwnProperty.
console.log(yura.hasOwnProperty("age")); // true = относится к экземпляру к конструктору yura.
console.log(yura.hasOwnProperty("getSalary"));
// false = относится к прототипу. 

// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ.
// Если хотим узнать свойство обьекта, а его там нет то он есть в прототипе.
let human = {
    drink: function(){
        console.log('Я умею пить')
    },
    eat : function(){
        console.log('eat');
    }
};

let girl = {
    sleep: function(){
        console.log('I can sleep');
    }
};
// Чтобы наша девушка научилась еще и пить.
// То пишем girl. (СВОЙСТВО - proto = human.
// Таким образом отнаследовали все методы human и вставили в girl.
// ЦЕПОЧКА НАСЛЕДОВАНИЯ.
girl.__proto__ = human;
girl.drink(); // Умеет пить.

let man = {
    eat : function(){
        console.log('I can eat');
    }
};

girl.__proto__ = human;
man.__proto__ = girl;

man.sleep();

// Object.create().
// Object = конструктор.
// 1 Аргументом можно передать прототип данного обьекта.
// Если прототипа нет то 1 аругумент можем передать просто пустой обьект.
// А 2 Создать нужный обьект.
// Через название свойства value.
// Если создать еще свойство, то открываем обьект и в качестве свойств передаем еще 1 обьект.
let dog = Object.create({},{
    name : {
        value: 'Baron',
        enumerable: true, // К СВОЙСТВУ VALUE МОЖНО ДОБАВИТЬ ФЛАГИ (НАСТРОЙКИ) = если true то можно изменить
    },
    age: { // name: 'Baron', age: 24;
        value: 24,
        enumerable: true, // Если true свойство перечисляется в циклах. В противном случае игнорируетs.
    },
    weight: {
        value: 10,
        enumerable: false, // weight в цикле не будет виден .
        configurable: true, // Если true свойство можно удалить, если false нет.     
    }
});
console.log(dog);

// ФЛАГИ СВОЙСТВ.
// Можно свойства скрыть у обьекта или только для чтения.
// OBJECT CREATE ПРИНИМАЕТ ЕЩЕ КАКИЕ ТО НАСТРОЙКИ.
for(let key in dog){
    console.log(key);
}
