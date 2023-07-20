import { renderToString } from 'react-dom/server';
import { App } from '../src/app';
import React from 'react';

export default function renderHtmlString() {
    return renderToString(<App />);
}
