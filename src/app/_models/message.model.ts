import { MessageSender } from "./message-sender.model";

export interface Message {
    content: string;
    sender: MessageSender;
    sentAt: string;
}