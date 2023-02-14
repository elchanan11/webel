import styled from "styled-components";
import {leptop, mobile} from "../responsive";

const Container = styled.div `
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  ${leptop({padding: "100px"})}
  ${mobile({padding: "30px"})}
`
function MySkills() {
    return(
        <Container>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">html5</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">css3</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">javascript</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJS</p>
                        <div className="progress-con">
                            <p className="prog-text">93%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">NodeJS</p>
                        <div className="progress-con">
                            <p className="prog-text">97%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Python</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">WORDPRESS</p>
                        <div className="progress-con">
                            <p className="prog-text">79%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">PHP</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MySkills