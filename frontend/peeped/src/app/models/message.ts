import { type } from 'os';

export type Message = {
         id: number;
         sender: string;
         receiver: string;
};

export type Query = {
    messaging: Message[];
};
