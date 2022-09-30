import AboutMe from './AboutMe';
import Had from "./Had";
import Certificate from './Certificate';

import React from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import imgJavaScript from '../img/Javascript.png';
import imgNodeJs from '../img/NodeJs.png';
import imgReactJs from '../img/ReactJs.png';

function Header () {
    let local = useLocation();
    console.log(local.pathname)
    return (
        <>
        <Had/>
        <Routes> 
            <Route path="/resume" element={<AboutMe/>}/>
            <Route path="/resume/JavaScript" element={<Certificate name={'JavaScript'} img={imgJavaScript}/>}/>
            <Route path="/resume/NodeJs" element={<Certificate name={'NodeJs'} img={imgNodeJs}/>}/>
            <Route path="/resume/ReactJs" element={<Certificate name={'ReactJs'} img={imgReactJs}/>}/>
        </Routes>
        </>
        
    )
}
export default Header;