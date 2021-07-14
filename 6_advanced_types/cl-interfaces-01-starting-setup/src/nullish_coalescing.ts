// koalescencja - proces, w którym dwie lub więcej cząstek łączy się z sobą, tworząc pojedynczą cząstkę.

// When we have a data that we are not sure if it is null or undefined or a piece of data

const userInput = null;

// Way to store default value if the the value is falsy
const storedData = userInput || 'DEFAULT'

// If we want to keep a empty input but just null or undefined should be handled in another way
// This reads, store default only if user input is null or undefined
const storedData2 = userInput ?? 'DEFAULT'