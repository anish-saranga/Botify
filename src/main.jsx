// import { r2wc } from 'r2wc';
import r2wc from "@r2wc/react-to-web-component"
import App from './App';
import './index.css'

// Define the web component
const WebComponent = r2wc(App, {
    props:
    {
        license: "string",
        bot_greeting: "string",
        user_avatar: "string",
        bot_avatar: "string",
        bot_name: "string",
        show_powered_by: "string",
        chat_bg_color: "string",
    }
});

// Register the custom element
customElements.define('botimoz-widget', WebComponent);
