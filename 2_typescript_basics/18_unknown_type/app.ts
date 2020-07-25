let userInput: unknown;
let userInputAny: any;
let userName: string;

userInput = 5;
userInput = "Max";

userName = userInputAny;

if (typeof userInput === "string") {
  userName = userInput;
}
