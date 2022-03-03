//boolean
let isCool: boolean = false;

//number
let age: number = 56;
let al:number;

//string
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, I'm only ${age}`;


//Array
let pets: string[] = ['cat', 'mouse', 'dragon'];
let pets2: Array<string> = ['pig', 'lion', 'dragon'];

//Object
let wizard: object = {
  a: 'John'
}

//Tuple
let basket: [string, number];
basket = ['basketball', 10];

//Enum
enum Size {Small = 1, Medium, Large}
let sizeName: string = Size[2];
alert(sizeName); // Displays 'Medium' as its value is 2 above

//Any
let whatever: any = 'aaaaghhhhhh noooooo!';
whatever=basket;

//void      //doesn't return anything
let sing = (): void => console.log('Lalalala')

//null and undefined
let meh: undefined = undefined;
let noo: null = null;

//never
let error = (): never => {
  throw Error('blah!');
}

// Type Assertions:
let ohhithere: any = "OH HI THERE";

let strLength: number = (ohhithere as string).length;

//Interface
interface RobotArmy {
  count: number,
  type: string,
  magic?: string
}

// type RobotArmy2= {
//   count: number,
//   type: string,
//   magic?: string
// }

let fightRobotArmy = (robots: RobotArmy) =>{
  console.log('FIGHT!');
}

fightRobotArmy({count:1, type:'dragon'});

let fightRobotArmy2 = (robots: {count: number, type: string, magic?: string}) =>{
  console.log('FIGHT!');
}

//Type Assertion
interface CatArmy {
  count: number,
  type: string,
  magic?: string
}

let dog={} as CatArmy
dog.count

//Function
let fightRobotArmyF = (robots: RobotArmy): void =>{
  console.log('FIGHT!');
}
let fightRobotArmy2F = (robots: {count: number, type: string, magic?: string}): void =>{
  console.log('FIGHT!');
}

// *** Classes
class Animal {
    private sing: string;
    constructor(sound: string) {
        this.sing = sound; 
    }
    greet() {
        return "Hello, " + this.sing;
    }
}

let lion = new Animal("Lion");
// lion.sing
//default is public

//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
let x = 3;
// automatimally detexts x is a number.

//Union Type  //chaining possible
let confused: string | number = 'hello'