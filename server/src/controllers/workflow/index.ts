import { Response, Request } from 'express';
import { IWorkflow } from './../../types/workflow';
import Workflow from '../../models/workflow';

const getWorkflows = async (req: Request, res: Response): Promise<void> => {
    try {
        const workflows: IWorkflow[] = await Workflow.find().sort({"orderBy": 1})
        res.status(200).json({ workflows })
    } catch (error) {
        throw error
    }
}

const addWorkflow = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IWorkflow, 'status'>

        const workflow: IWorkflow = new Workflow({
            status: body.status
        }) 

        const newWorkflow: IWorkflow = await workflow.save()
        const allWorkflows: IWorkflow[] = await Workflow.find()

        res.status(201).json({ message: 'Workflow added', workflow: newWorkflow, workflows: allWorkflows })
    } catch (error) {
        throw error
    }
}

const updateWorkflow = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateWorkflow: IWorkflow | null = await Workflow.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allWorkflows: IWorkflow[] = await Workflow.find()
        res.status(200).json({
            message: 'Workflow updated',
            workflow: updateWorkflow,
            workflows: allWorkflows,
        })
    } catch (error) {
        throw error
    }
}

const deleteWorkflow = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedWorkflow: IWorkflow | null = await Workflow.findByIdAndRemove(
            req.params.id
        )
        const allWorkflows: IWorkflow[] = await Workflow.find()
        res.status(200).json({
            message: 'Workflow deleted',
            workflow: deletedWorkflow,
            workflows:allWorkflows,
        })
    } catch (error) {
        throw error
    }
}

export { getWorkflows, addWorkflow, updateWorkflow, deleteWorkflow }
