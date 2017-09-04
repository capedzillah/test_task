import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/index'

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
