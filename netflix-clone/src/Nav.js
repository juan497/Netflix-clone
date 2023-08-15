import React,{useEffect, useState} from 'react'
import './Nav.css'
function Nav() {
    const [show,handleShow] =useState(false);

    useEffect(() => {
        //add a scroll listener
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
            
        });
        //every time use effect gets fired off,remove the listener so you dont have 20 listenres
        return () => {
            window.removeEventListener("scroll");
        }

    }, []);

    return (
        // in classname, you always want to be nav class, but if show true append nav__black
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                alt="netflix logo"
            />
            <img
                className="nav__avatar"
                //src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="netflix avatar"
            />
        </div>
    )
}

export default Nav
