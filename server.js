// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

//middlewares
app.use(express.json());
app.use(cors());

app.post('/api/data', (req, res) => {
	const data = req.body;
	console.log('Received data', data);
	res.json({ message: 'Data received successfully', receivedData: data });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

