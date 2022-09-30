
import EducationMaine from './EducationMaine';


function Education (props) {
    return (
        <div className="section-educetion">
            <div className="section-educetion-title">
                <h3>education</h3>`
            </div>
            <EducationMaine 
                name={'Student'} 
                context={"National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” 2012-2018"}/>
            <EducationMaine name={"JavaScript 2.0"} 
            context={"Online course by Alex Luschenko."}
            url={`resume/JavaScript`}
            data={"03.2020-11.2020"}
            by={"JavaScript"}/>
            <EducationMaine name={"Node Js"} 
            context={"Online course by Alex Luschenko."}
            url={"resume/NodeJs"}
            data={"05.2021-10.2021"}
            by={"NodeJs"}/>
            <EducationMaine name={"React Js"} 
            context={"Online course by Alex Luschenko."}
            url={"resume/ReactJs"}
            data={"03.2022-6.2022"}
            by={"ReactJs"}/>
        </div>
    )
}

export default Education;