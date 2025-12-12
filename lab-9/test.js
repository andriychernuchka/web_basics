// homework 1
var pattern = [9, 13, 20, 30, 45, 45, 30, 20, 13, 9];

for (var i = 0; i < pattern.length; i++) {
    var stars = "";
    for (var j = 0; j < pattern[i]; j++) {
        stars += "*";
    }
    console.log(stars);
}

// homework 2
console.log("таймер запущено на 10 секунд...");

var startTime = new Date().getTime();
var targetTime = startTime + 10000;
var lastSecond = 0;

while (new Date().getTime() < targetTime) {
    var currentTime = new Date().getTime();
    var elapsed = Math.floor((currentTime - startTime) / 1000);

    if (elapsed > lastSecond) {
        console.log("пройшло секунд:", elapsed);
        lastSecond = elapsed;
    }
}

console.log("10 секунд минуло");

// homework 3
var car = {
    speedometer: 0
};

console.log("об'єкт car:", car);
console.log("спідометр:", car.speedometer);

Object.defineProperty(car, 'setSpeedometer', {
    value: function (speed) {
        this.speedometer = speed;
        return this;
    }
});

Object.defineProperty(car, 'getSpeedometer', {
    value: function () {
        console.log("Поточна швидкість:", this.speedometer);
        return this;
    }
});

Object.defineProperty(car, 'clearSpeedometer', {
    value: function () {
        this.speedometer = 0;
        return this;
    }
});

car.setSpeedometer(120);
console.log("після setSpeedometer(120):", car.getSpeedometer());

car.clearSpeedometer();
console.log("після clearSpeedometer():", car.getSpeedometer());

car.setSpeedometer(200).setSpeedometer(300).getSpeedometer().clearSpeedometer();
console.log("фінальне значення:", car.speedometer);

// homework 4

class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        this.speed = 0;
    }

    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} прискорюється до ${this.speed} км/год`);
        return this;
    }

    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} гальмує до ${this.speed} км/год`);
        return this;
    }

    getInfo() {
        return `${this.brand} (${this.year}), швидкість: ${this.speed} км/год`;
    }
}

// Клас Car успадковує Vehicle
class Car extends Vehicle {
    constructor(brand, year, doors) {
        super(brand, year);
        this.doors = doors;
        this.fuel = 100;
    }

    honk() {
        console.log(`${this.brand} сигналить: Біп-біп!`);
        return this;
    }

    refuel(amount) {
        this.fuel += amount;
        console.log(`${this.brand} заправлено. Паливо: ${this.fuel}%`);
        return this;
    }

    getInfo() {
        return `${super.getInfo()}, дверей: ${this.doors}, паливо: ${this.fuel}%`;
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, year, type) {
        super(brand, year);
        this.type = type;
        this.hasHelmet = false;
    }

    wheelie() {
        console.log(`${this.brand} робить wheelie!`);
        return this;
    }

    putHelmet() {
        this.hasHelmet = true;
        console.log(`${this.brand}: Шолом одягнуто`);
        return this;
    }

    getInfo() {
        return `${super.getInfo()}, тип: ${this.type}, шолом: ${this.hasHelmet ? 'так' : 'ні'}`;
    }
}

var myCar = new Car("Toyota", 2020, 4);
console.log(myCar.getInfo());
myCar.accelerate(60).honk().brake(20).refuel(10);
console.log(myCar.getInfo());

console.log("\n");

var myMoto = new Motorcycle("Yamaha", 2022, "спортивний");
console.log(myMoto.getInfo());
myMoto.putHelmet().accelerate(100).wheelie().brake(50);
console.log(myMoto.getInfo());

console.log("myCar є екземпляром Car:", myCar instanceof Car);
console.log("myCar є екземпляром Vehicle:", myCar instanceof Vehicle);
console.log("myMoto є екземпляром Motorcycle:", myMoto instanceof Motorcycle);
console.log("myMoto є екземпляром Vehicle:", myMoto instanceof Vehicle);


// homework 5

/*  
коли ми викликаємо ({}).toString(), отримуємо "[object Object]". 
перше слово "object" (з маленької літери) - це тип даних,
а друге "Object" (з великої) - це назва конструктора. тобто формат такий:
"[тип НазваКонструктора]".
 
а чому тоді [].toString() виводить просто "", а не "[object Array]"?
справа в тому, що у масивів є власний метод toString(), який перевизначає
стандартний метод з Object.prototype. коли ми пишемо [1,2,3].toString(),
він просто обєднує всі елементи через кому і отримуємо "1,2,3".
 
щоб все ж таки побачити "[object Array]" для масиву, треба викликати
оригінальний метод напряму: Object.prototype.toString.call([]).
це обходить перевизначений метод і показує справжній тип.
*/

console.log("({}).toString():", ({}).toString());
console.log("[].toString():", [].toString());
console.log("Object.prototype.toString.call([]):", Object.prototype.toString.call([]));

console.log("\nПриклади з різними типами:");
console.log("String:", Object.prototype.toString.call("текст"));
console.log("Number:", Object.prototype.toString.call(42));
console.log("Boolean:", Object.prototype.toString.call(true));
console.log("Array:", Object.prototype.toString.call([1, 2, 3]));
console.log("Object:", Object.prototype.toString.call({}));
console.log("Function:", Object.prototype.toString.call(function () { }));
console.log("Date:", Object.prototype.toString.call(new Date()));
console.log("null:", Object.prototype.toString.call(null));
console.log("undefined:", Object.prototype.toString.call(undefined));

Array.prototype.toTypeString = function () {
    return Object.prototype.toString.call(this);
};

var testArray = [1, 2, 3];
console.log("\ntestArray.toString():", testArray.toString());
console.log("testArray.toTypeString():", testArray.toTypeString());
