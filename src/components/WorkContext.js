function WorkContext (props) {
    return (
        <>
                <div className="section-work-context">
                    <div className="section-work-context-years">
                        <h4>{props.data}</h4>
                    </div>
                    <div className="section-work-context-main">
                        <div className="section-work-context-main-title">
                            <h4>{props.position}</h4>
                        </div>
                        <div className="section-work-context-main-company">
                            <h4>{props.firma}</h4>
                        </div>
                        <div className="section-work-context-main-text">
                            <h4>{props.context}</h4>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default WorkContext;