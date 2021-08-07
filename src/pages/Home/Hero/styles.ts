import styled from 'styled-components';

export const Container = styled.main`
    margin-top:12rem;

    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Title = styled.h2`
    font-size:2.8rem;
`;

export const Description = styled.p`
    color:${({ theme }) => theme.colors.darkCyan };
    text-align:center;
    text-shadow:2px 2px 2px rgba(0, 0, 0, 0.1);

    margin-top:1.6rem;
    margin-bottom:2.4rem;
`;

export const Image = styled.img`
    margin-top:5rem;
`;