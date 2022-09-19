import styled from "styled-components";

export const Layout = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
`

export const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
    text-align: center;

    @media(max-width: 750px){
        padding: 0px 20px;
    }
`

export const FormElement = styled.form`
    margin: 24px 0px 0px;
    width: 100%;
`

export const InputElement = styled.div`
    align-items: center;
    border: 1px solid #00000017;
    border-radius: 4px;
    display: flex;
    padding: 0px 12px 0px 0px;
    width: 100%;

    input{
        background-color: unset;
        border: none;
        flex: 1;
        font-size: 17px;
        font-weight: 500;
        outline: none;
        padding: 12px 20px;
    }

    button{
        background: none;
        border: none;

        svg{
            font-size: 17px;
        }
    }

    @media(max-width: 500px){
        margin: 0px auto;
        width: 100%;

        input{
            padding: 12px 6px;
        }
    }
`

export const CapitalElement = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 24px 0px 0px;
    text-align: center;
    width: 100%;

    img{
        max-width: 50px;
    }
`

export const CapitalContent = styled.div`
    align-items: center;
    background-color: #d3d3d36b;
    border-radius: 4px;
    display: flex;
    margin: 12px 0px 0px;
    justify-content: space-around;
    padding: 12px 20px;
    width: 100%;

    @media(max-width: 500px){
        flex-direction: column;
    }
`

export const ItemElement = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h2{
        font-size: 17px;
    }

    @media(max-width: 500px){
        margin: 12px;
    }
`

export const ErrorElement = styled.div`
    background-color: salmon;
    border-left: 3px solid red;
    border-radius: 4px;
    margin: 0px 0px 12px;
    padding: 12px 20px;
`