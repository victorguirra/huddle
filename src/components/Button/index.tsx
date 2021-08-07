import styled, { css } from 'styled-components';

interface IButtonProps {
    outline?: boolean;
}

export default styled.button<IButtonProps>`
    width:18rem;
    height:4rem;

    color:${({ theme }) => theme.colors.white };
    background-color:${({ theme }) => theme.colors.pink };
    box-shadow:4px 4px 5px rgba(0, 0, 0, 0.4);

    font-size:1rem;
    font-weight:bold;

    border:none;    
    border-radius:10rem;

    ${({ theme, outline }) => outline && css`
        color:${ theme.colors.pink };
        background-color:transparent;
        border:2px solid ${ theme.colors.lightPink };
        box-shadow:none;
    `};
`;