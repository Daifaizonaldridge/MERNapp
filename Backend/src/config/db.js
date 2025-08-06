import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://daifaizonaldridge:GRe065xyLAaBMgVV@cluster0.duymucx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('MONGODB CONNECTED SUCCESFULLY');
    } catch (error) {
        console.error('MONGODB CONNECTION FAILED', error);
        process.exit(1); // Exit the process with failure
    }
}