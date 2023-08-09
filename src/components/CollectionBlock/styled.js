/** @format */

import styled from 'styled-components'

export const CardsWrapper = styled.div`
    margin-bottom: 30px;

    @media (max-width: 820px) {
        .ant-col {
            max-height: 500px !important;
            min-width: 240px !important;
        }
        .ant-col-6 {
            display: block;
            flex: auto;
            max-width: 50%;
        }
    }

    @media (max-width: 520px) {
        .ant-col {
            max-height: 600px !important;
            min-width: 240px !important;
        }

        .ant-col-6 {
            flex: 2 1 100%;
            max-width: 100%;
        }
    }

    @media (max-width: 410px) {
        .ant-col-6 {
            max-width: 100%;
        }
    }
`


export const ItemPreloader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    margin: 0 auto;
    img {
        fill: black;
    }
    @media (max-width: 767px) {
        height: 300px;
    }

`