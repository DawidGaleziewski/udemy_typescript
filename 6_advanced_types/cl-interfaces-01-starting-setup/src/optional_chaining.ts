// Works from typescript 3.7 +

// When we work with nested data that we do not have the certainty that it will exist i.e fetching data from backend

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO'
    }
}

// Way to do this in vanilla
console.log(fetchedUserData.job && fetchedUserData.job.title)

// Typescript optional chaining operator
console.log(fetchedUserData?.job.title)

// We can do this on multiple levels of nesting
// Typescript optional chaining operator
console.log(fetchedUserData?.job?.title)