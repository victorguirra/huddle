import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top:26rem;
    background-color:${({ theme }) => theme.colors.paleBlue };
`;

export const BackgroundImg = styled.img`
    width:100%;
    margin-top:-20rem;
`;

export const Container = styled.div`
    margin-top:3rem;
    padding:0 10rem;

    display:flex;
    align-items:center;
    justify-content:space-around;
`;

export const Content = styled.div`
    p {
        margin-top:2rem;
    }
`;

export const Image = styled.img`
    width:30%;
    max-width:48%;
`