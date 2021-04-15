import { renderApp } from './render';
import { mockData, addMessage } from './mockData/mockData';
import 'normalize.css';
import './index.css';

renderApp(mockData, addMessage);
