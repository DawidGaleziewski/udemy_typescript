// Intersection types allow us to combine other types
// This type will require combined types from User and Admin
var user1 = {
    name: 'Max',
    privileges: ['login'],
    startDate: new Date()
};
// It works however in this case where it only allows us types that intersect between those two
var httpRequest;
httpRequest = 'error';
