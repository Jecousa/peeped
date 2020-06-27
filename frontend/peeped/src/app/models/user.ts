export class User {

    constructor(
        public id?: number,
        public username?: string,
        public fName?: string,
        public lName?: string,
        public email?: string, 
        public age?: number,
        public gender?: string,
        public location?: number, 
        public isUser?: boolean
    ) {}

}
export const USERS: User[] = [
    { id: 1, username: 'co_babe99', fName: 'Amy', lName: 'Kent', email: 'cobe99@gmail.com', age: 22, gender: 'female', location: 19, isUser: false },
    { id: 2, username: 'natureDude', fName: 'Joe', lName: 'Adamas', email: 'clevername@gmail.com', age: 34, gender: 'male', location: 3, isUser: false },
    { id: 3, username: 'ziggy12', fName: 'Amy', lName: 'Kent', email: 'cobe99@gmail.com', age: 22, gender: 'female', location: 7, isUser: false  },
    { id: 4, username:"user_McUserface", fName: "bill", lName: "billson", email:"theUser@gmail.com", age:19, gender:"male", location: 12, isUser: true}


]