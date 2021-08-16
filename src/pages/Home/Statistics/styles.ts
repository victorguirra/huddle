import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;

    margin-top:10rem;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center; 
`;

export const Container = styled.div`
    width:60%;

    display:flex;
    align-items:center;
    justify-content:space-between;

    @media(max-width:1440px) {
        flex-direction:column;
    }
`;

export const Card = styled.div`
    h1 {
        font-size:5rem;
    }

    span {
        color:${({ theme }) => theme.colors.gray };
        font-size:1.2rem;
    }

    @media(max-width:1440px) {
        &:not(:first-of-type){
            margin-top:7rem
        };
    }
`;

export const BackgroundImage = styled.img`
    width:100%;
    margin-top:12rem;
`;