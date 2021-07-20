interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string] :string[]
    }
}

// We got a empty object that will fill with validation requirments.
// Using params on the property, we will add a name of the class, inside that class each proprty name will have a requirment
const registeredValidators: ValidatorConfig = {};

function RequiredStr(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        [propName]: ['positive']
    }
}

function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) return true;

    let isValid = true;

    for (const prop in objValidatorConfig){
        for (const validator of objValidatorConfig[prop]){
            switch (validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break
                
            }
        }
    }

    return isValid;
}



class Course {
    @RequiredStr
    title: string;
    @RequiredStr
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('#form')!;

courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const title = document.querySelector('#title') as HTMLInputElement;
    const price = document.querySelector('#price') as HTMLInputElement;

    const titleVal = title.value;
    const priceVal = +price.value;

    const createdCourse = new Course(titleVal, priceVal);
    if(!validate(createdCourse)){
        throw new Error('Error during validation')
    }
    console.log(createdCourse)
})
