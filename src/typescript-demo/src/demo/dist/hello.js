"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Active"] = 200] = "Active";
    Status[Status["Inactive"] = 100] = "Inactive";
})(Status || (Status = {}));
var StatusString;
(function (StatusString) {
    StatusString["Active"] = "Active";
    StatusString["Inactive"] = "Inactive";
})(StatusString || (StatusString = {}));
let stat = "Active";
let statusEnum = stat;
let isActive = Status.Active;
let scores = [10, 20, 30];
let graph = [0, 0];
let stringExample; //can only be string
let anyExample; //can be any type
anyExample = true;
anyExample = "Now it's a string";
let unknownExample; //can be any type but safer than any
unknownExample = 42;
unknownExample = "Now it's a string";
const user = {
    name: "Jon",
    age: 30
};
const user2 = {
    name: "Jon",
    age: 30,
    email: "jon@example.com",
    getName: () => "Jon"
};
const user3 = {
    name: "Jon",
    age: 30,
    email: "jon@example.com",
    getName: () => "Jon",
    address: "123 Main St"
};
const calc = (value) => value;
console.log(calc(5));
function greet(name) {
    return `Hello, ${name}!`;
}
class Person {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getName() {
        if (!this.name) {
            throw new Error("Name is not set");
        }
        return this.name;
    }
}
class Pointed {
    x;
    y;
}
const rec = {
    'point1': { x: 0, y: 0 }
};
let PointGenerator = (x) => ({ x: x * 2 });
PointGenerator(3);
let pointd = new Pointed();
pointd.x = 10;
let pointed = {};
pointed.x = 5;
let req = { x: 0, y: 0 };
class AbstractPerson {
    name;
    constructor(name) {
        this.name = name;
    }
    getFirstName() {
        const firstName = this.name.split(" ")[0];
        if (!firstName) {
            throw new Error("First name is not set");
        }
        return firstName;
    }
}
class SubCitizen extends AbstractPerson {
    constructor(name) {
        super(name);
    }
}
class Citizen extends Person {
    address;
    constructor(name, age, email, address) {
        super(name, age, email);
        this.address = address;
    }
    getName() {
        return `${super.getName()} from ${this.address}`;
    }
}
let p = new Person("Jon", 30, "jon@example.com");
function sumScores(arr, bonusNum = 0) {
    let sumTotal = 0;
    let sumString = "";
    if (bonusNum !== undefined) {
        arr.push(bonusNum);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            sumTotal += arr[i];
            sumString += `Added ${arr[i]}. `;
        }
    }
    let resTuple = [sumTotal, sumString];
    return resTuple;
}
const sumScorePoint = [{
        score: [],
        bonusNum: 0
    }];
const sumScoreRT = sumScoresWithScoreItem({
    score: [],
    bonusNum: 0
});
let scoreItem = {
    score: [],
    bonusNum: 0
};
class SumItem extends Number {
    item;
    constructor(item) {
        super();
        this.item = item;
    }
    calculate(incoming) {
        return this.item + incoming.item;
    }
}
function createPair(item1, item2) {
    return item1.calculate(item2);
}
function sumScoresWithScoreItem(item) {
    return sumScores(item.score, item.bonusNum);
}
const message = greet(user.name);
let undefinedExample;
let nullExample = null;
function printToConsole(status) {
    if (status === StatusString.Active) {
        console.log(message);
        console.log(sumScoresWithScoreItem(scoreItem));
        console.log(undefinedExample);
        console.log(nullExample);
    }
}
printToConsole(StatusString.Active);
//# sourceMappingURL=hello.js.map