import React, { useEffect } from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import Preloader from '../layout/Preloader';

import data from '../data/data.json';

const History = () => {

    useEffect(() => {
        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });

        setTimeout(() => {
            document.querySelector('.preloader').style.display = "none";  
        }, 1000);
    });

    return(
        <>
            <Preloader />
            <Breadcrumb label="My History" pageTitle="History"/>
            <div className="history">
                <div className="history-edu inner">
                    <h2>Education</h2>
                    <h5>
                        Bachelor’s Degree, Tokyo University of Science, Tokyo
                    </h5>
                    <p>
                        ・ Major in Computer Science<br />
                        ・ Bachelor's Degree Computer Science<br />
                        ・ GPA: 4.0
                    </p>
                </div>
                <div className="history-edu inner">
                    <h2>Employment History</h2>
                    Senior Engineer & PM, Trenser Technology Solutions (P), Tokyo
                    Feb 2014 – Nov 2016
                     Design and development of Invoice generation via email and printer using Jasper Reports.
                     Took part in the production management system and business management system. I was charge of
                    backend and frontend. I used vue as a frontend framework and laravel as a backend framework.I
                    succeeded here, so promoted to PM and contributed sales improvement of company.
                     Developed front-end applications using ReactJS, Flux, NodeJS and Docker and Built Spring based
                    Java and Scala services to support Enterprise Web application

                    Senior Engineer, Cellid Co., Ltd., Tokyo
                    Jan 2017 – Aug 2019
                     Engaged in R&D work in the NLP field of Deep Learning and speed-up work of code for GPU, and
                    was in charge of the project leader.
                     Developed a UI that overlays digital information on a large-scale real space and visualizes it.
                     In particular, developed applications for various devices such as Android and iOS using Unity.
                     Took part in Ethereum based NFT Gift Card and NFT Point Reward Platform.
                    https://amaten.io/

                    Fullstack & Blockchain Developer, Freelancer
                    Jan 2020 –
                     Content integrated management system using CMS
                    Web system for delivering content appropriately and quickly to new channels that are increasing day
                    by day. All content publishing is done through the API. It is possible to obtain accurate information
                    that needs to be known about the daily work efficiency of staff. It is possible to classify the report on
                    the monitoring category into the required conditions and output it.
                    -By migrating the server to the data center, we are making efforts not only for troubleshooting when
                    replacing the system, but also for security and disaster countermeasures.
                    -Reduced man-hours by 23% by reducing the burden of server operation and integrating accounting
                    and personnel salary data.
                     Online payment system of card company (WEB version)
                    Undertook and developed a WEB system that allows online payment using the card balance.
                    Interviewed sales employees who usually use the system, and designed it so that they could pick up
                    and improve the efficiency of personal work that requires man-hours.
                    The system had the following configuration.
                    -Browser plugin: Introduced for transaction security
                    -Membership website (interface)
                    -Communication server with VAN server (backend)
                </div>
            </div>
        </>
    )
}

export default History;