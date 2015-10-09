import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';
import createBadge from './badge';
import './inject';

const store = configureStore({counter: {count: 0}}, true);
createMenu(store);
createBadge(store);
