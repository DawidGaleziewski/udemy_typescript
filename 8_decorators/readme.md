TSC wont use default tsc config when I target a file.
In order for decorators to work when targetting a specific file need to use:

```bash
tsc -w --experimentalDecorators --emitDecoratorMetadata --target es5 src/returning_and_changing_classes.ts

```