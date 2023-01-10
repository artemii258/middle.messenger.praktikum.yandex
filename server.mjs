import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/dist`));
app.listen(port, function () {
	console.log(`Сервер запущен на порту ${port}`);
});
