import Nav from "./Nav"
import { useState } from "react"
import styles from "./Bar.module.css"

const Bar = () => {

    const [icon, setIcon] = useState("images/icon-hamburger.svg");

    function handleClick(e) {
        e.target.getAttribute("src").includes("hamburger") ? 
        setIcon("images/icon-close.svg") : 
        setIcon("images/icon-hamburger.svg");
        document.querySelector("nav").classList.toggle(styles.open);
        document.body.classList.toggle("lockScroll");
    }

    return (
        <div className={styles.top_bar}>
            <img 
            src="images/somsaklawyer.png" 
            alt="insure logo"
            width="250" 
            />
            <button className={styles.menu_btn} onClick={(e) => {handleClick(e)}}>
            <img 
                src={icon}
                alt="hamburger icon"
            />
            </button>
            <Nav />
        </div>
    )
}

export default Bar