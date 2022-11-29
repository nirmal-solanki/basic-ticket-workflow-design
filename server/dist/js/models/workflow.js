"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const workflowSchema = new mongoose_1.Schema({
    status: {
        type: "string",
        required: true
    },
    orderBy: {
        type: "number",
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('workflow', workflowSchema);
