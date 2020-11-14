import express from 'express';
import { productRouter } from './routes/product';

const port = 3000;

const app = express();
app.use(express.json());

app.use('/api/v1/products', productRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});