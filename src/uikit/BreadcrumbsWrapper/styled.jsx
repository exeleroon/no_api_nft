/** @format */

import styled from 'styled-components'

export const BreadcrumbsWrapper = styled.div`
    margin-bottom: 20px;

    a {
        color: #4f4f5e !important;
        opacity: 50%;
    }
    a:hover {
        opacity: 100% !important;
        text-decoration: none !important;
    }
    a:hover:after {
        width: 0%;
    }
    .ant-breadcrumb {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        margin-bottom: 5px;
        color: black;
        font-family: Nunito;
    }

    .ant-breadcrumb > span:last-child {
        font-weight: bolder;
    }
`
