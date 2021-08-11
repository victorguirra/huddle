import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color:${({ theme }) => theme.colors.paleBlue };
    position:relative;
`;

export const Content = styled.div`
    padding:0 10rem;

    display:flex;
    align-items:center;
    justify-content:space-around;
`;

export const Container = styled.div`
    p {
        margin-top:2rem;
    }
`;

export const Image = styled.img`
    width:30%;
    max-width:48%;
`;

export const BackgroundImage = styled.img`
    width:100%;
    position:absolute;
`;