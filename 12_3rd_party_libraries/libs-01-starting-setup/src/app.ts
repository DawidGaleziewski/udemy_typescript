// #1 lodash in js only libraty. We will have to translate it to typescript in order to use it.

// In order to do this we will have to install types of the 3rd party library npm i --save-dev @types/lodash.

// @types is a library with d.ts files (declaration types). They contain instructions for typescript
import _ from 'lodash';

console.log(_.shuffle([1,2,3]))

//#2 global values
// If we know a variable exists globaly i.e via script tag on html, we can use the declare keyword
declare var Global: string;

// #3 class-transformer
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';

import {Product} from './product.model';

const products = [{title:'A Carpet', price: 29.99 },{title:'A Book', price: 9.99 }]

// ! Manually transform data to classes
const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
})

for (const prod of loadedProducts){
    console.log(prod.getInformation());
}

// ! using class-transformer library
const loadedProducts2 = plainToClass(Product, products)

// #4 class-validator
import {IsNotEmpty, IsNumber, isPositive, validate} from 'class-validator';

class Player {
    @IsNotEmpty()
    nick: string;
    @IsNotEmpty()
    password: string;
    hoursPlayed: number;

    constructor(n:string, p: string, h:number){
        this.nick = n;
        this.password = p;
        this.hoursPlayed = h;
    }
}

const playerOne = new Player('Dave', 'secretPass', 20);
validate(playerOne).then(errors => {
    if(errors) throw new Error('Oooopsie');
    console.log('All is fine')
})




