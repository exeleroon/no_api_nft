/** @format */

import styled from 'styled-components'

export const ItemMainContainer = styled.div`
    box-sizing: border-box;
    // flex: 4 0 0%;
    // margin-left: -20px;
    margin-top: 20px;
    width: 58%;

    @media(max-width: 867px) {
        width: -webkit-fill-available;
        margin-top: 0px;
        
    }

`
export const HeaderRight = styled.div`
    margin: 20px 20px 15px;
    display: flex;
    flex-flow: column wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: 867px) {
        margin: 0;
    }
`

export const LikesWrapper = styled.div`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    padding: 0px;
    background: inherit;
    margin-right: 20px;

    span svg {
        color: ${({ isViewed }) => isViewed ? 'rgb(0 126 251)' : 'rgb(138, 147, 155)'};
    }

    &:hover { 
        span svg {
        color: rgb(0 126 251);
    }
}
`

export const CollectionInfo = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 5px;
    max-width: 100%;
`
export const Name = styled.a`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(32, 129, 226);
    text-decoration: none;

    :hover {
        color: rgb(24, 104, 183);
    }

    @media (max-width:767px) {
        margin-top: 20px;
    }
`

export const Owned = styled.a`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: rgb(32, 129, 226);
    text-decoration: none;
    font-weight: inherit;

    :hover {
        color: rgb(24, 104, 183);
    }
`

export const ItemName = styled.h1`
    display: flex;
    font-size: 30px;
    font-weight: 600;
    max-width: 100%;
    margin: 0px;
    // width: 588px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: normal;

    @media (min-width: 1024px) {
        width: 710px;
    }

    @media (max-width:767px) {
        margin-top: 20px;
    }
`
export const ImgContainer = styled.span`
    margin-left: 5px;
`

export const ItemCounts = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
    color: rgb(112, 122, 131);

    @media (min-width: 1024px) {
        margin: 20px;
    }
    
    @media (max-width: 601px) {
        margin-bottom: 15px;
    }

`
export const OwnedWrapper = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    margin-right: 20px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 24px;
    color: rgb(112, 122, 131);
`

export const CollectionName = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    max-width: 100%;
    // width: 420px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (min-width: 1024px) {
        // width: 500px;
    }
`
export const OfferWrapper = styled.div`
    margin: 4px 0px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    overflow: hidden;
    background-color: rgb(251, 253, 255);

    @media (min-width: 1024px) {
        margin: 20px;
        padding: 20px;
    }

    @media (max-width: 1021px) {
        padding: 15px;
    }

`
export const Offer = styled.h2`
    font-size:15px;
    color: rgb(112, 122, 131);
`

export const PriceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
`
export const CryptoPriceCont = styled.div`
    font-size: 30px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-weight: 600;
    color: rgb(53, 56, 64);
    width: fit-content;
    max-width: 100%;
`
export const CryptoLogoWrapper = styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 0.5em;
`

export const CryptoPrice = styled.h2`
    margin-left: 5px !important;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 30px;
    font-weight: 600;
`
export const FiatPrice = styled.h2`
    font-size: 15px;
    margin-left: 8px;
    margin-top: 15px;
    color: rgb(53, 56, 64);
    width: fit-content;
    max-width: 100%;
    color: rgb(112, 122, 131);
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const OfferButton = styled.button`
    display: inline-flex;
    margin-left: 0px;
    margin-top: 8px;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(32, 129, 226);
    color: rgb(32, 129, 226);
    cursor:pointer;
   

    :focus{
        outline:none;
    }

    :hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
        border: 1px solid rgb(24, 104, 183);
        color: rgb(24, 104, 183);
    }

    @media screen and (min-width: 600px) {
        width: 100%;
        margin-left: 0px;
        margin-top: 8px;
    }
    
    @media (max-width: 601px) {
        margin-top: -10px;
    }

@media screen and(min - width: 1024 px) {
    width: 50 % ;
    margin - left: 8 px;
    margin - top: 0 px;
}

@media screen and(min - width: 768 px) {
    width: 100 % ;
    margin - left: 0 px;
    margin - top: 8 px;

}

@media screen and(min - width: 600 px) {
    width: 100 % ;
    margin - left: 0 px;
    margin - top: 8 px;
}
`