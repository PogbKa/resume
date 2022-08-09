import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';

function Certificate (props) {
    const divWidth = React.createRef();
    const imgWidth = React.createRef();
    useEffect (() => {
        imgWidth.current.style.width=`${divWidth.current.clientWidth+'px'}`
    })
    return (
        <>
            <div className="section-abou-me">
                <div className="section-abou-me-header">
                    <h3>{props.name}</h3>
                </div>
                <div className="section-abou-me-text" ref={divWidth}>
                    <img src={props.img} alt="" ref={imgWidth}/>
                </div>
                <div className="section-abou-me-text">
                    <Link  to="../resume"><h4>На главную</h4></Link>
                </div>
        </div>
        </>
    )
}
export default Certificate;