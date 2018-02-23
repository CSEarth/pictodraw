import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './components/App'; 
import store from './redux/store';
import socket from './socket';


socket(store);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);