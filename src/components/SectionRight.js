import WorkExpirance from './WorkExpirance';
import WorkSkill from './WorkSkill';
import Hobby from './Hobby';
import Header from './Hedaer';

import './SectionRight.scss';

function SectionRight () {
    return (
        <section className="section-right">
            <Header/>
            <WorkExpirance/>
            <WorkSkill name={"softwere skill"}/>
            <Hobby name={"My hobby"}/>
          
        </section>
    )
}
export default SectionRight;