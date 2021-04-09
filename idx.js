class Students{
    constructor(name,age){
        this.name=name;
        this.year=age;
    }
    age(){
        let date= new Date()
        return date.getFullYear() - this.year;
    }
}
let student= new Students("Jean",2000)
console.log(student.name+" is "+student.age()+" years old")


class User{
    constructor(name){
        this.name=name;
    }
    get name(){
    return this._name
    }
    set name(value){
        if (value.length < 4) {
            console.log("Name is too short");
            return;
    }
    this._name=value;
}
}

let user= new User("John");
console.log(user.name);

user = new User(""); 