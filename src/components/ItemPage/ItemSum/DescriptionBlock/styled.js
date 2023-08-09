/** @format */

import styled from 'styled-components'

export const AboutBlock = styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    margin: 4px 0px;

    @media (min-width: 1024px) {
        margin: 20px;
    }
`

export const Description = styled.div`
    box-sizing: border-box;
    border-bottom: 1px solid rgb(229, 232, 235);
    border-image: initial;
    color: rgb(4, 17, 29);
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    border-radius: 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    margin-bottom: -1px;
    margin-top: 1px;
`
export const TitleBlock = styled.button`
    cursor: pointer;
    border: 0px;
    margin: 0px;
    border-radius: 0px;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    user-select: none;
    background-color: rgb(255, 255, 255);
    width: 100%;
    -webkit-box-align: center;
    align-items: center;

    :focus {
        outline: none;
    }

    @media (max-width: 768px) {
        padding: 15px 20px;
    }

`

export const Title = styled.span`
    cursor: initial;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    user-select: none;
`
export const BodyBlock = styled.div`
    box-sizing: border-box;
    border-top: 1px solid rgb(229, 232, 235);
    color: rgb(53, 56, 64);
    background-color: rgb(251, 253, 255);
    border-radius: 0px;
    border-left: 0px;
    border-right: 0px;
    height: initial;
    max-height: 300px;
    overflow: auto;
    transition: height 100ms ease 0s;
`

export const InnerText = styled.div`
    padding: 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const Text = styled.span`
    box-sizing: border-box;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 8px;
`

export const TextLine = styled.div`
    box-sizing: border-box;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 8px;
    display: flex;
`

export const ValueWrapper = styled.span`
    margin: 0px;
    max-width: 365px;
    text-align: right;
    font-weight: 600;
    font-size: 14px;
    color: rgb(112, 122, 131);
    box-sizing: border-box;
`
export const Address = styled.a`
    color: rgb(32, 129, 226);
    text-decoration: none;

    :hover {
        color: rgb(24, 104, 183);
    }
`

export const Token = styled.button`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    padding: 0px;
    background: inherit;
    cursor: pointer;
    :focus {
        outline: none;
    }
`

export const SocialNetWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    margin-top: 24px;
`

export const SocialNetLine = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: fit-content;
    box-sizing: border-box;
`

export const SocialNet = styled.a`
    box-sizing: border-box;
    text-decoration: none;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 232, 235);
    color: rgb(112, 122, 131);
    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0px;

    ${props => {
        if (props.position === 'left') {
            return `
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            `
        } else {
            return `
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            `
        }
    }}
`

export const Username = styled.a`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: rgb(32, 129, 226);
    text-decoration: none;
    font-weight: inherit;
    box-sizing: border-box;

    :hover {
        color: rgb(24, 104, 183);
    }
`

export const CreatedBy = styled.div`
    -webkit-box-align: center;
    align-items: center;
    color: rgb(138, 147, 155);
    display: flex;
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
`
