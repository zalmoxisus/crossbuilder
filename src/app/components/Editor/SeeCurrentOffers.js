import React, { Component, PropTypes } from 'react';

class SeeCurrentOffers extends React.Component {

    state = { displayIt: false };

    toggleDisplay(){ this.setState({ displayIt: !this.state.displayIt }); }
    prettyPrintOffers(offers){ return JSON.stringify(offers,null,2); }

    render () {
        const { store: reduxStore, actions: { flushMatchingOffers, flushOffers } } = this.props;
        const displayStyle = {
            textAlign: "left",
            border: "solid 2px black",
            padding: "25px",
            whiteSpace: "pre-wrap"
        };

        return (
            <div>
                <a href="#" onClick={(e)=>(this.toggleDisplay() && e.preventDefault())}>
                    {(this.state.displayIt)
                        ? 'hide offers'
                        : 'display current offers'
                    }
                </a>
                {(this.state.displayIt)
                    ?   <div>
                            <h3>Offres</h3>
                            <pre style={displayStyle}>{this.prettyPrintOffers(reduxStore.offers)}</pre>
                            <a href="#" onClick={(e) => (flushOffers() && e.preventDefault)}>Vider les offres</a>
                            &nbsp;|&nbsp;
                            <a href="#" onClick={(e) => (flushMatchingOffers() && e.preventDefault)}>Vider les alternatives</a>
                        </div>
                    : ''
                }
            </div>
        );
    }
}

SeeCurrentOffers.propTypes = {
    store: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};


export default SeeCurrentOffers;