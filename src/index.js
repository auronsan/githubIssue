import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import * as serviceWorker from './serviceWorker';
import './style/app.scss';
require('dotenv').config()

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
