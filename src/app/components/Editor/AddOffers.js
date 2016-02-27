import React, { Component, PropTypes } from 'react';

class AddOffers extends React.Component {

    render () {
        const { addOffers } = this.props;
        return (
          <div>
            <textarea style={{width: "100%", height: "100px"}} ref="add_offer"></textarea><br />
            <a href="#" onClick={(e)=> {
                addOffers(this.refs.add_offer.value) && e.preventDefault();
            }}>Ajouter</a>
          </div>
        );
    }
}

AddOffers.propTypes = {
    addOffers: PropTypes.func.isRequired
};


export default AddOffers;