import React from 'react';
import {Link} from 'react-router-dom';

function Had () {
    return (
        <div className="title">
            <Link  to="../resume">
            <div className="name">
                <h2>Rodion <span>Yevladenko</span></h2>
            </div>
            <div className="professional-title">
                <h3>Junior frontend developer</h3>
            </div>
            </Link>
        </div>
    )
}
export default Had;