import React, { useState, useEffect } from 'react';
import Breadcrumb from '../layout/Breadcrumb';

import data from '../data/data.json';

const Portfolio = () => {

    const [ptype, setPType] = useState('');

    useEffect(() => {
        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });

    });

    const filterPortfolio = (e, keyword) => {
        document.querySelector('.portfolio__filter .active').classList.remove('active');
        e.target.classList.add('active');
        setPType(keyword);
    }

    // const filterPortfolio =(keyword) => (e) => {
    //     console.log(keyword)
    // }

    return(
        <>
            {/* <Header /> */}

            <Breadcrumb label="Portfolio" pageTitle="Portfolio"/>

            <section className="portfolio spad">
                <div className="portfolio-inner inner">
                    <ul className="portfolio__filter">
                        <li className="active" data-filter="*" onClick={(e) => { filterPortfolio(e, '') } }>All</li>
                        {/* <li data-filter=".branding" onClick={ filterPortfolio('branding') }>Branding</li> */}
                        <li data-filter=".branding" onClick={(e) => { filterPortfolio(e, 'nftgame') } }>NFT Game</li>
                        <li data-filter=".digital-marketing" onClick={(e) => { filterPortfolio(e, 'smartcontract') } }>Smart Contract</li>
                        <li data-filter=".web" onClick={(e) => { filterPortfolio(e, 'web') } }>Web</li>
                        <li data-filter=".photography" onClick={(e) => { filterPortfolio(e, 'system') } }>Photography</li>
                        <li data-filter=" .ecommerce" onClick={(e) => { filterPortfolio(e, 'ecommerce') } }>eCommerce</li>
                    </ul>
                    <div className="portfolio__gallery">
                        {
                            data.portfolios
                                .filter(portfolio => (portfolio.type === ptype) || (ptype ==="") )
                                .map(portfolio => {
                                    return (
                                        <div key={portfolio.id} className="mix">
                                            <div className="portfolio__item">
                                                <a href={ portfolio.link } target="_blank">
                                                    <div className="portfolio__item__video set-bg" data-setbg={`/assets/img/portfolio/${ portfolio.img }`}>
                                                    </div>
                                                    <div className="portfolio__item__text">
                                                        <h4>{ portfolio.title }</h4>
                                                        <ul>
                                                            <li>{portfolio.stacks}</li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                    
                                })
                        }
                        
                    </div>
                    <div className="pagination__option">
                        <a href="#" className="arrow__pagination left__arrow"><span className="arrow_left"></span> Prev</a>
                        <a href="#" className="number__pagination">1</a>
                        <a href="#" className="number__pagination">2</a>
                        <a href="#" className="arrow__pagination right__arrow">Next <span className="arrow_right"></span></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;