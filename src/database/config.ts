import * as mongoose from 'mongoose';
import * as config from 'config';

export function connect(): void {
    mongoose.connect(config.get("mongooseURI"), {useNewUrlParser: true})
        .then(() => console.log("MongooseDB connected!"))
        .catch(err => console.log(`MongooseDB can't connect! Error: ${err}`));
}
