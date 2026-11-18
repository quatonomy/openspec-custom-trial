import dest = require('./dest');

const { demoFunction } = dest;

enum Status {
  Active = 200,
  Inactive = 100
}

enum StatusString {
  Active = "Active",
  Inactive = "Inactive"
}

type grid<T extends number> = T[][];
let gridItem: grid<number> = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

type DynamicObj = { [key: `xxx_${string}`]: string };
let dynamicObjThisYear: DynamicObj = { xxx_example: "value" };

let stat = "Active";

let statusEnum: StatusString = stat as StatusString;

let isActive = Status.Active;
let scores = [10, 20, 30];
let graph: [x: number, y: number] = [0, 0];

let stringExample: string; //can only be string
let anyExample: any; //can be any type
anyExample = true;
anyExample = "Now it's a string";

let unknownExample: unknown; //can be any type but safer than any
unknownExample = 42;
unknownExample = "Now it's a string";

const user = {
  name: "Jon",
  age: 30
}

interface U1 {
  name: string;
  age: number;

}

interface U1 {
  email: string;

  getName: () => string;
}

interface U2 extends U1 {
  address: string;
}

const user2: U1 = {
  name: "Jon",
  age: 30,
  email: "jon@example.com",
  getName: () => "Jon"
}

const user3: U2 = {
  name: "Jon",
  age: 30,
  email: "jon@example.com",
  getName: () => "Jon",
  address: "123 Main St"
}

const calc = (value: number) => value;

console.log(calc(5));

function greet(name: string | number): string {
  return `Hello, ${name}!`;
}

class Person implements U1 {
  name: string;
  age: number;
  email: string;

  public constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public getName(): string {
    if (!this.name) {
      throw new Error("Name is not set");
    }
    return this.name;
  }
}

interface Point {
  x?: number;
  y?: number;
}

class Pointed implements Point {
  x?: number;
  y?: number;
}

const rec: Record<string, Point> = {
  'point1': { x: 0, y: 0 }
};


let PointGenerator = (x: number) => ({ x: x * 2 });
PointGenerator(3);

type RT = ReturnType<typeof PointGenerator>;

let pointd = new Pointed();
pointd.x = 10;

let pointed: Partial<Point> = {};
pointed.x = 5;

let req: Required<Point> = { x: 0, y: 0 };


abstract class AbstractPerson {
  name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getFirstName(): string {
    const firstName = this.name.split(" ")[0];
    if (!firstName) {
      throw new Error("First name is not set");
    }
    return firstName;
  }
}

class SubCitizen extends AbstractPerson {
  public constructor(name: string) {
    super(name);
  }
}

class Citizen extends Person {
  public address: string;

  public constructor(name: string, age: number, email: string, address: string) {
    super(name, age, email);
    this.address = address;
  }

  public override getName(): string {
    return `${super.getName()} from ${this.address}`;
  }
}

let p = new Person("Jon", 30, "jon@example.com");

function sumScores(arr: number[], bonusNum: number = 0): readonly [number, string] {
  let sumTotal = 0;
  let sumString = "";

  if (bonusNum !== undefined) {
    arr.push(bonusNum);
  }

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      sumTotal += arr[i]!;
      sumString += `Added ${arr[i]!}. `;
    }
  }

  let resTuple: readonly [number, string] = [sumTotal, sumString];

  return resTuple;
}

const sumScorePoint: Parameters<typeof sumScoresWithScoreItem> = [{
  score: [],
  bonusNum: 0
}];

const sumScoreRT: ReturnType<typeof sumScoresWithScoreItem> = sumScoresWithScoreItem({
  score: [],
  bonusNum: 0
});

let scoreItem: {
  score: number[];
  bonusNum: number;
} = {
  score: [],
  bonusNum: 0
};

interface CanBeCalculated<T> {
  calculate(item: T): number;
}

class SumItem extends Number implements CanBeCalculated<SumItem> {
  item: number;

  public constructor(item: number) {
    super();
    this.item = item;
  }

  public calculate(incoming: SumItem): number {
    return this.item + incoming.item;
  }
}

function createPair<T extends CanBeCalculated<T>>(item1: T, item2: T): number {
  return item1.calculate(item2);
}

function sumScoresWithScoreItem(item: { score: number[]; bonusNum: number } ) : readonly [number, string] {
  return sumScores(item.score, item.bonusNum);
}

const message: string = greet(user.name);

let undefinedExample: string;
let nullExample: null = null;


function printToConsole(status: StatusString): void {
  if (status === StatusString.Active) {
    console.log(message);
    console.log(sumScoresWithScoreItem(scoreItem));
    console.log(undefinedExample!);
    console.log(nullExample!);
  }
}

printToConsole(StatusString.Active);
demoFunction();


