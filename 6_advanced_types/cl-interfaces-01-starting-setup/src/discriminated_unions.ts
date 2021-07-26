// Discriminated unions are special kind of type guards

// We create a discriminated types by ading a value like 'type' or 'kind'
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  // We can act on those types in switch statments
  switch (animal.type) {
    case "bird":
      return `flying in speed with ${animal.flyingSpeed}`;
    case "horse":
      return `horse running speed ${animal.runningSpeed}`;
  }
};

// Typescript will inform us that bird does not have running speed
moveAnimal({ type: "bird", runningSpeed: 20 });

// While horse has that property
moveAnimal({ type: "horse", runningSpeed: 20 });
