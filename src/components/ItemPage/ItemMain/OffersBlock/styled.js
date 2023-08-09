/** @format */

import styled from 'styled-components'

export const OffersContainer = styled.div`
    flex: 1 0 0%;
    max-width: 750px;
    margin: 4px 0px;
    box-sizing: border-box;

    @media (min-width: 1024px) {
        margin: 20px;
    }
`
export const Offers = styled.div`
    border-radius: 10px;
    border-right: 1px solid rgb(229, 232, 235);
    border-bottom: 1px solid rgb(229, 232, 235);
    border-left: 1px solid rgb(229, 232, 235);
    border-image: initial;
    border-top: 1px solid rgb(229, 232, 235);
    color: rgb(4, 17, 29);
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    box-sizing: border-box;
`

export const Title = styled.span`
    cursor: initial;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    user-select: none;
`

export const StyledLi = styled.li`
    display: contents;
`

export const TitleTable = styled.div`
    z-index: 2;
    position: sticky;
    top: 0px;
    border-bottom: 1px solid rgb(229, 232, 235);
    margin-top: -1px;
    margin-right: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: rgb(255, 255, 255);
    border-top: none;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const InfoTable = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: rgb(251, 253, 255);
    border-top: 1px solid rgb(229, 232, 235);
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const Price = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-weight: 600;
    color: rgb(53, 56, 64);
    width: fit-content;
    max-width: 100%;
`
export const Amount = styled.div`
    margin-left: 0.3em;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const OfferFrom = styled.a`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 24px;
    width: 100%;
    color: rgb(32, 129, 226);
    text-decoration: none;
    font-weight: inherit;

    :hover {
        color: rgb(24, 104, 183);
    }
`

export const TableText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: rgb(112, 122, 131);
`

export const CryptoLogoWrapper = styled.img`
    width: 16px;
    height: 16px;
`

export const Currency = styled.span`
    font-weight: normal;
    text-transform: uppercase;
`

export const Table = styled.ul`
    width: 100%;
    padding: 0px;
    margin: 0px;
    display: grid;
    grid-template-columns: minmax(auto, auto) minmax(auto, auto) minmax(auto, auto) minmax(auto, auto) minmax(auto, 160px) minmax(auto, auto);
`

export const ContentContainer = styled.div`
    border-top: 1px solid rgb(229, 232, 235);
    color: rgb(53, 56, 64);
    background-color: rgb(251, 253, 255);
    overflow: visible;
    transition: height 100ms ease 0s;
    max-height: 332px;
    overflow-x: auto;
`

export const TitleBlock = styled.button`
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    border-top: 1px solid rgb(229, 232, 235);
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    user-select: none;
    background-color: rgb(255, 255, 255);
    font-family: inherit;
    border: 0px;

    :focus {
        outline: none;
    }
`
