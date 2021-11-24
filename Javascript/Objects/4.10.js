let person = {
    name: '',
    surname : '',
    setName: function (name) { this.name = name; },
    setSurname: function (surname) { this.surname = surname; },
    getFullName: function () { 
        return (new String).concat(this.name, " ", this.surname); 
    } 
};

person.setName("Александр");
person.setSurname("Малаев");
console.log(person);
console.log(person.getFullName());