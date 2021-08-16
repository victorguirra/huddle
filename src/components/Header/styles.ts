import styled from 'styled-components';

export const Container = styled.header`
    width:100%;

    padding:4rem;

    display:flex;
    align-items:center;
    justify-content:space-between;

    > button {
        width:11rem;
        height:3rem;
    }

    @media(max-width:1440px) {
        padding:1rem;

        > img {
            width:8rem;
        }

        > button {
            width:8rem;
            height:3rem;

            font-size:.8rem;
        }

    }
`;