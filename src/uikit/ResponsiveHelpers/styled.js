import styled from 'styled-components';

export const MobileVisible = styled.div `
    display: none;
    .anticon.anticon-menu svg{
        width: 25px;
        height: 25px;
    }

    @media (max-width:767px) {
        display: flex;
    }
`

export const MobileHidden = styled.div `
    // display: flex;

    @media (max-width:767px) {
        display: none;
    }
`