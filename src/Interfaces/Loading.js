import React from "react";
import './Loading.css'

function Loading() {
    return(
        <div className="rootS">
            <div className="skeleton skeleton-text h2"></div>
            <div className="skeleton skeleton-text bars"></div>
            <div className="skeleton skeleton-text bars"></div>
            <div className="s">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
            </div>
        </div>
    )
};

export {Loading};