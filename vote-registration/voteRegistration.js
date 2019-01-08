"use strict";
exports.__esModule = true;
var VoteRegistration = /** @class */ (function () {
    function VoteRegistration(voteRegistration) {
        this.salutation = voteRegistration.salutation;
        this.firstName = voteRegistration.firstName;
        this.middleName = voteRegistration.middleName;
        this.lastName = voteRegistration.lastName;
        this.age = voteRegistration.age;
    }
    return VoteRegistration;
}());
function register(personDetails) {
    if (personDetails.age >= 18) {
        console.log(personDetails.firstName + " " + personDetails.lastName + " Successfully Registered for Vote with details:");
        console.log("Salutation: " + personDetails.salutation);
        console.log("First Name: " + personDetails.firstName);
        if (personDetails.middleName) {
            console.log("Middle Name: " + personDetails.middleName);
        }
        console.log("Last Name: " + personDetails.lastName);
        console.log("Age: " + personDetails.age);
    }
    else {
        console.log(personDetails.firstName + " " + personDetails.lastName + " not applicable for Vote Registration as Age is < 18");
    }
}
var regDetails1 = {
    salutation: 'Ms',
    firstName: 'Shilpi',
    lastName: 'Saini',
    age: 18
};
var regDetails2 = {
    salutation: 'Mr',
    firstName: 'Sam',
    middleName: "S",
    lastName: 'Johnson',
    age: 15
};
var person1 = new VoteRegistration(regDetails1);
var person2 = new VoteRegistration(regDetails2);
register(person1);
register(person2);
