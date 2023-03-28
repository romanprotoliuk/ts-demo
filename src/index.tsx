// string, boolean, number

const name: string = "Kat";
const isLoggedIn: boolean = true;
const age: number = 20;

const usernames: string[] = ["Daniel", "Victoria"];

function HelloWorld(usernames: string[]) {
	usernames.forEach((user) => {
		console.log("hello, ", user);
	});
}

HelloWorld(usernames);

// objects
type Person = { name: string; isLoggedIn: boolean; address: string };

const explicitUser: Person | undefined = CreateUser(
	"Roman",
	"false",
	undefined
);

function CreateUser(
	name: string,
	address: string | number,
	person: Person | undefined
): Person | undefined {
	if (typeof address === "string") return { name, isLoggedIn, address };
	else return undefined;
}

function add<T>(a: T, b: T) {
	if (typeof a === "number" && typeof b === "number") return a + b;
	return [a, b];
}

const arrayOfAdds = add<string | number>(1, "2");
