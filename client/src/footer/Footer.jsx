import "./Footer.css"
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="footerInfo">
                {/*<img src="./foo3.jpg" alt="not found"/>*/}
                <Link to="/chat"><button className="buttonStl">Чат</button></Link>
            </div>
        </>
    );
}