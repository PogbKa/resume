import Contact from './Concatc';
import Image from './Image';
import Reference from './Reference';
import Education from './Education';


import './SectionLeft.scss';
import img from'../img/me.jpg';

function SectionLeft () {
   
   
    return ( 
        <section className="section-left">
            <Image img={img}/>
            <Education/>
            <Reference 
                name={"Dmitry Sirik"} 
                position={'Director I My Light'}
                phone={'T : 063-371-67-95'}/>
            <Contact title={`Phone`} info={'093-581-61-41'}/>
            <Contact title={'Email'} info={'rodya.evl94@gmail.com'}/>
            <Contact 
                title={'Facebook'} 
                info={<a href='https://www.facebook.com/profile.php?id=100006482047164' target="_blank" rel='noreferrer'>www.facebook.com</a>}/>
            <Contact 
                title={'Location'} 
                info={'23 st. Ushinskiy, Kiyv'}/>  
        </section>
    )
}

export default SectionLeft;