import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <App />

    </BrowserRouter>
);

//JSON SERVER TO RUN COMMAND
// json-server --watch data/db.json --port 3030