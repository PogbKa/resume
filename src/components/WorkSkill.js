import WorkSkillItem from "./WorkSkillItem";



function WorkSkill (props) {
    return (
        <div className="section-work">
                <div className="section-work-header">
                    <h3>{props.name}</h3>
                </div>
                <div className="section-work-skill">
                    <WorkSkillItem name={"HTML5/CSS3"} level={'90%'} />
                    <WorkSkillItem name={"JavaScript"} level={'80%'} />
                    <WorkSkillItem name={"NodeJs"} level={'50%'} />
                    <WorkSkillItem name={"ReactJs"} level={'70%'} />
                    <WorkSkillItem name={"About Photoshop"} level={'70%'} />
                    <WorkSkillItem name={"Visual Studio Code"} level={'80%'} />
                   
                </div>
        </div>
    )
}
export default WorkSkill;