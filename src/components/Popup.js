import React from 'react';
import './Popup.scss';


function Popup () {
    const poput = React.createRef();
    const myForm = React.createRef();
    const openButton = React.createRef();
    function closeBotton () {
        openButton.current.style.display = "flex";
    }
    function openForm () {
        poput.current.style.left = "0";
        myForm.current.style.bottom = '5%';
        openButton.current.style.display = "none"
    }
    function closeForm () {
        poput.current.style.left = "-110%";
        myForm.current.style.bottom = '-100%';
        setTimeout (closeBotton, 1000);
    }
    return (
        <>
            <div className="wraper-popup" ref={poput} onClick={closeForm}></div>
            <div className="wraper-button">
                <button className="open-button" ref={openButton} onClick={openForm}><i className="bi bi-phone-vibrate"></i></button>
            </div>
            <div className="form-popup" ref={myForm}>
                <form action="" className="form-container">
                    <a rel="noreferrer" href="https://t.me/rodyaevl" target="_blank"><i className="bi bi-telegram"></i></a>                  
                    <a rel="noreferrer" href="https://www.instagram.com/rodkaevladenko/" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a rel="noreferrer" href="https://www.facebook.com/rodya.evl" target="_blank"><i className="bi bi-messenger"></i></a>
                    <a href="#stop" onClick={closeForm}><i className="bi bi-x-lg"></i></a>
                </form>
            </div>
        </>
    )
}
export default Popup;