import ReactDOM from 'react-dom';
import App from './components/App';
import { store } from './stores/TodoStore';
import { Provider } from 'react-redux';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
