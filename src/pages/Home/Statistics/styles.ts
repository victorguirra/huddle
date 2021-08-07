import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;

    margin-top:10rem;

    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Container = styled.div`
    width:60%;

    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Card = styled.div`
    h1 {
        font-size:5rem;
    }

    span {
        color:${({ theme }) => theme.colors.gray };
        font-size:1.2rem;
    }
`;