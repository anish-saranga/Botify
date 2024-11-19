import React from 'react';
import ReactDOM from 'react-dom';
import { r2wc } from 'r2wc';
import App from './App';
import './index.css'

// Define the web component
const WebComponent = r2wc(App, React, ReactDOM);

// Register the custom element
customElements.define('botimoz-widget', WebComponent);
