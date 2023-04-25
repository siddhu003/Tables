import mongoose from "mongoose";

const tableSchema = mongoose.Schema({
    id: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    gender: { type: String },
    income: { type: String },
    city: { type: String },
    car: { type: String },
    quote: { type: String },
    phone_price: { type: Number }
},
    {
        collection: 'user',
    }
)

export default mongoose.model("user",tableSchema)