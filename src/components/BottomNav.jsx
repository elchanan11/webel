import React from "react";
import '../styles/styles.css'

function BottomNav() {
    return (
        <div style={{margin:0,padding:0,backgroundColor:"#f4f9fb"}}>
            <div className="controls">
                <div className="control active-btn" data-id="home">
                    <i className="fas fa-home"></i>
                </div>
                <div className="control" data-id="about">
                    <i className="fas fa-user"></i>
                </div>
                <div className="control" data-id="portfolio">
                    <i className="fas fa-briefcase"></i>
                </div>
                <div className="control" data-id="blogs">
                    <i className="far fa-newspaper"></i>
                </div>
                <div className="control" data-id="contact">
                    <i className="fas fa-envelope-open"></i>
                </div>
            </div>

        </div>
    );
}

export default BottomNav;
