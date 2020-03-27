export class Message {

    constructor(
        public id?: number,
        public dateRec?: Date,
        public message?: string,
        public read?: boolean
    ){}
    
}
export const MESSAGES: Message[] =[
    { id: 1,message: "hello world", read: false },
    { id: 2,message: "welcome to Peeped", read: false },
    { id: 3,message: "take a look around", read: true }
]