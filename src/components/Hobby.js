import HobbyItem from "./HobbyItem";



function Hobby (props) {
    return (
        <div className="section-work">
                <div className="section-work-header">
                    <h3>{props.name}</h3>
                </div>
                <div className="section-work-skill">
                    <HobbyItem name={"Footbal (offline)"} level={'90%'} />
                    <HobbyItem name={"Counter-Strike"} level={'30%'} />
                    <HobbyItem name={"Pugb mobile"} level={'30%'} />
                    <HobbyItem name={"Fishing (offline)"} level={'15%'} />
                </div>
        </div>
    )
}
export default Hobby;