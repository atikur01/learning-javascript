const person ={
    firstName:"MR",
    lastName: "NoNO",
    fullName: function(){
        return this.firstName + " "+ this.lastName;
    },
}

console.log(person.fullName())