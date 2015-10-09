import configureStore from '../../../app/store/configureStore';
import './contextMenus';
import createBadge from './badge';
import './inject';

const store = configureStore({counter: {count: 0}}, true);
createBadge(store);
