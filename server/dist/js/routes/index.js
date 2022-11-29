"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const tickets_1 = require("../controllers/tickets");
const workflow_1 = require("../controllers/workflow");
const router = (0, express_1.Router)();
// create application/json parser
router.use(body_parser_1.default.json());
router.get('/tickets', tickets_1.getTickets);
router.get('/ticket/:id', tickets_1.getTicket);
router.post('/add-ticket', tickets_1.addTicket);
router.put('/edit-ticket/:id', tickets_1.updateTicket);
router.delete('/delete-ticket/:id', tickets_1.deleteTicket);
router.get('/workflows', workflow_1.getWorkflows);
router.post('/add-workflow', workflow_1.addWorkflow);
router.put('/edit-workflow/:id', workflow_1.updateWorkflow);
router.delete('/delete-workflow/:id', workflow_1.deleteWorkflow);
exports.default = router;
