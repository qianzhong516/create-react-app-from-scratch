import { hydrateRoot } from 'react-dom/client';
import { App } from './src/app';
import React from 'react';

hydrateRoot(document.querySelector('#root')!, <App />);
