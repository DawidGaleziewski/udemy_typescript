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
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        // In this case we do not care what type this array is, but we want a uniform data, same types ie numbers or strings
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        var itemIndex = this.data.indexOf(item);
        if (itemIndex === -1)
            return;
        this.data.splice(itemIndex, 1);
    };
    DataStorage.prototype.getItems = function () {
        return __assign({}, this.data);
    };
    return DataStorage;
}());
// When creating a instance of a class we pass a type inside <>. Now we can only add or remove items with that type
var textStorage = new DataStorage();
textStorage.addItem('Phone');
textStorage.addItem('Monitor');
// We cannot operate on types that are not defined in the class instance
textStorage.addItem(1);
