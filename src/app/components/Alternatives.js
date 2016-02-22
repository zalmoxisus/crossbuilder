import React, { Component, PropTypes } from 'react';

const styles = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: '225px',
    zIndex: 99999,
};

const Alternatives = ({matching, stylesUrl, imagesUrl}) => (
    <section id="lmem--alternatives--root" style={styles}>
        <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href={stylesUrl} />
        <div className="main">
            <div className="wrapperframe">
                <div className="mainframe"><div className="mainframe-inner">
                    <div className="highlight">
                        <p className="reco">{matching.description}</p>
                        <div className="button-directive">
                            <a href={matching.alternatives[0].url} target="_blank" className="button with-image reco-button">
                                <img src={ imagesUrl + 'arrow.svg' } className="reco-picto" />
                                <span className="button-label">{matching.alternatives[0].title}</span>
                            </a>
                        </div>
                    </div>
                </div></div>
            </div>

            <aside className="lmem-topbar fixed">
                <div className="lmem-topbar-notification">

                    <div className="mainframe">
                        <div className="mainframe-inner">
                            <h1 className="lmem-topbar-title">
                                { 'Le M' + String.fromCharCode(234) + 'me en Mieux selon ' }
                                <strong>{matching.alternatives[0].contributor }</strong>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="button-wrapper">
                    <div className="button-directive">
                        <a title="" target="" className="button button-compact with-image">
                            <img src={ imagesUrl + 'arrow.svg' } className="lmem-controls-picto lmem-controls-close" />
                            <span className="button-label">{ 'R' + String.fromCharCode(233) + 'duire' }</span>
                        </a>
                    </div>
                </div>

                <a className="lmem-topbar-logo with-tooltip" href="">
                    <img src={ imagesUrl + 'logo-lmem.svg' } alt="" />
                            <span className="tooltip tooltip-right"><span>
                                { 'R' + String.fromCharCode(233) + 'duire le panneau comparatif' }
                            </span></span>
                </a>
            </aside>

            <footer className="lmem-footer sideframe fixed">
                <div className="lmem-footer-wrapper">
                    <a className="lmem-footer-logo with-tooltip" href="">
                        <img src={ imagesUrl + 'logo-lmem.svg' } alt="" />
                                <span className="tooltip tooltip-right"><span>
                                    { 'R' + String.fromCharCode(233) + 'duire le panneau comparatif' }
                                </span></span>
                    </a>

                    <div className="lmem-disclaimer">
                        <a className="no-visited with-tooltip" href="http://www.lmem.net/" target="_blank">{ 'Le M' + String.fromCharCode(234) + 'me en Mieux' }</a>
                        { ', service ind' + String.fromCharCode(233) + 'pendant du site Web consult' + String.fromCharCode(233) + ' ' }
                        (<a target="_blank" href="http://cgu.lmem.net/">
                        { 'conditions g' + String.fromCharCode(233) + 'n' + String.fromCharCode(233) + 'rales d' + String.fromCharCode(8217) + 'utilisation' }</a>).
                    </div>
                </div>
            </footer>
        </div>
    </section>
);

Alternatives.propTypes = {
    alternative: PropTypes.object.isRequired,
    stylesUrl: PropTypes.string.isRequired,
    imagesUrl: PropTypes.string.isRequired,
};

export default Alternatives;
