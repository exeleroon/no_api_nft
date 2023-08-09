import styled from 'styled-components';

export const MainContainer = styled.div`
max-width: 100%;
padding: 8px 8px 16px;
// width: 600px;
display: flex;
// flex-direction: column;
margin:auto;
gap: 20px;
font-family: Poppins, sans-serif;

@media (min-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
    // width: 1280px;
    flex-direction: row;
    font-size: 14.5px;
}

@media only screen and (min-width: 1200px)
    font-size: 15px;
}

@media (max-width: 867px) {
    flex-wrap: wrap;
}

`
