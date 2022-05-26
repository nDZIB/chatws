import { Message } from "./message.model";

export interface Chat {
    readonly lastMessage: Message;
    readonly thumbnails: string[];
    readonly name: string;
}