import WorkContext from "./WorkContext";


function WorkExpirance () {
    return (
        <div className="section-work">
                <div className="section-work-header">
                    <h3>work experience</h3>
                </div>
                <WorkContext 
                    data={"2016-2018"}
                    position={'Engineer'}
                    firma={'Riara'}
                    context={"It's my first job in engeenering. This company makes lightbox and everything with than outside light. My responsibilities included the development of a project for technical documentation and control in production to finish product"}/>
                <WorkContext 
                    data={"2018-2022"}
                    position={'Engineer'}
                    firma={'My light'}
                    context={"This company develops lighting for design projects. My responsibilities included the development of individual lighting and integration into the design project"}/>
        </div>
    )
}
export default WorkExpirance;