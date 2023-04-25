import mongoose from "mongoose"
import user from '../models/table.js'

// id: { type: String },
//     first_name: { type: String },
//     last_name: { type: String },
//     email: { type: String },
//     gender: { type: String },
//     income: { type: String },
//     city: { type: String },
//     car: { type: String },
//     quote: { type: String },
//     phone_price: { type: Number }

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await user.find();
        const allUserDetails = []

        allUsers.forEach(users => {
            allUserDetails.push({ id: users.id, first_name: users.first_name, last_name: users.last_name, email: users.email, gender: users.gender, income: users.income, city: users.city, car: users.car, quote: users.quote, phone_price: users.phone_price })
        })

        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}