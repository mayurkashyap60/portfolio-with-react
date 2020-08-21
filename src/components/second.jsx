import React, { Component } from 'react';
import { Container,
         Row,
         Col,
        } from 'react-bootstrap';
import { CountUp } from 'use-count-up';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

class Second extends Component {
    state = { 
      aimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/one.png',
      bimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/two.png',
      cimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/three.png',
      dimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/four.png',
      eimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/clients.png',
      fimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/3433515.jpg',
      gimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/3617762.jpg',
      himage: 'https://murmuring-escarpment-19632.herokuapp.com/images/3661950.jpg',
      iimage: 'https://murmuring-escarpment-19632.herokuapp.com/images/portfolio.png',
     };

    render() { 
        return ( 
            <React.Fragment>
                <section>
                  <Container className="pt-5 pb-5">
                    <Row>
                      <Col md={6}>
                        <div className="image">
                          <img src={this.state.iimage} width="100%" alt=""/>
                        </div>
                      </Col>
                      <Col md={6} className="flex-e">
                      <h1>Hi I'm a Inspire <br /> based Designer</h1>
                      <p className="pt-2 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi est sint! Cupiditate vitae facere expedita sapiente assumenda, molestias aut asperiores dolor totam ab autem, deleniti id culpa tempora modi.</p>
                      <div className="d-flex">
                      <button className="btn btn-bg m-2">Learn More</button>
                      <button className="btn shadow m-2 border text-white rounded"><span className="fa fa-video-camera"></span>&nbsp;&nbsp;Watch Video</button>
                      </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <section className="mb-5 mt-4 pb-5">
                  <Container>
                    <Row>
                      <Col md={3} className="text-center border-right"><h2 className="display-3 pt-5 count"><CountUp isCounting end={335} duration={10} /></h2><p className="pb-3">Happy Client</p></Col>
                      <Col md={3} className="text-center border-right"><h2 className="display-3 pt-5 count"><CountUp isCounting end={425} duration={10} /></h2><p className="pb-3">Project Complete</p></Col>
                      <Col md={3} className="text-center border-right"><h2 className="display-3 pt-5 count"><CountUp isCounting end={285} duration={10} /></h2><p className="pb-3">Cups of tea</p></Col>
                      <Col md={3} className="text-center"><h2 className="display-3 pt-5 count"><CountUp isCounting end={380} duration={10} /></h2><p className="pb-3">Awards Win</p></Col>
                    </Row>
                  </Container>
                </section>
                <section className="bg-second col_space">
                  <Container fluid="md">
                    <Row>
                      <Col md={12}>
                        <h2 className="pb-2">Expert in</h2>
                        <p className="pb-2">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Aspernatur, consectetur minus?</p>
                      </Col>
                      <Col md={4} className="mt-4"><div className="expert"><h2 className="display-6 mb-4">Graphic Design</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><a className="text-white" href="#home">Know More</a></div></Col>
                      <Col md={4} className="mt-4"><div className="experts"><h2 className="display-6 mb-4">UI_UX Design</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><a href="#home">Know More</a></div></Col>
                      <Col md={4} className="mt-4"><div className="experts"><h2 className="display-6 mb-4">Product Design</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><a href="#home">Know More</a></div></Col>
                    </Row>
                  </Container>
                </section>
                <section className="col_space">
                  <Container>
                    <Row className="d-flex justify-content-center">
                      <Col sm>
                      <h2 className="portfolio display-6 mt-3 mb-5 pr-2 pt-3">Portfolio</h2>
                      <img src={this.state.aimage} className="img-fluid" alt="f_image"/><br></br>
                      <img src={this.state.bimage} className="img-fluid" alt="s_image" />
                      </Col>
                      <Col sm>
                        <img src={this.state.cimage} className="img-fluid" alt="cimage"/><br></br>
                        <img src={this.state.dimage} className="img-fluid" alt="dimage"/>
                      </Col>
                      <Col sm>
                      <img src={this.state.aimage} className="img-fluid" alt="f_image"/><br></br>
                      <img src={this.state.bimage} className="img-fluid" alt="s_image" />
                      <p className="work text-right mt-5">See More Work...</p>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <section className="col_space bg-second">
                <Container>
                  <Row>
                    <Col>
                    <Swiper 
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide className="p-4">
                      <Row>
                      <Col md={6}>
                      <span className="fa fa-check-circle cs_font mb-2"></span>  
                      <h3 className="display-5 pt-3 pb-3">Our Client say something</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sed est veritatis tenetur perspiciatis excepturi fugit assumenda odit nihil! Vitae perspiciatis reprehenderit veniam optio consequatur eaque repellendus explicabo ducimus voluptas.</p>
                      <h5 className="pt-3">Kawser Ahmed</h5>
                      <p className="pt-2"><i>UI/UX Desiger</i></p>
                      </Col>
                      <Col md={6}>
                      <img src={this.state.eimage} alt="eimage" width="100%"/>
                      </Col>
                      </Row>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                      <Row>
                      <Col md={6}>
                      <span className="fa fa-check-circle cs_font mb-2"></span>  
                      <h3 className="display-5 pt-3 pb-3">Our Client say something</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sed est veritatis tenetur perspiciatis excepturi fugit assumenda odit nihil! Vitae perspiciatis reprehenderit veniam optio consequatur eaque repellendus explicabo ducimus voluptas.</p>
                      <h5 className="pt-3">Kawser Ahmed</h5>
                      <p className="pt-2"><i>UI/UX Desiger</i></p>
                      </Col>
                      <Col md={6}>
                      <img src={this.state.eimage} alt="eimage" width="100%"/>
                      </Col>
                      </Row>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                      <Row>
                      <Col md={6}>
                      <span className="fa fa-check-circle cs_font mb-2"></span>  
                      <h3 className="display-5 pt-3 pb-3">Our Client say something</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sed est veritatis tenetur perspiciatis excepturi fugit assumenda odit nihil! Vitae perspiciatis reprehenderit veniam optio consequatur eaque repellendus explicabo ducimus voluptas.</p>
                      <h5 className="pt-3">Kawser Ahmed</h5>
                      <p className="pt-2"><i>UI/UX Desiger</i></p>
                      </Col>
                      <Col md={6}>
                      <img src={this.state.eimage} alt="eimage" width="100%"/>
                      </Col>
                      </Row>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                      <Row>
                      <Col md={6}>
                      <span className="fa fa-check-circle cs_font mb-2"></span>  
                      <h3 className="display-5 pt-3 pb-3">Our Client say something</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sed est veritatis tenetur perspiciatis excepturi fugit assumenda odit nihil! Vitae perspiciatis reprehenderit veniam optio consequatur eaque repellendus explicabo ducimus voluptas.</p>
                      <h5 className="pt-3">Kawser Ahmed</h5>
                      <p className="pt-2"><i>UI/UX Desiger</i></p>
                      </Col>
                      <Col md={6}>
                      <img src={this.state.eimage} alt="eimage" width="100%"/>
                      </Col>
                      </Row>
                    </SwiperSlide>
                    </Swiper>
                    </Col>
                  </Row>
                </Container>
                </section>
                <section className="col_space">
                  <Container>
                    <center className="p-2"><h3>News & Events</h3></center>
                    <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
                      <Col>
                        <Col className="card shadow-sm">
                          <img src={this.state.fimage} className="rounded" width="100%" height="225" alt="eimage" />
                          <Col className="card-body">
                          <small className="p-1 rounded mt-2">Uncategorized</small>
                          <h5 className="mb-3 mt-3">Motivational Sayings Ten Great Ones</h5>
                          <p className="text-muted">By Admin, June 28, 2020</p>
                          </Col>
                        </Col>
                      </Col>
                      <Col>
                        <Col className="card shadow-sm">
                          <img src={this.state.gimage} className="rounded" width="100%" height="225" alt="eimage" />
                          <Col className="card-body">
                          <small className="p-1 rounded mt-2">Uncategorized</small>
                          <h5 className="mb-3 mt-3">Motivational Sayings Ten Great Ones</h5>
                          <p className="text-muted">By Admin, June 28, 2020</p>
                          </Col>
                        </Col>
                      </Col>
                      <Col>
                        <Col className="card shadow-sm">
                          <img src={this.state.himage} className="rounded" width="100%" height="225" alt="eimage" />
                          <Col className="card-body">
                          <small className="p-1 rounded mt-2">Uncategorized</small>
                          <h5 className="mb-3 mt-3">Motivational Sayings Ten Great Ones</h5>
                          <p className="text-muted">By Admin, June 28, 2020</p>
                          </Col>
                        </Col>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <section className="bg-second">
                  <Container>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={10} className="content text-center">
                        <h3>Have any projects in mind ? Say Hello at . . .</h3>
                        <a href="index.html"><h4 className="text-primary pt-4 pb-2">inspire@gmail.com</h4></a>
                      </Col>
                      <Col md={1}></Col>
                    </Row>
                  </Container>
                </section>
            </React.Fragment>
         );
    }
}
 
export default Second;