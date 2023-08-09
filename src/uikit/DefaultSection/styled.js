import styled from 'styled-components';

export const DefaultSection = styled.div`
    ${({disablePadding}) => disablePadding ? `` : `padding: 40px 0;`};
    background-color: ${({backgoundColor}) => backgoundColor};

    @media (max-width: 767px) {
        ${({disablePadding}) => disablePadding ? `` : `padding: 25px 0;`};
    }
`