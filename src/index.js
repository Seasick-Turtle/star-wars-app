import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/Index.scss';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
