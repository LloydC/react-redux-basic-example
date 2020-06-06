import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux' // react-redux is the bridge for redux to work with react

import App from './container/App'
import store from './store'


render(<Provider store={store}>
        <App />
    </Provider>, 
window.document.getElementById('app'));