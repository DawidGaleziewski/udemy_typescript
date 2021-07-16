var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// # 1 Property decorator that is used on a class property accepts two arguments: target that is a proeprty object, propertName
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
// # 2 accessor decorators
// Accessor decorators accept 3 arguments: target that is a prototype object, name of the accessor, descriptor which is its ownt type and we can get it from TS
function LogAcc(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target, name, descriptor);
}
// Method decorators accept same properties as accessor decorators
function LogMethod(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target, name, descriptor);
}
// Parameters decorators
// It gets name of the method and position of the param
function LogParam(target, name, position) {
    console.log('Param decorator');
    console.log(target, name, position);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        // Accessor decorator
        set: function (val) {
            this._price = val;
        },
        enumerable: false,
        configurable: true
    });
    // Method decorator
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title");
    __decorate([
        LogAcc
    ], Product.prototype, "price");
    __decorate([
        LogMethod,
        __param(0, LogParam)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
