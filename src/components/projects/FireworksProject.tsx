import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom"; 
import Fireworks from "../../sketches/fireworks/Fireworks";

export default function FireworksProject(): JSX.Element {
    return(
        <>
            <section id="Header" >
                <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
                    <Fireworks />
                </div>     
               
                <Link to="/">HomePage</Link>  
               
                <Fade direction="up">
                <div className="project-nav">       
                    <div className="about-comments">
                        <a className="smoothscroll" href="#About">
                            About
                        </a>
                        <a className="smoothscroll" href="#Comments">
                            Comments
                        </a>                        
                    </div> 
                </div>
                </Fade>
            </section>
        </>
    )
}