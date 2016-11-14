import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Match, Miss} from 'react-router'

import './css/./bootstrap.min.css';
import './css/./main.css';


import configureStore from './store/configureStore';

import Calendar from './components/Calendar'
import NoMatch from './components/NoMatch'
import CreateEvent from './components/create-event/CreateEvent'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Calendar}/>
                <Match pattern="/create-event" component={CreateEvent} />

                <Miss component={NoMatch}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

