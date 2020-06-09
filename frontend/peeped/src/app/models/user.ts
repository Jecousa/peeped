export class User {

    constructor(
        public id?: number,
        public username?: string,
        public fName?: string,
        public lName?: string,
        public email?: string, 
        public age?: number,
        public gender?: string,
        public location?: number
    ){}
    
}
export const USERS: User[] =[
    { id: 1, username: "co_babe99",fName:"Amy", lName: "Kent", email: "cobe99@gmail.com", age: 22, gender: "female", location: 19  },
    { id: 2, username: "natureDude",fName:"Joe", lName: "Adamas", email: "clevername@gmail.com", age: 34, gender: "male", location: 3  },
    { id: 3, username: "ziggy12",fName:"Amy", lName: "Kent", email: "cobe99@gmail.com", age: 22, gender: "female", location: 7  }


]