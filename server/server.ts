import fs from 'fs';
import renderHtmlString from './template';
import express from 'express';
import { parse } from 'node-html-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, () => {
    console.log('listening to port ' + PORT);
});

app.get('/', async (req: any, res: any) => {
    try {
        const html = fs.readFileSync(
            path.resolve(__dirname, '../dist/index.html'),
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
