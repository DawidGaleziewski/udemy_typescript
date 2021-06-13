// #1 Simple class
class Department {
    // This is not a object! This is a field of the class
    name: string;
    numberOfWorkers: number = 0


    constructor(newName: string, numberOfWorkers: number){
        this.name = newName
        this.numberOfWorkers = numberOfWorkers
    }

    // Methods
    // We assign the type as the object which is a Department class
    // This pattern is usefull as it will prevent us from calling describe on another object without name param it needs
    describe(this: Department, prefix: string){
      return `${prefix} - ${this.name} is a department with ${this.numberOfWorkers} workers`  
    }
}

const ITDepartment = new Department('IT', 20);
console.log(ITDepartment, ITDepartment.describe('test prefix'));

// Example of issue prevented with this passed to args
const ITCopy = { 
    // name: 'test name'
describe: ITDepartment.describe}

// ITCopy.describe('test prefix')

// #2 Classes with private and public methods
class Cart {
    // private typescript  keyword will not allow for this to be changed without method usage. It is a modifier keyword
    private items: string[] = [];

    // In contrast we have a public keyword. This is however used by default so we do not have to use it
    public type: string;

    constructor(type: string){
        this.type = type;
    }

    addItem(item: string){
        this.items.push(item)
    }

    getItems(){
        return this.items;
    }
}

const cart = new Cart('clothes');
cart.addItem('t-shirt');
cart.addItem('pants');
console.log('cart items ', cart.getItems())

// This will throw a error due to fact that it is a private item
// cart.items.push('new item that should not been added')

// #3 Shorthand - avoid repetition in constructor

class CartShorthand {
    private items: string[] = [];
    // public type: string;

    // In this case we have to use public keyword as this will tell typescript we also want to create properties in class for this same name
    // readonly typescript modifier - property CANT be changed
    constructor(public type: string, private readonly id: string){
        this.type = type;
        this.id = id;
    }

    addItem(item: string){
        this.items.push(item)
    }

    getItems(){
        return this.items;
    }
    getId(){
        return this.id
    }
}

// #4 inheritance
class ITsDepartment extends Department{
    constructor(newName: string, numberOfWorkers: number = 0, public admins: string[]){
        super(newName, numberOfWorkers)
        // If we did not use the shorthand we should add properties here like this.admins = admins
    }
}

const IT = new ITsDepartment('Helpdesk', 32, ['Mark',' Matt']);

console.log('IT', IT.describe('Ilfords'));

class AccountingDepartment extends Department {
    constructor(newName: string, numberOfWorkers: number, private reports: string[] = []){
        super(newName, numberOfWorkers)
    }
    addReport(report: string){
        this.reports.push(report)
    }
}