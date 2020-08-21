import React, { Component } from 'react';
import { Container,
    Row,
    Col,
   } from 'react-bootstrap';



class Third extends Component {
    state = { 
        menu: ['Home', 'About', 'Services', 'Blog', 'Contact'],
        social: ['fa fa-behance', 'fa fa-dribbble', 'fa fa-facebook', 'fa fa-pinterest', 'fa fa-linkedin']
     };

    render() { 
        return ( 
            <React.Fragment>
                <section className="p-4 bg-second">
                <Container>
                    <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="text-center">
                    <ul>
                    { this.state.menu.map(menus => <li key={ menus }>{ menus }</li>) }
                    </ul>
                    <br></br>
                    <ul>
                        { this.state.social.map(socials => <li key={socials}><span className={socials}></span></li>) }
                    </ul>
                    </Col>
                    <Col md={2}></Col>
                    </Row>            
                </Container>
                </section>                
            </React.Fragment>
         );
    }
}
 
export default Third;