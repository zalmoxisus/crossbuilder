import { REHYDRATE } from 'redux-persist/constants'
import { increment } from './counter';

const rehydrateAction = (store) => {
  return (key, data) => {
    if (key === 'extension' && data.status === 'sent') {
      console.warn('key', key, data);
      store.dispatch(increment());
    }

    return {
      type: REHYDRATE,
      key: key,
      payload: data
    }
  };
};

export default rehydrateAction;