import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'
import App from './components/App'; 
import store from './store'; 



// mounting onto App
ReactDOM.render(
	<Provider store={store}> 
  <App />
  </Provider>, 
  document.getElementById('root')
);