const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './')));

app.use('/*', (_, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, function () {
	console.log(`Сервер запущен на порту ${PORT}`);
});
