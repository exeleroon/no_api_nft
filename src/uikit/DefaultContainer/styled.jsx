import styled from 'styled-components';

export const DefaultContainer = styled.div`
    max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px` : '1440px'};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    ${({addPadding}) => addPadding ? `padding: 0 50px;` : `padding: 0 25px;` };
    ${({addMargin}) => addMargin ? `margin: ${addMargin};` : ``};


    @media (max-width: 767px) {
        ${({addPadding}) => addPadding = `padding: 0 25px;` };
    }
`