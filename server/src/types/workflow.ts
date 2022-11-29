import { Document } from 'mongoose';

export interface IWorkflow extends Document {
    status: string
    orderBy: string
}