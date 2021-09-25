import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 420px;
    width: 400px;
    background-color: #fff;
    padding: 30px 120px;
`

export const FormLayer = styled.div`
    width: 100%;
    height: 100%;

`

export const LabelInput = styled.p`
    margin: 0;
    margin: 20px 0 15px 0;
    font-weight: bold;
    font-size: 17px;
    color: #636363;
`

export const LoginInput = styled.input`
    padding: 0px 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    &:focus{
        outline: none;
        border: 1px solid #00a123;
    }
`

export const LinkToRegister = styled.p`
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #404040;
    cursor: pointer;
    &:hover{
        color: #595959;
    }

`
export const Hero = styled.h1`

    margin-bottom: 30px;
    font-size: 25px;
    color: #636363;

`

export const LoginButton = styled.button`
    margin-top: 20px;
    border: none;
    background-color: #000;
    width: 150px;
    height: 50px;
    border-radius: 100px;
    cursor: pointer;
    &:hover{
        background-color: #242424;
    }

`

export const ButtonLabel = styled.p`

    font-weight: bold;
    color: #fff;

`