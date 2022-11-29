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
exports.deleteWorkflow = exports.updateWorkflow = exports.addWorkflow = exports.getWorkflows = void 0;
const workflow_1 = __importDefault(require("../../models/workflow"));
const getWorkflows = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workflows = yield workflow_1.default.find().sort({ "orderBy": 1 });
        res.status(200).json({ workflows });
    }
    catch (error) {
        throw error;
    }
});
exports.getWorkflows = getWorkflows;
const addWorkflow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const workflow = new workflow_1.default({
            status: body.status
        });
        const newWorkflow = yield workflow.save();
        const allWorkflows = yield workflow_1.default.find();
        res.status(201).json({ message: 'Workflow added', workflow: newWorkflow, workflows: allWorkflows });
    }
    catch (error) {
        throw error;
    }
});
exports.addWorkflow = addWorkflow;
const updateWorkflow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateWorkflow = yield workflow_1.default.findByIdAndUpdate({ _id: id }, body);
        const allWorkflows = yield workflow_1.default.find();
        res.status(200).json({
            message: 'Workflow updated',
            workflow: updateWorkflow,
            workflows: allWorkflows,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateWorkflow = updateWorkflow;
const deleteWorkflow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedWorkflow = yield workflow_1.default.findByIdAndRemove(req.params.id);
        const allWorkflows = yield workflow_1.default.find();
        res.status(200).json({
            message: 'Workflow deleted',
            workflow: deletedWorkflow,
            workflows: allWorkflows,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteWorkflow = deleteWorkflow;
