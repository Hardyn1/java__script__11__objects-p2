// ГЕТТЕРЫ И СЕТТЕРЫ.
// 2 тип свойств обьекта:
// - data properties ( свойства данные )
// - свойства аксессоры ( функции которые используются для присвоения и получения значения).

// ГЕТТЕР ДЛЯ ЧТЕНИЯ.
// СЕТТЕР ДЛЯ ЗАПИСИ.

let car = {
    company: 'Toyota',
    model: 'Land Cruser',
    // СЛОВО GET ОЗНАЧАЕТ ЧТО УСТАНАВЛИВАЕМ ГЕТТЕР.
    // КОНСТРУКЦИЯ GET ЭТО СВОЙСТВО АКСЕССОР (ОНО ВЫГЛЯДИТ КАК ОБЫЧНОЕ СВОЙСТВО).
    // ГЕТТЕР ДОСЛОВНО = ЧТО ТО ПОЛУЧИТЬ. 
    get printCar(){
        console.log(this.company + '' + this.model);
    },

    get printWord(){
        console.log('word');
    },
    // КЛЮЧЕВОЕ СЛОВО SET.
    set printCar(text){
        console.log(this.company + '' + this.model + text);
    },

};
// НЕ ВЫВОДИТСЯ КАК ФУНКЦИЯ, ЭТО СВОЙСТВО.
car.printCar;
car.printWord;
// СЕТТЕР ВЫВОДИТСЯ ТАК.
car.printCar = 'Какой то текст';

let div = document.getElementById('div');
// innerHTML это свойство.
// Div это обьект.
// div.innerHTML = 'Hello';

div = {
    // У ОБЬЕКТА ЕСТЬ АКСЕССОР SET INNERHTML.
    value: '',
    set innerHTML (property){
        this.value = property;
    }
};

