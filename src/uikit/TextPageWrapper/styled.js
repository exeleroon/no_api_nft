import styled from 'styled-components';

export const TextPageWrapper = styled.div `
    h1 {
        margin-bottom: 15px;
    }
    h2 {
    margin-top: 0.7em;
    }
    li {
    font-size: 18px !important;
    margin-top: 10px;
    /* list-style-type: none; */
    margin-bottom: 0.7em !important;
    }
    p {
        font-size: 18px;
        margin-top: 10px;
        list-style-type: none;
    }
    h3 {
    margin-top: 15px;
}
h4{
    margin-top: 15px;
}
    @media (max-width: 601px) {
        h1 {
            line-height: 40px;
        }
    }

`