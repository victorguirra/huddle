import styled from 'styled-components';

export const Wrapper = styled.div``;

export const BackgroundImage = styled.img`
    width:100%;
`;

export const Container = styled.div`
    margin-top:6rem;
    margin-bottom:12rem;

    display:flex;
    flex-direction:column;
    align-items:center;

    h1 {
        margin-bottom:2rem;
    }

    button {
        width:20rem;
    }

    @media(max-width:1440px) {
        h1 {
            text-align:center;
            font-size:1.6rem;
        }

        button {
            width:16rem;
            height:3.4rem;
        }
    }
`;