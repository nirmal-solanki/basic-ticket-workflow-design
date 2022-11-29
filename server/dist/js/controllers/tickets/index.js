"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTicket = exports.updateTicket = exports.addTicket = exports.getTicket = exports.getTickets = void 0;
const ticket_1 = __importDefault(require("../../models/ticket"));
const getTickets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tickets = yield ticket_1.default.find().populate('status');
        res.status(200).json({ tickets });
    }
    catch (error) {
        throw error;
    }
});
exports.getTickets = getTickets;
const getTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ticket = yield ticket_1.default.findOne({ _id: req.params.id });
        res.status(200).json({ ticket });
    }
    catch (error) {
        throw error;
    }
});
exports.getTicket = getTicket;
const addTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const ticket = new ticket_1.default({
            name: body.name
        });
        const newTicket = yield ticket.save();
        const allTickets = yield ticket_1.default.find().populate('status');
        res.status(201).json({ message: 'Ticket added', ticket: newTicket, tickets: allTickets });
    }
    catch (error) {
        throw error;
    }
});
exports.addTicket = addTicket;
const updateTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTicket = yield ticket_1.default.findByIdAndUpdate({ _id: id }, body);
        const allTickets = yield ticket_1.default.find().populate('status');
        res.status(200).json({
            message: 'Ticket updated',
            ticket: updateTicket,
            tickets: allTickets,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTicket = updateTicket;
const deleteTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTicket = yield ticket_1.default.findByIdAndRemove(req.params.id);
        const allTickets = yield ticket_1.default.find().populate('status');
        res.status(200).json({
            message: 'Ticket deleted',
            ticket: deletedTicket,
            tickets: allTickets,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTicket = deleteTicket;
