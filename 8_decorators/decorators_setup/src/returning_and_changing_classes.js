// Decorators are capable of returning value.
// Return value depends on type of decorator
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// For class decorators we can return and replace a constructor or a class
function ChangeConstructor() {
    // We want to use generics to describe that the param of the function we are using (oldConstructor) will have a new kewyord used on it
    return function (oldConstructor) {
        // We are extending the class to keep the original properties
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.call(this) || this;
            }
            return class_1;
        }(oldConstructor));
    };
}
// We can also return something in method and accessor decorators
function modulateSound(target, name, descriptor) {
    // Property descriptor is js concept. We can control if it can be changed
    return __assign(__assign({}, descriptor), { enumerable: true });
}
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.howl = function (sound) {
        console.log("" + sound);
    };
    __decorate([
        modulateSound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Animal.prototype, "howl", null);
    Animal = __decorate([
        ChangeConstructor(),
        __metadata("design:paramtypes", [])
    ], Animal);
    return Animal;
}());
// # 2 Example: autobind decorator
// This will replace old method config
function Autobind(_target, _methodName, descriptor) {
    var originalMethod = descriptor.value;
    console.log('descriptor ', descriptor);
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        // Getter is a extra logic that is executed before the function runs
        get: function () {
            // this will refer to the object that we originally defined the method
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.message = 'This works!';
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        Autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Printer.prototype, "showMessage", null);
    return Printer;
}());
var p = new Printer();
var button = document.querySelector('#test-1');
button.addEventListener('click', p.showMessage);
