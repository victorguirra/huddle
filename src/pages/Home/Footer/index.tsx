import {
    Wrapper, 
    BackgroundImage, 
    Container, 
    InfoContainer, 
    FormContainer, 
    Form
} from './styles';

import Button from '../../../components/Button';

import bgImg from '../../../assets/images/background/desktop/footer-top-desktop.svg';
import logoImg from '../../../assets/images/logo_secondary.svg';
import phoneIcon from '../../../assets/images/icons/phone.svg';
import emailIcon from '../../../assets/images/icons/email.svg';

export default function Footer() {
    return(
        <Wrapper>
            <BackgroundImage src={ bgImg } alt="Wave" />
            
            <Container>
                <InfoContainer>
                    <img src={ logoImg } alt="Logo" />
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectur <br/>
                        adipscing elt. Maurus mulla quam, handertir <br/>
                        lacina vestibulul a, ultirces quis sem.
                    </p>

                    <div className="contact-container">
                        <img src={ phoneIcon } alt="Phone" />
                        <span>Phone: +1-543-123-4567</span>
                    </div>

                    <div className="contact-container">
                        <img src={ emailIcon } alt="Emails" />
                        <span>example@huddle.com</span>
                    </div>
                </InfoContainer>

                <FormContainer>
                    <h2>NewsLetter</h2>

                    <p>
                        To recieve on how to grow your community, <br/>
                        sign up to our weekly newsletter. We'll never send <br/>
                        you span or pass on your email address.
                    </p>

                    <Form>
                        <input type="email" placeholder="Your email address" />
                        <Button type="submit">Subscribe</Button>
                    </Form>
                </FormContainer>
            </Container>
        </Wrapper>
    )
}