import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import PopupApp from './App';

const PopUpRoot =  ({store}) => (
    <Provider store={store}>
        <PopupApp />
    </Provider>
);

PopUpRoot.propTypes = {
    store: PropTypes.object.isRequired
};

export default PopUpRoot;