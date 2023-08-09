import styled from 'styled-components';

export const BannerWrapper = styled.div`
    position: relative;
    z-index: 0;
`

export const BannerContainer = styled.div`
    height: 225px;
    display: flex;
    min-height: 120px;
    overflow: hidden;
    position: relative;
    background-color: rgb(229, 232, 235);
    @media(max-width: 601px) {
        height: 120px;
    }
`

export const BannerContent = styled.div`
     -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    position: relative;
    background-size: cover;
    background-position: center;

    ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: 0;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: 0.2s;
    }

    /* :hover::after {
        opacity: 1;
    } */

    /* &:hover {       
        background-color: rgb(195, 197, 200);
    } */
`