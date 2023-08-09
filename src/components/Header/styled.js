/** @format */
import styled from 'styled-components'

export const StyledHeader = styled.div `
    position: fixed;
    z-index: 10;
    width: 100%;
    background: #fff;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.06);
    padding: 10px 50px;
    box-shadow: 0 1px 10px rgb(151 164 175 / 10%);
    gap: 20px;

    @media (max-width: 767px) {
        justify-content: space-between;
        padding: 10px 30px;
    }
`

export const SearchCollectionsWrapper = styled.div `
    /* margin: 0 40px; */
    flex-grow: 1;


`

export const StyledMenu = styled.ul `
    display: flex;
    font-weight: 600;
    margin-right: 40px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`

export const StyledMenuItemWrapper = styled.li `
    margin: 0 2px;
    
    @media (max-width: 767px) {
        margin: 3px 2px;
    }
`

export const StyledMenuItem = styled.a `
    font-size: 18px;
    font-weight: 600;
    color: #333;
    height: 100%;
    padding: 9px 20px;
    transition: 0.2s;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    /* ::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #f4f4f4;
        height: 0;
        width: 0;
        transition: .3s;
        border-radius: 50%;
        z-index: -1;
    } */

    :hover {
        color: #fff;
        background-color: rgb(32, 129, 226);

        ::after {
            width: 100px;
            height: 100px;
        }
    }

    @media (max-width: 767px) {
        border: 1px solid rgb(229, 232, 235);
        border-radius: 16px;
        padding: 9px 35px;
        box-shadow: rgb(4 17 29 / 7%) 0px 0px 10px 0px;

    }


`

export const AccountDetailsWrapepr = styled.div `
    display: flex;
    gap: 20px;
    align-items: center;
    font-weight: 600;
    p {
        color: rgba(4,17,29,0.75);
        font-size: 16px;
        margin-left: 1px;
        margin-bottom: 0;
    }
    @media (max-width: 767px) {
        display: ${({isMob}) => isMob ? 'flex' : 'none'};
    }
`

export const HeaderLogoBlock = styled.div`
    a {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    cursor: pointer; 
    width: 50px;
    @media (max-width: 767px) {
        width: auto;
    }
`

export const CloseIconCont = styled.div`
    position: absolute;
    right: 16px;
    top: 40px;
    z-index: 3;
    svg {
        fill: black;
        width: 25px;
        height: 25px;
    }
`

export const BurgerMHeader = styled.div`
    display: flex;
    margin: -24px -24px 0px -24px;
    z-index: 2;
    position: sticky;
    padding: 0 16px;
    height: 72px;
    align-items: center;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
`

export const BurgerHeaderTxt = styled.h2`
    display: none;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;

    @media (max-width: 768px) {
        display: block;
    }
`

export const SearchBtn = styled.a`
    cursor: pointer;
    display: flex;
    height: 80px;
    background-color: rgb(251, 253, 255);
    font-weight: 600;
    gap: 10px;
    font-size: 16px;
    -webkit-box-align: center;
    align-items: center;
    margin: 0 -24px;
    padding: 0 16px;
    border: 1px solid rgb(229,232,235);
    border-top: none;
    color: rgba(4, 17, 29, 0.75);
    position: relative;
    align-items: center;
    .anticon-search svg {
        width: 32px;
        height: 32px;
    }
    .anticon-search {
        width: 46px;
    }

    .anticon-plus-square {
        width: 46px;
    }
    .anticon-plus-square svg {
        width: 32px;
        height: 32px;
    }
    p {
        font-size: 16px;
        margin-bottom: 0;
    }
`