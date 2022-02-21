import React, { useEffect } from 'react';
import Breadcrumb from '../layout/Breadcrumb';

import data from '../data/data.json';

const History = () => {

    useEffect(() => {
        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });
    });

    return(
        <>
            <Breadcrumb label="My History" pageTitle="History"/>
            
        </>
    )
}

export default History;