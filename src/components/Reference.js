


function Reference (props) {
    return (
        <div className="section-educetion">
            <div className="section-educetion-title">
                <h3>reference</h3>
            </div>
            <div className="section-educetion-main">
                <div className="section-educetion-main-company">
                    <h4>{props.name}</h4>
                </div>
                <div className="section-educetion-main-text">
                    <h4>{props.position}</h4>
                </div>
                <div className="section-educetion-main-text">
                    <h4>{props.phone}</h4>
                </div>
            </div>
        </div>
    )
}
export default Reference;