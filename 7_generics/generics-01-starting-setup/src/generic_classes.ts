class DataStorage<T extends string | number | boolean> {
  // In this case we do not care what type this array is, but we want a uniform data, same types ie numbers or strings
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const itemIndex = this.data.indexOf(item);
    if (itemIndex === -1) return;

    this.data.splice(itemIndex, 1);
  }

  getItems() {
    return { ...this.data };
  }
}
// When creating a instance of a class we pass a type inside <>. Now we can only add or remove items with that type
const textStorage = new DataStorage<string>();
textStorage.addItem("Phone");
textStorage.addItem("Monitor");

// We cannot operate on types that are not defined in the class instance
textStorage.addItem(1);
