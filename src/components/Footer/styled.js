/** @format */

import styled from 'styled-components'

export const FooterSection = styled.div `
    padding: 60px 0;
    /* min-height: 100vh; */

    :last-child {
        border-top: 1px solid rgba(229, 232, 235, 0.5);
        padding: 30px 0;
    }

    @media (max-width: 767px) {
        padding: 30px 0 0;
        .socialCol {
            margin-bottom: 30px;
        }
        :last-child {
            border-top: 1px solid rgba(229, 232, 235, 0.5);
            padding: 20px 0;
        }
    }
`

export const FooterTitleWrapper = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`


export const FooterWrapper = styled.footer `
    /* width: 100%;
    position: absolute;
    bottom: 0; */
`

export const FooterIconWrapper = styled.div `
    width: 50px;
    margin-right: 12px;
`

export const FooterTitle = styled.div `
    color: #fff;
    font-size: 25px;
    font-weight: 600;
`

export const FooterDescription = styled.div `
    font-size: 16px;
    margin-bottom: 15px;
    color: #f5f5f5;

    @media (max-width: 767px) {
        margin-bottom: 10px;
    }
`

export const FooterMenuColWrapper = styled.div `
    @media (max-width: 767px) {
        margin-bottom: 30px;
    }
`

export const FooterMenuColTitle = styled.div `
    font-size: 18px;
    font-weight: 600;
    color: rgb(255, 255, 255);
`

export const FooterMenuColItem = styled.div `
    color: rgb(251, 253, 255);
    font-size: 16px;
    display: block;
    margin-top: 12px;
    display: flex;
    gap: 5px;

    a:hover {
        color: #fff;
        text-decoration: underline;
    }

    @media (max-width: 767px) {
        margin-top: 10px;
    }
`

export const FooterSecondSectionInner = styled.div `
    color: #f5f5f5;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
`

export const CopyBlock = styled.div `
    /* font-size: 13px; */
    @media (max-width: 601px) {
        order: 2
    }
`

export const PrivacyMenu = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    @media (max-width: 601px) {
        gap: 10px;
    }

`

export const PrivacyMenuItem = styled.a `
    color: inherit;

    :hover {
        color: inherit;
        text-decoration: underline;
    }
`