import { Router } from 'express';
import bodyParser from "body-parser";

import { addTicket, deleteTicket, getTicket, getTickets, updateTicket } from '../controllers/tickets';
import { addWorkflow, deleteWorkflow, getWorkflows, updateWorkflow } from '../controllers/workflow';
 
const router: Router = Router();

// create application/json parser
router.use(bodyParser.json());

router.get('/tickets', getTickets);

router.get('/ticket/:id', getTicket);

router.post('/add-ticket', addTicket);

router.put('/edit-ticket/:id', updateTicket);

router.delete('/delete-ticket/:id', deleteTicket);

router.get('/workflows', getWorkflows);

router.post('/add-workflow', addWorkflow);

router.put('/edit-workflow/:id', updateWorkflow);

router.delete('/delete-workflow/:id', deleteWorkflow);

export default router;
