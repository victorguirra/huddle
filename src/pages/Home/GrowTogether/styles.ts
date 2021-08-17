import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color:${({ theme }) => theme.colors.paleBlue };
    position:relative;

    @media(max-width:1440px) {
        padding-top:4rem;
    }
`;

export const Content = styled.div`
    padding:0 10rem;

    display:flex;
    align-items:center;
    justify-content:space-around;

    @media(max-width:1440px) {
        flex-direction:column-reverse;
        padding:0 1.2rem;

        h1 {
            text-align:center;
            margin-top:5rem;
        }

        p {
            text-align:center;
            font-size:.85rem;
            margin-bottom:4rem;

            br {
                display:none;
            }
        }
    }
`;

export const Container = styled.div`
    p {
        margin-top:2rem;
    }
`;

export const Image = styled.img`
    width:30%;

    @media(max-width:1440px) {
        width:100%;
        max-width:90%;
    }
`;

export const BackgroundImage = styled.img`
    width:100%;
    position:absolute;
`;