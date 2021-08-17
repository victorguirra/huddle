import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top:26rem;
    background-color:${({ theme }) => theme.colors.paleBlue };
    padding-bottom:3rem;

    @media(max-width:1440px) {
        margin-top:10rem;
    }
`;

export const BackgroundImg = styled.img`
    width:100%;
    margin-top:-20rem;
`;

export const Container = styled.div`
    margin-top:5rem;
    padding:0 10rem;

    display:flex;
    align-items:center;
    justify-content:space-around;

    @media(max-width:1440px) {
        flex-direction:column-reverse;
        padding:0 1.2rem;
    }
`;

export const Content = styled.div`
    p {
        margin-top:2rem;
    }

    @media(max-width:1440px) {
        h1 {
            text-align:center;
            margin-top:5rem;
        }

        p {
            font-size:.85rem;
            text-align:center;
            
            margin-bottom:4rem;

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
`