import { Response, Request } from 'express'
import { ITicket } from './../../types/ticket'
import Ticket from '../../models/ticket'

const getTickets = async (req: Request, res: Response): Promise<void> => {
    try {
        const tickets: ITicket[] = await Ticket.find().populate('status');
        res.status(200).json({ tickets })
    } catch (error) {
        throw error
    }
}

const getTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticket: ITicket = <ITicket>await Ticket.findOne({_id: req.params.id});
        res.status(200).json({ ticket })
    } catch (error) {
        throw error
    }
}

const addTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITicket, 'name'>

        const ticket: ITicket = new Ticket({
            name: body.name
        }) 

        const newTicket: ITicket = await ticket.save()
        const allTickets: ITicket[] = await Ticket.find().populate('status')

        res.status(201).json({ message: 'Ticket added', ticket: newTicket, tickets: allTickets })
    } catch (error) {
        throw error
    }
}

const updateTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTicket: ITicket | null = await Ticket.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTickets: ITicket[] = await Ticket.find().populate('status')
        res.status(200).json({
            message: 'Ticket updated',
            ticket: updateTicket,
            tickets: allTickets,
        })
    } catch (error) {
        throw error
    }
}

const deleteTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTicket: ITicket | null = await Ticket.findByIdAndRemove(
            req.params.id
        )
        const allTickets: ITicket[] = await Ticket.find().populate('status')
        res.status(200).json({
            message: 'Ticket deleted',
            ticket: deletedTicket,
            tickets:allTickets,
        })
    } catch (error) {
        throw error
    }
}

export { getTickets, getTicket, addTicket, updateTicket, deleteTicket }
