"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
// import Workflow from './models/workflow';
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(routes_1.default);
const uri = `mongodb+srv://nirmalsolanki:asPRQ2yiAlE5KCy3@cluster0.lopsz5o.mongodb.net/tickets_db?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => {
    throw error;
});
// const seedStatus: any[] = [
//     {status: 'open', orderBy: 1},
//     {status: 'in progress', orderBy: 2},
//     {status: 'code review', orderBy: 3},
//     {status: 'closed', orderBy: 4}
// ];
// const seedData = async () => {
//     await Workflow.deleteMany({});
//     await Workflow.insertMany(seedStatus);
// };
// seedData().then(()=> {
//     mongoose.connection.close();
// });
