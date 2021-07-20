// Decorators are capable of returning value.
// Return value depends on type of decorator


// For class decorators we can return and replace a constructor or a class

function ChangeConstructor(){

    // We want to use generics to describe that the param of the function we are using (oldConstructor) will have a new kewyord used on it
    return function<T extends {new(...args: any[]): {}}>(oldConstructor: T){
        // We are extending the class to keep the original properties
        return class extends oldConstructor {
            constructor(...args: any[]){
                super()
            }
        }
    }
}

// We can also return something in method and accessor decorators
function modulateSound(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    // Property descriptor is js concept. We can control if it can be changed
    return {...descriptor ,enumerable: true};
}

@ChangeConstructor()
class Animal {
    constructor(){

    }

    @modulateSound
    howl(sound: string){
        console.log(`${sound}`)
    }
}

// # 2 Example: autobind decorator

// This will replace old method config
function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    console.log('descriptor ', descriptor)
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        // Getter is a extra logic that is executed before the function runs
        get(){
            // this will refer to the object that we originally defined the method
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
} 

class Printer {
    message = 'This works!';

    @Autobind
    showMessage(){
        console.log(this.message)
    }
}

const p = new Printer();

const button = document.querySelector('#test-1')!;
button.addEventListener('click', p.showMessage)