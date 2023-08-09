/** @format */

import styled from 'styled-components'

export const Wrapper = styled.div `
    position: relative;
    min-height: calc(100vh - 72px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`

export const BackgroundOverlay = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-color: rgb(255, 255, 255);
    background-position: center center;
    ${props => (props.image ? `background-image: url('${props.image}')` : ``)};
    opacity: 0.3;
    filter: blur(8px);
    -webkit-mask: linear-gradient(rgb(255, 255, 255), transparent);
`

export const TextWrapper = styled.div`
    padding: 0px 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
        padding: 40px 0px;
    }
`

export const MainText = styled.h1`
    font-size: 60px;
    line-height: 110%;
    font-weight: 700;
    color: rgb(4, 17, 29);
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        justify-content: center;
    }

    @media (max-width: 440px) {
        font-size: 40px;
    }
`

export const MainImgWrapper = styled.div`
    display: inline-flex;
    margin-right: 12px;
    width: 80px;
    position: relative;

    @media (max-width: 440px) {
        width: 60px;
        top: 2px;
    }
`

export const SubText = styled.p`
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    margin-top: 20px;
    color: rgb(53, 56, 64);

    @media (max-width: 767px) {
        text-align: center;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    margin-top: 60px;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        margin-top: 40px;
        justify-content: center;
        gap: 20px;
    }
`

export const CustomButton = styled.a`
    display: inline-flex;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 20px;
    width: 167px;
    transition: all 0.2s ease 0s;
    ${props => {
        if (props.status === 'primary') {
            return `
                background-color: rgb(32, 129, 226);
                border: 1px solid rgb(32, 129, 226);
                color: rgb(255, 255, 255);
            `
        } else {
            return `
                background-color: rgb(255, 255, 255);
                border: 1px solid rgb(32, 129, 226);
                color: rgb(32, 129, 226);
            `
        }
    }}

    :hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
        ${props => {
            if (props.status === 'primary') {
                return `
                    color: rgb(255, 255, 255);
                    background-color: rgb(24, 104, 183);
                `
            } else {
                return `
                    border: 1px solid rgb(24, 104, 183);
                    color: rgb(24, 104, 183);
                `
            }
        }}
    }
`