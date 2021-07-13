// Intersection types allow us to combine other types

type Admin = {
    name: string;
    privileges: string[]
};

type User = {
    name: string;
    startDate: Date
}

// We can combine two types by &
type SuperUser = Admin & User;

// This type will require combined types from User and Admin
const user1: SuperUser ={
    name: 'Max',
    privileges: ['login'],
    startDate: new Date()
}

// Intersection types work similar to interface inheritance
// However we can use other types, not only objects in types

type EndStatus = 'done' | 'rejected' | null | 'error';
type StartStatus = 'waiting' | null | 'compute' | 'error';

type Status =  StartStatus & EndStatus;

// It works however in this case where it only allows us types that intersect between those two
let httpRequest: Status;
httpRequest = 'error';



