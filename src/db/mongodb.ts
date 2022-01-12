
import { IDatabase } from "./idatabase"
import mongoose = require('mongoose');

class MongoDatabase implements IDatabase {
    public async connect(): Promise<void> {
        await mongoose.connect(process.env.MONGODB_CONN);
    }

}