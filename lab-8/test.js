// homework 1
var varString = "це рядок";

var varNumber = 42;

var varBoolean = true;

var varArray = [1, 2, 3, 4, 5];

var varObject = { name: 'андрій', age: 17 };

var varFunction = function () {
    return "це функція";
};

var varNull = null;
var varUndefined = undefined;

console.log(typeof varString);
console.log(typeof varNumber);
console.log(typeof varBoolean);
console.log(typeof varArray);
console.log(typeof varObject);
console.log(typeof varFunction);
console.log(typeof varNull);
console.log(typeof varUndefined);

// homework 2
var varString = 42;

var varNumber = "це рядок";

console.log(typeof varString);
console.log(typeof varNumber);

// homework 3
var stringValue = "42";
var numberValue = 42;

console.log("порівняння тілкьки за значенням:", stringValue == numberValue);
console.log("порівняння за типом та значенням:", stringValue === numberValue);

// homework 4
var number = 255;
console.log("шифрування:", number.toString(16), "дешифрування:", parseInt(number.toString(16), 16));

// homework 5
var a = 1;
function b() {
    a = 10;
    return;
}
b();
console.log(a);

// результат виведення змінної a буде 1, через те що в середені функції b оголошується локальна змінна a, так вона змінює своє значення на 10, але це не стосується глобальної змінної a, вона залишається 1
// щоб змінити глобальну змінну, нам потрібно прибрати оголошення локальної змінної(бульбашки), щоб впливати на значення глобальної змінної

// homework 6

var x = 5;
console.log(+x); // перетворює на число
console.log(-x); // змінює знак на протилежний
console.log(++x); // збільшує на 1 і повертає нове значення
console.log(--x); // зменшує на 1 і повертає нове значення
console.log(!true); // інвертує boolean значення
console.log(typeof x); // повертає тип змінної


console.log(10 + 5); // додавання
console.log(10 - 5); // віднімання
console.log(10 * 5); // множення
console.log(10 / 5); // ділення
console.log(10 % 3); // остача від ділення
console.log(2 ** 3); // піднесення до степеня
console.log(10 > 5); // більше
console.log(10 < 5); // менше
console.log(10 >= 5); // більше або дорівнює
console.log(10 <= 5); // менше або дорівнює
console.log(10 == "10"); // нестроге порівняння
console.log(10 === "10"); // строге порівняння
console.log(10 != 5); // нестроге не дорівнює
console.log(10 !== "10"); // строге не дорівнює
console.log(true && false); // і
console.log(true || false); // або

var age = 18;
console.log(age >= 18 ? "дорослий" : "неповнолітній"); // умова

// homework 7
var line1 = "нехай завжди буде сонце,";
var line2 = "нехай завжди буде небо,";
var line3 = "нехай завжди буде мама,";
var line4 = "нехай завжди буду я.";

var virsh = line1.concat("\n", line2, "\n", line3, "\n", line4);
console.log(virsh);

// homework 8
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSum = arr[0];
var currentSum = arr[0];
var start = 0;
var end = 0;
var tempStart = 0;

for (var i = 1; i < arr.length; i++) {
    if (currentSum < 0) {
        currentSum = arr[i];
        tempStart = i;
    } else {
        currentSum += arr[i];
    }

    if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
    }
}

var subArray = arr.slice(start, end + 1);
console.log("масив:", arr);
console.log("підмасив з максимальною сумою:", subArray);
console.log("максимальна сума:", maxSum);

// homework 9
function addLargeNumbers(num1, num2) {
    var result = "";
    var carry = 0;
    var i = num1.length - 1;
    var j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        var digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        var digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        
        var sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
        
        i--;
        j--;
    }
    return result;
}

var number1 = "897667582136241207406320871";
var number2 = "678965432134569874321098765";
var sum = addLargeNumbers(number1, number2);

console.log("число 1:", number1);
console.log("число 2:", number2);
console.log("сума:", sum);

// homework 10
function arrayDifference(arr1, arr2) {
    var result = [];
    var arr2Copy = arr2.slice();

    for (var i = 0; i < arr1.length; i++) {
        var found = false;
        for (var j = 0; j < arr2Copy.length; j++) {
            if (arr1[i] === arr2Copy[j]) {
                arr2Copy.splice(j, 1);
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arr1[i]);
        }
    }

    return result;
}

var array1 = [1, 2, 3, 4, 5, 2, 3];
var array2 = [2, 3, 5, 6, 2];
var difference = arrayDifference(array1, array2);

console.log("масив 1:", array1);
console.log("масив 2:", array2);
console.log("різниця:", difference);


