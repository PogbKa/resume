function WorkSkillItem (props) {
    
    return (
        <div className="section-work-skill-item">
            <div className="section-work-skill-item-name">
                <h4>{props.name}</h4>
            </div>
            <div className="section-work-skill-item-rage">
                <div className="section-work-skill-item-rage-width" style={{width:`${props.level}`}}></div>
            </div>
        </div>
    )
}
export default WorkSkillItem;