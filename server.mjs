import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`)); // если использовать __dirname без всех манипуляций сверху, то выскакивает ошибка ReferenceError: __dirname is not defined in ES module scope

app.listen(process.env.PORT || PORT, function () {
	console.log(`Сервер запущен на порту ${PORT}`);
});
