import styled from 'styled-components';

export const Container = styled.div`
    margin-top:20rem;
    padding:0 10rem;

    display:flex;
    align-items:center;
    justify-content:space-around;

    @media(max-width:1440px) {
        flex-direction:column;
        padding:0 1.2rem;
        margin-top:12rem;
    }
`;

export const Content = styled.div`
    p {
        margin-top:2rem;
    }

    @media(max-width:1440px) {
        h1 {
            text-align:center;
            font-size:1.6rem;
            margin-top:7rem;
        }

        p {
            text-align:center;
            font-size:.85rem;

            br {
                display:none;
            }
        }
    }
`;

export const Image = styled.img`
    width:30%;
    max-width:48%;

    @media(max-width:1440px) {
        width:100%;
        max-width:90%;
    }
`;