import { Document } from 'mongoose';

export interface ITicket extends Document {
    name: string
    status: string
}