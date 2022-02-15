import React, { useEffect, useState } from 'react';

const Breadcrumb = (props) => {

    useEffect(() => {
        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });
    });

    return(
        <div className="breadcrumb-option spad set-bg" data-setbg="/assets/img/breadcrumb-bg.jpg">
            <div className="breadcrumb__text">
                <h2>{ props.label }</h2>
                <div className="breadcrumb__links">
                    <a href="#">Home</a>
                    <span>{ props.pageTitle }</span>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;