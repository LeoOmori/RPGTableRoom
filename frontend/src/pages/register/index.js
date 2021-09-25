import React from "react";
import {
    Container, 
    LoginContainer,
    LabelInput,
    FormLayer,
    LoginInput,
    LinkToRegister,
    Hero,
    LoginButton,
    ButtonLabel
} from './style';

const Register = () => {


    const handleSubmit = (event) => {

        alert("olá mundo")

        event.preventDefault();
    }

    return (
        <Container>
            <LoginContainer>

                <FormLayer>
                    <Hero>
                        MAKE YOUR ACCOUNT
                    </Hero>
                    <LabelInput>
                        Email
                    </LabelInput>
                    <LoginInput type="text"/>
                    <LabelInput>
                        Password
                    </LabelInput>
                    <LoginInput type="password"/>
                    <LinkToRegister>
                        Already have an account!
                    </LinkToRegister>
                    <LoginButton>
                        <ButtonLabel onClick={handleSubmit}>
                            Login
                        </ButtonLabel>
                    </LoginButton>
                </FormLayer>

            </LoginContainer>
        </Container>
    );

}

export default Register;