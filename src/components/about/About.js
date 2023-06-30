import {useEffect,useRef,useState} from 'react';
import WOW from 'wowjs';
import CountUp from 'react-countup';

import './about.css';
const profileImg = require('./img/profile-img.jpg');

export const About = ()=>{

  useEffect(()=>{
      new WOW.WOW({
          live: false
      }).init();
  },[]);

    return(
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 wow slideInLeft" data-wow-duration="1.4s" data-wow-delay=".5s">
                            <img src={profileImg} className="img-fluid" alt="img" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content wow slideInRight" data-wow-duration="1.4s" data-wow-delay=".5s">
                            <h3>UI/UX Designer &amp; Web Developer.</h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                        <li><i className="icon icofont-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                        </ul>
                                    </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Facts />
            <Skills />
        </>
    )
}

const Facts = ()=>{

    const footerPagina = useRef(null);//Referencia a nuestro punto de referencia 
    const [showComponent,setShowComponent] = useState(false);


    //Mostramos los Fact cuando el usuario tenga la sección en pantalla, ya que síno el count se ejecuta y ya no se vera la animación
    useEffect(()=>{
        function updatePosition() {
            if((footerPagina.current.getBoundingClientRect().bottom - 10) < window.innerHeight) 
              setShowComponent(true);
        }
        window.addEventListener('scroll', updatePosition);
        return () => window.removeEventListener('scroll', updatePosition);
    },[]);

    return(
        
        <section id="facts" ref={footerPagina} className="facts">
            <div className="container">

                <div className="section-title">
                <h2>Facts</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row no-gutters wow slideInUp" data-wow-duration="1.4s">

                    {
                        showComponent

                        && 

                        <>
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <i className="far fa-smile"></i>
                                <CountUp end={232}  duration={2}/>
                                <p><strong>Happy Clients</strong> consequuntur quae</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <i className="fas fa-print"></i>
                                <CountUp end={521}  duration={3}/>
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <i className="fas fa-headset"></i>
                                <CountUp end={1463}  duration={4}/>
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <i className="fas fa-users"></i>
                                <CountUp end={15} />
                                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                                </div>
                            </div>
                        </>
                    }
                               
                </div>

            </div>
        </section>
    )
}


const Skills = ()=>{
    return(
        <section id="skills" className="skills section-bg">
          <div className="container">
            
            <div className="section-title">
              <h2>Skills</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
    
            <div className="row skills-content">
    
              <div className="col-lg-6 wow slideInUp" data-wow-duration="1.4s">
    
                <div className="progress">
                    <span className="skill">HTML <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'100%'}}></div>
                    </div>
                </div>
    
                <div className="progress">
                  <span className="skill">CSS <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'90%'}}></div>
                  </div>
                </div>
    
                <div className="progress">
                  <span className="skill">JavaScript <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'75%'}}></div>
                  </div>
                </div>
    
              </div>
    
              <div className="col-lg-6 wow slideInUp" data-wow-duration="1.4s" data-wow-delay=".2s">
    
                <div className="progress">
                  <span className="skill">PHP <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'80%'}}></div>
                  </div>
                </div>
    
                <div className="progress">
                  <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'90%'}}></div>
                  </div>
                </div>
    
                <div className="progress">
                  <span className="skill">Photoshop <i className="val">55%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'55%'}}></div>
                  </div>
                </div>
    
              </div>
    
            </div>
    
          </div>
        </section>
    )
}