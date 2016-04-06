'use strict';

import ReactDOM from 'react-dom';
import Router from 'react-router';

import routes from './routes';
ReactDOM.render(routes, document.getElementById('app'));

// render styles in the end
import styles from './styles/app.scss';
