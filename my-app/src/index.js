import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
// import {createStore} from "redux";
// import myRootReducer from './Component/Reducer/myRootReducer';
import Main from './Component/MainPage/Main';
import store from "./Component/Reducer/Store"

// const store = createStore(myRootReducer);
store.subscribe(()=>{
    console.log("get redux store data",store.getState());
})
{/* 将store作为prop传入，即可使应用中的所有组件使用store */}

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();


//_____________________________________________________
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// import AppRouter from './RouterCom/AppRouter';
// import { createStore } from 'redux';
// import {Provider} from "react-redux"
// import rootReducer from './redux/rootReducer';

// const store = createStore(rootReducer)
// store.subscribe(()=>{
//     console.log(store.getState());
// })

// ReactDOM.render(
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>

// , document.getElementById('root'));
// serviceWorker.unregister();
