let numbers = [10, 25, 7, 14, 30];

console.log("Исходный массив:", numbers);

numbers.push(20);

console.log("1. После добавления числа в конец:", numbers);

numbers.shift();

console.log("2. После удаления числа из начала:", numbers);

let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log("3. Чётные числа:", evenNumbers);

let multipliedNumbers = numbers.map(function (number) {
    return number * 5;
});

console.log("4. Числа, умноженные на 5:", multipliedNumbers);

let sum = numbers.reduce(function (total, number) {
    return total + number;
}, 0);

let average = sum / numbers.length;

console.log("5. Среднее арифметическое:", average);

let sortedNumbers = [...numbers].sort(function (a, b) {
    return a - b;
});

console.log("6. Массив по возрастанию:", sortedNumbers);


let celebrities = [
    {
        name: "Michael Jackson",
        age: 50,
        role: "singer"
    },
    {
        name: "Leonardo DiCaprio",
        age: 51,
        role: "actor"
    },
    {
        name: "Taylor Swift",
        age: 36,
        role: "singer"
    },
    {
        name: "Tom Holland",
        age: 30,
        role: "actor"
    },
    {
        name: "Cristiano Ronaldo",
        age: 41,
        role: "football player"
    },
    {
        name: "Adele",
        age: 38,
        role: "singer"
    },
    {
        name: "Jackie Chan",
        age: 72,
        role: "actor"
    },
    {
        name: "Emma Watson",
        age: 36,
        role: "actress"
    },
    {
        name: "Justin Bieber",
        age: 32,
        role: "singer"
    },
    {
        name: "Millie Bobby Brown",
        age: 22,
        role: "actress"
    }
];

let celebrityNames = celebrities.map(function (celebrity) {
    return celebrity.name;
});

console.log("1. Имена знаменитостей:", celebrityNames);

let celebrityDescriptions = celebrities.map(function (celebrity) {
    return `${celebrity.name} is a ${celebrity.role}`;
});

console.log("2. Знаменитости и их роли:", celebrityDescriptions);

let oldest = celebrities.reduce(function (oldestPerson, celebrity) {
    return celebrity.age > oldestPerson.age ? celebrity : oldestPerson;
});

let youngest = celebrities.reduce(function (youngestPerson, celebrity) {
    return celebrity.age < youngestPerson.age ? celebrity : youngestPerson;
});

console.log("3. Самый старший:", oldest);
console.log("3. Самый младший:", youngest);

let ageDifference = oldest.age - youngest.age;

console.log("Разница в возрасте:", ageDifference);

let hasMinor = celebrities.some(function (celebrity) {
    return celebrity.age < 18;
});

console.log("4. Есть ли несовершеннолетний:", hasMinor);

let celebritiesOver20 = celebrities.filter(function (celebrity) {
    return celebrity.age > 20;
});

console.log("5. Знаменитости старше 20 лет:", celebritiesOver20);
