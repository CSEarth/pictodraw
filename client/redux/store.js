import { createStore, applyMiddleware} from 'redux';
import reducer from './reducers/mainReducer';
import { onEventSocket, socketMiddleware} from './../socket';



const store = createStore(
  reducer,
  applyMiddleware(socketMiddleware)
);


onEventSocket(store);

export default store;
