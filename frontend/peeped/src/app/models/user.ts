export class User {

    static users: User[] = [
        new User (1, "su", " ", " "," "," "),
        new User (2, "si",)
    ]
    constructor(
        public id?: number,
        public type?: string,
        public username?: string,
        public fName?: string,
        public lName?: string,
        public email?: string
    ){}
}