import AboutMe from './AboutMe';
import Had from "./Had";
import Certificate from './Certificate';

import React from 'react';
import {Routes,Route} from 'react-router-dom';
import imgJavaScript from '../img/Javascript.png';
import imgNodeJs from '../img/NodeJs.png';
import imgReactJs from '../img/ReactJs.png';

function Header () {
    return (
        <>
        <Had/>
        <Routes> 
            <Route path="/resume" element={<AboutMe/>}/>
            <Route path="/JavaScript" element={<Certificate name={'JavaScript'} img={imgJavaScript}/>}/>
            <Route path="/NodeJs" element={<Certificate name={'NodeJs'} img={imgNodeJs}/>}/>
            <Route path="/ReactJs" element={<Certificate name={'ReactJs'} img={imgReactJs}/>}/>
        </Routes>
        </>
        
    )
}
export default Header;