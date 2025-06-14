import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb+srv://mbasit467:plmXFu7Pb1FzTfFD@cluster0.ffwifun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    console.log("Connected to MongoDB")
).catch(err => console.error('MongoDB connection error:', err));    
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
