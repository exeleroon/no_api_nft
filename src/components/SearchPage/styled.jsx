/** @format */

import { Button } from 'antd'
import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    flex: 1 1 0%;
    box-sizing: border-box;
    width: 100%;
    @media (max-width: 601px) {
        justify-content: center;
    }
`

export const FilterContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 9;
    /* position: sticky;
    bottom: 0px; */
    /* top: 77px; */
    /* flex-shrink: 0; */
    background-color: rgb(255, 255, 255);
    /* align-self: flex-start; */
    /* height: calc(100vh - 72px); */
    border-right: 1px solid rgb(229, 232, 235);
    box-shadow: rgba(4, 17, 29, 0.25) 0px 0px 8px 0px;
    transition: all ease-in-out 0.3s;

    @media (min-width: 600px) {
        width: 60px;
        overflow: auto;
    }

    :hover {
        box-shadow: rgba(4, 17, 29, 0.25) 0px 0px 8px 0px;
        color: black;
    }

    @media (max-width: 1200px) {
        position: fixed;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid rgb(32, 129, 226);
        background-color: rgb(32, 129, 226);
        bottom: 20px;
        right: 20px;

        :hover {
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            color: rgb(255, 255, 255);
            background-color: rgb(24, 104, 183);
        }
    }
`
export const FilterContainerOpen = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 340px;
    z-index: 9;
    /* position: sticky;
    bottom: 0px; */
    top: 72px;
    /* flex-shrink: 0; */
    background-color: rgb(255, 255, 255);
    /* align-self: flex-start; */
    /* height: calc(100vh - 72px); */
    display: block;
    position: initial;
    top: initial;
    border-right: 1px solid rgb(229, 232, 235);
    box-shadow: rgba(4, 17, 29, 0.25) 0px 0px 8px 0px;

    @media (min-width: 600px) {
        overflow: auto;
    }

    @media (max-width: 1200px) {
        position: absolute;
        transition: all ease-in-out 0.3s;
    }
`
export const ButtonOpen = styled.button`
    display: block;
    position: initial;
    top: initial;
    z-index: 3;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    padding: 0px;
    background: inherit;
    height: 100%;
    cursor: pointer;
    top: 0px;
    display: flex;
    background-color: rgb(255, 255, 255);
    border-bottom: none;
    -webkit-box-align: center;
    align-items: center;
    flex: 0 0 auto;
    order: 1;
    -webkit-box-flex: 0;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 16px;
    position: sticky;
    z-index: 1;

    @media (max-width: 1200px) {
        /* border-bottom-right-radius: 10px; */
        /* border: 1px solid rgb(32,129,226); */
        border-radius: 10px;
        background-color: rgb(32, 129, 226);
        justify-content: center;
        transition: all ease-in-out 0.3s;

        .anticon svg {
            color: white;
        }

        :hover {
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            color: rgb(255, 255, 255);
            background-color: rgb(24, 104, 183);
        }
    }
`

export const ButtonClose = styled.button`
    align-self: flex-start;
    top: 0px;
    margin-right: 5px;
    margin-top: 5px;
    box-sizing: border-box;
    background-color: white;
    border: none;
    cursor: pointer;
`

export const IconContainer = styled.div`
    align-self: flex-start;
    top: 0px;
    color: rgba(4, 17, 29, 0.5);
    /* margin-right: 5px;
    margin-top: 5px; */
`

export const HeaderContainer = styled.div`
    height: 67px;
    top: 0px;
    display: flex;
    border-bottom: 1px solid rgb(229, 232, 235);
    background-color: rgb(255, 255, 255);
    -webkit-box-align: center;
    align-items: center;
    flex: 0 0 auto;
    order: 1;
    -webkit-box-flex: 0;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 16px;
    position: sticky;
    z-index: 1;

    :hover {
        box-shadow: rgba(4, 17, 29, 0.25) 0px 0px 8px 0px;
        color: black;
    }
`

export const Header = styled.button`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    -webkit-box-flex: 0;
    order: 1;
    top: 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    padding: 0px;
    background: inherit;

    :focus {
        outline: none;
    }
`

export const HeaderLabel = styled.div`
    color: rgb(4, 17, 29);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex: 0 0 auto;
    order: 0;
    align-items: center;
    -webkit-box-flex: 0;
`

export const SearchResults = styled.div`
    min-width: 0px;
    padding-bottom: 80px;
    padding-left: 8px;
    padding-right: 8px;
    /* border-left: 1px solid rgb(229, 232, 235); */
    padding-top: 16px;
    position: relative;

    @media (min-width: 600px) {
        flex: 1 0 0%;
        padding: 0px 28px;
        padding-top: 63px;
    }
`

export const Container = styled.div`
    border-top: none;
    border-left: none;
    margin-top: 1px;
    color: rgb(4, 17, 29);
    background-color: rgb(255, 255, 255);
    overflow: hidden;
`

export const LookForContainer = styled.div`
    border-top: none;
    border-left: none;
    margin-top: 1px;
    color: rgb(4, 17, 29);
    background-color: rgb(251, 253, 255);
    overflow: hidden;
    border-bottom: 1px solid rgb(229, 232, 235);
    padding: 20px;
`

export const InnerContainer = styled.div`
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid rgb(229, 232, 235);
    color: rgb(53, 56, 64);
    background-color: rgb(251, 253, 255);
    transition: height 100ms ease 0s;
    overflow: visible;
    padding: 20px;
`

export const StyledSublabel = styled.h1`
    font-weight: 500;
    font-size: 13px;
    color: rgb(112, 122, 131);
    margin-bottom: 7px;
`

export const ContainerButton = styled(Button)`
border: 0 px;
margin: 0 px;
width: 100%; 
webkit-box-align: center;
align-items: center;
cursor: pointer;
display: flex;
font-size: 16px;
font-weight: 600;
padding: 20px;
user-select: none;
background - color: rgb(255, 255, 255);
border - bottom: 1 px solid rgb(229, 232, 235);
height: initial !important;
border-top: none !important;
border-right: none !important;
border-left: none !important;
:hover {
    box - shadow: rgba(4, 17, 29, 0.25) 0 px 0 px 8 px 0 px !important;
    color: black  !important;
    border-color: rgb(229, 232, 235) !important;
    border-left: none;

}

:focus {
    color: black !important;
    border-color: rgb(229, 232, 235) !important;
}
`

export const AltText = styled.h3`
    text-align: center;
    font-size: 22px;
    min-width: 190px;
    opacity: 0.7;
    // margin-top: 200px;
    position: absolute;
    left: 50%;
    top: ${({noSearchText}) => noSearchText ? '18%' : '50%'};
    transform: translate(-50%, -50%);
`


export const ItemPreloader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;

    @media (max-width: 767px) {
        height: 300px;
    }

`