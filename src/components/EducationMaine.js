import React from "react";
import {Link} from "react-router-dom";

function EducationMaine (props) {
    return (
        <div className="section-educetion-main">
                    <div className="section-educetion-main-company">
                        <h4>{props.name}</h4>
                    </div>
                    <div className="section-educetion-main-text">
                        <h4>{props.context}  
                            <span><Link to={`${props.url}`}>{props.by}</Link></span>
                        </h4>
                    </div>
        </div>
    )
}
export default EducationMaine;