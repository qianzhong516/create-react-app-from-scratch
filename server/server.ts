import fs from 'fs';
import renderHtmlString from './template';
import express from 'express';
import { parse } from 'node-html-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    '/dist/client',
    express.static(path.resolve(process.cwd(), 'dist/client'))
);

app.listen(PORT, () => {
    console.log('listening to port ' + PORT);
});

app.get('/', async (_, res) => {
    try {
        const html = fs.readFileSync(
            path.resolve(process.cwd(), 'dist/client/index.html'),
            'utf-8'
        );
        const htmlContent = parse(html);
        const root = htmlContent.querySelector('#root')!;
        root.textContent = renderHtmlString();
        res.send(htmlContent.toString());
    } catch (err) {
        throw err;
    }
});
