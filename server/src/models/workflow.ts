import { IWorkflow } from '../types/workflow';
import { model, Schema } from 'mongoose'

const workflowSchema: Schema = new Schema({
    status: {
        type: "string",
        required: true
    },
    orderBy: {
        type: "number",
        required: true
    }

}, { timestamps: true });

export default  model<IWorkflow>('workflow', workflowSchema);