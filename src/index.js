import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// Step 1: Create Store
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducer';

const store = createStore(reducer)

const rootElement = document.getElementById('root');

// Step 2: Wrap Provider around App and pass store via props in Provider
ReactDOM.render(<Provider store={store}> <App /> </Provider>, rootElement);
