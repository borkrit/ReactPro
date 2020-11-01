
// 1

function concat (stringFirst: string, stringSecond: string): string{
    return `${stringFirst}  ${stringSecond}`
};

console.log(concat('Hello','World'));


// 2
type StringorNumber = string | number;

interface FirtstInterface {
    howIDoIt: string;
    simeArray: StringorNumber[];
    withData: object;
}

const MyHometask: FirtstInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

console.log(MyHometask.simeArray);

// 3
interface MyArray<T> {
	[N: number]: T;

	reduce<U>(fn: (el: T,el1: T) => U): U;
}

const t: MyArray<number> = [1,2,3];
t.reduce(d)

function d (a:number, b:number):number{ return a + b; }