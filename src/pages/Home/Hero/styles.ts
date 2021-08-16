import styled from 'styled-components';

export const Container = styled.main`
    margin-top:12rem;

    display:flex;
    flex-direction:column;
    align-items:center;

    @media(max-width:1440px) {
        margin-top:8rem;
        padding:0 1.4rem;
    }
`;

export const Title = styled.h2`
    font-size:2.8rem;

    @media(max-width:1440px) {
        font-size:1.7rem;
        text-align:center;
    }
`;

export const Description = styled.p`
    color:${({ theme }) => theme.colors.darkCyan };
    text-align:center;
    text-shadow:2px 2px 2px rgba(0, 0, 0, 0.1);

    margin-top:1.6rem;
    margin-bottom:2.4rem;

    @media(max-width:1440px) {
        font-size:.85rem;

        br {
            display:none;
        }
    }
`;

export const Image = styled.img`
    margin-top:5rem;

    @media(max-width:1440px) {
        width:100%;
        margin-top:8rem;
    }
`;