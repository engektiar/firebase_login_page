import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "../Assect/css/Home.css";
import ektiar from "../Assect/img/ektiar.jpg";
const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Container>
        <Row className="mycv">
          <Col md={6}>
            <div className="userinfo">
              <div className="username">
                <div>
                  <span>MD EKTIAR HOSSEN </span>
                </div>
                <div>
                  <span>Web Developer</span>
                </div>
                <div>
                  {" "}
                  <span>Phone :01628414116</span>
                </div>
                <div>
                  <span>Email: eng.ektiar@gmail.com</span>
                </div>
              </div>
              {/* {user && user.email} */}
              <div className="userLink">
                <span>Profile :</span>
                <a href="https://www.linkedin.com/in/md-ektiar-hossen-667a90194/">
                  {" "}
                  <button className="linkbtn">Linkdin</button>
                </a>
                <a href="https://github.com/engektiar">
                  {" "}
                  <button className="linkbtn">Github</button>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100004813563045">
                  {" "}
                  <button className="linkbtn">facebook</button>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="imagesecrin">
              <img src={ektiar} alt="missing" className="userimg" />
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h5>CAREER OBJECTIVE:</h5>
              <div>
                Looking for an appropriate position as a Web Developer in a real professional environment whereby hard work, dedication, and the ability to acquire new skills will
                result in the professional growth of the organization and self.
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h5>TECHNICAL SKILLS:</h5>
              <p>JavaScript, React js, HTML5, CSS3, Bootstrap/Material UI, SASSGit, GitLab, SQL, MySQL, Firebase.</p>
              <p>
                <span>Deployment:</span> Windows Server
              </p>
              <p>
                <span>Tools & Technology:</span> VS Code, sublime text
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h5> SPECIALIZED:</h5>
              <ul>
                <li> Translated design & wireframes into high-quality code and wrote application interface code via React.</li>
                <li>Single page application development using React</li>
                <li>Cross Browser Compatibilit</li>
                <li>Responsive web development.</li>
                <li>Able to work under pressure</li>
              </ul>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h5>NDUSTRIAL EXPERIENCES::</h5>
              <p>
                <span>Daraz Bangladesh Limited:</span>: Asfia Tower, Banan Dhaka
              </p>
              <p>
                <span>Junior Executive Officer IT:</span>: (Jun 2021– Present)
              </p>
              <ul>
                <li>Installing and configuring computer hardware, software, systems, networks, printers and scanners.</li>
                <li>Monitoring and maintaining computer systems and networks.</li>
                <li>Responding in a timely manner to service issues and requests.</li>
                <li>Setting up accounts for new users</li>
                <li>Repairing and replacing equipment as necessary</li>
                <li> Testing new technology</li>
              </ul>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h5>PORTFOLIOS:</h5>
              <span>HTML CSS PROJECT:</span>
              <ul>
                <li>
                  {" "}
                  <p>
                    <span> Cuda website </span>{" "}
                    <a href="https://melodic-faun-0da612.netlify.app/">
                      <button>web Link</button>
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <span> Edmodo website</span>{" "}
                    <a href="https://unique-shortbread-f15355.netlify.app/">
                      <button>web Link</button>
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <span> School website</span>{" "}
                    <a href="https://roaring-platypus-ac6406.netlify.app/#">
                      <button>web Link</button>
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <span> Academic website</span>{" "}
                    <a href="https://lighthearted-torrone-a456f0.netlify.app/">
                      <button>web Link</button>
                    </a>
                  </p>
                </li>
              </ul>
              <span>React PROJECT:</span>
              <ul>
                <li>
                  {" "}
                  <p>
                    <span> Admin website </span>{" "}
                    <a href="https://remarkable-sopapillas-98d9b9.netlify.app/ ">
                      <button>web Link</button>
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <span> Daraz website</span>{" "}
                    <a href="https://grand-caramel-d04efc.netlify.app/">
                      <button>web Link</button>
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <span> Amazoon website</span>{" "}
                    <a href="https://tranquil-baklava-975022.netlify.app/">
                      <button>web Link</button>
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h5>EDUCATION:</h5>
              <div>
                <h6>B.Sc. in Computer Science and Engineering (BSC In CSE)</h6>
                <p>Sonargaon University (Su)</p>
                <p>Result: 3.56(Out of 4)</p>
                <p>ID NO :CSE1803015040</p>
              </div>
              <div>
                <h6>Diploma in Computer Technology</h6>
                <p>Satkhira Polytechnic Institute</p>
                <p>Passing year: 2018</p>
                <p>Result: 3.02(Out of 4)</p>
                <p>Roll:823922</p>
              </div>
              <div></div>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h5>PERSONAL DETAILS:</h5>
              <p>
                <span>Father’s Name:</span>Father’s Name:
              </p>
              <p>
                <span>Mother’s Name:</span>Beauty Begum
              </p>
              <p>
                <span>Present Address:</span>:176/3, Jomidar goli, Opposite Bornomala School, East Ulon, Hatirjheel, Dhaka 1219, Dhaka.
              </p>
              <p>
                <span>Permanent Address:</span>: Baniakhaly, Post: Baniakhaly Bazer, Thana:Morrelgong, District: Bagerhat.
              </p>
              <p>
                <span>Date of Birth:</span>12-08-1997
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="singe">
              <p>.................</p>
              <p>Signature & Date</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="d-grid gap-2 logout">
              <Button variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
