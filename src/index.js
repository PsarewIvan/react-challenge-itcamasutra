import { renderApp } from './render';
import { mockData, addMessage, changeNewMessage } from './mockData/mockData';
import 'normalize.css';
import './index.css';

renderApp(mockData, addMessage, changeNewMessage);
