import styled from 'styled-components';

import bgDesktopImg from '../../../assets/images/background/desktop/section-bottom-desktop-1.svg';

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.paleBlue };

    margin-top:12rem;    
`;

export const BgImg = styled.div`
    width:100%;
    height:3rem;
    background-image:url(${ bgDesktopImg });
`;