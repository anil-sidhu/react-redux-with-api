import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import ReduxThunk from 'redux-thunk';
import App from './Containers/AppContainer';

// root file with redux
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))
ReactDOM.render(<Provider store={store}>
        <div>
            <App />
        </div>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
 