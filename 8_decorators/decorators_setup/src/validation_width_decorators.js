var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// We got a empty object that will fill with validation requirments.
// Using params on the property, we will add a name of the class, inside that class each proprty name will have a requirment
var registeredValidators = {};
function RequiredStr(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = (_a = {},
        _a[propName] = ['required'],
        _a);
}
function PositiveNumber(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = (_a = {},
        _a[propName] = ['positive'],
        _a);
}
function validate(obj) {
    var objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig)
        return true;
    var isValid = true;
    for (var prop in objValidatorConfig) {
        for (var _i = 0, _a = objValidatorConfig[prop]; _i < _a.length; _i++) {
            var validator = _a[_i];
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
var Course = /** @class */ (function () {
    function Course(t, p) {
        this.title = t;
        this.price = p;
    }
    __decorate([
        RequiredStr,
        __metadata("design:type", String)
    ], Course.prototype, "title", void 0);
    __decorate([
        RequiredStr,
        __metadata("design:type", Number)
    ], Course.prototype, "price", void 0);
    return Course;
}());
var courseForm = document.querySelector('#form');
courseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var title = document.querySelector('#title');
    var price = document.querySelector('#price');
    var titleVal = title.value;
    var priceVal = +price.value;
    var createdCourse = new Course(titleVal, priceVal);
    if (!validate(createdCourse)) {
        throw new Error('Error during validation');
    }
    console.log(createdCourse);
});
