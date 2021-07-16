
// # 1 Property decorator that is used on a class property accepts two arguments: target that is a proeprty object, propertName
function Log(target: any, propertyName: string){
    console.log('Property decorator');
    console.log(target, propertyName)
}

// # 2 accessor decorators
// Accessor decorators accept 3 arguments: target that is a prototype object, name of the accessor, descriptor which is its ownt type and we can get it from TS
function LogAcc(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target, name, descriptor)
}

// Method decorators accept same properties as accessor decorators
function LogMethod(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Method decorator')
    console.log(target, name, descriptor)
}

// Parameters decorators
// It gets name of the method and position of the param
function LogParam(target: any, name: string,  position: number){
    console.log('Param decorator')
    console.log(target, name, position)
}

class Product {
    // It executes when class definition is registred by js
    @Log
    title: string;
    private _price: number;

    // Accessor decorator
    @LogAcc
    set price(val: number){
        this._price = val;
    }
    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    // Method decorator
    @LogMethod
    getPriceWithTax(@LogParam tax: number){
        return this._price * (1 + tax);
    }
}