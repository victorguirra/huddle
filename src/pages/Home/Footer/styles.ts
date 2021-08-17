import styled from 'styled-components';

export const Wrapper = styled.footer`
    background-color:${({ theme }) => theme.colors.darkCyan };
    position:relative;
    margin-top:29rem;

    @media(max-width:1440px) {
        margin-top:12rem;
    }
`;

export const BackgroundImage = styled.img`
    width:100%;
    position:absolute;
    top:-13rem;

    @media(max-width:1440px) {
        display:none;
    }
`;

export const Container = styled.div`    
    padding:7rem;

    display:flex;
    align-items:flex-start;
    justify-content:space-between;

    @media(max-width:1440px) {
        padding:3rem 1.6rem;
        flex-direction:column-reverse;
    }
`;

export const InfoContainer = styled.div`
    p {
        color:${({ theme }) => theme.colors.white };
        line-height:1.6rem;
        margin-top:1.2rem;
    }

    .contact-container {
        display:flex;
        align-items:center;

        margin-top:1.2rem;

        span {
            color:${({ theme }) => theme.colors.white };
            margin-left:1.2rem;
        }
    }

    @media(max-width:1440px) {
        margin-top:8em;

        > img {
            width:12rem;
        }

        p {
            font-size:.85rem;

            br {
                display:none;
            }
        }
    }
`;

export const FormContainer = styled.form`
    h2 {
        color:${({ theme }) => theme.colors.white };
        text-transform:uppercase;
    }

    p {
        color:${({ theme }) => theme.colors.white };
        line-height:1.6rem;
        margin-top:1.2rem;
    }

    @media(max-width:1440px) {
        p {
            font-size:.87rem;

            br {
                display:none;
            }
        }
    }
`;

export const Form = styled.form`
    margin-top:2.4rem;
    
    input {
        width:24rem;
        height:3.8rem;

        border:3px solid transparent;
        border-radius:.4rem;

        padding:0 .8rem;
        outline:none;

        transition:border-color .2s ease-in;

        &:focus {
            border:3px solid ${({ theme }) => theme.colors.pink };
        }
    }

    button {
        width:14rem;
        height:3.8rem;

        border-radius:.4rem;
        margin-left:3rem;
    }

    @media(max-width:1440px) {
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        
        input {
            width:100%;
        }

        button {
            width:50%;
            margin-top:1.4rem;
        }
    }
`;