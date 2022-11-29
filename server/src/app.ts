import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes';
// import Workflow from './models/workflow';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb+srv://nirmalsolanki:asPRQ2yiAlE5KCy3@cluster0.lopsz5o.mongodb.net/tickets_db?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
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
