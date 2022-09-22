import {mongoose} from "mongoose";

const connect = async () => {
    await mongoose.connect('mongodb+srv://mdrabiulhasan:mdrabiulhasan@mern-expense.ecd8t5c.mongodb.net/?retryWrites=true&w=majority');
    console.log("mongo atlas database are connected");
}

export default connect;