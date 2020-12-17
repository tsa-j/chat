import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import {createStore} from 'redux';
import Provider from "react-redux/lib/components/Provider";

const store = createStore(reducer);

const update = () => {
    console.log("update");
    console.log(store.getState()); // при каждом обращение к store будет выводить его значение
}

store.subscribe(update);  // Подписываемся на вызов store

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
