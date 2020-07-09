import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import AppContainer from "./AppContainer";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


