import { createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/mainReducer';
import { startSocket, socketMiddleware} from './../socket';



// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducer,
  // composeWithDevTools(),
  applyMiddleware(socketMiddleware)
);


startSocket(store);

export default store;
