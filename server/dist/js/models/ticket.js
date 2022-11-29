"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ticketSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "workflow",
        default: null,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("tickets", ticketSchema);
