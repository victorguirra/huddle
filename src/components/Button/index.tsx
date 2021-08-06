import styled, { css } from 'styled-components';

interface IButtonProps {
    outline?: boolean;
}

export default styled.button<IButtonProps>`
    width:18rem;
    height:4rem;

    color:${({ theme }) => theme.colors.white };
    background-color:${({ theme }) => theme.colors.pink };

    font-size:1rem;
    font-weight:bold;

    border:none;    
    border-radius:10rem;

    ${({ theme, outline }) => outline && css`
        color:${ theme.colors.pink };
        background-color:transparent;
        border:2px solid ${ theme.colors.lightPink };
    `};
`;