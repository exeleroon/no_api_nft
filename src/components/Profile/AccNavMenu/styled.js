import styled from 'styled-components';

export const TabsWrapper = styled.div`
    overflow: auto;

    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap::before, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap::before, .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap::after, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap::after {
        display: none !important;
    }

    .ant-tabs-nav-operations {
        display: none !important;
    }
    .ant-tabs-nav-wrap {
        justify-content: center;
    }
  
    .ant-tabs-nav-more {
        z-index: 3;
    }
   
    .ant-tabs-tab {
        display: flex;
        border-radius: 10px;
        padding: 20px 30px;
    }

    .ant-tabs-nav-list  &::after {
        position: inherit;
        display: none !important;
        z-index: 0;
        opacity: 0;
        content: '';
    }
    
    .ant-tabs-tab-active .hookClass{
        color: #353840 !important;
    }


    @media(max-width: 821px) {
        .ant-tabs-nav-list {
            justify-content: center;
            gap: 10px;
        }
  
        .ant-tabs-tab + .ant-tabs-tab {
            margin: 0px;
        }
        .ant-tabs-tab {
            padding: 10px 20px;
        }
    }

    @media(max-width: 601px) {
        .ant-tabs-nav-wrap {
            justify-content: space-between;
        }
        .ant-tabs-nav-list {
            justify-content: center;
            gap: 0px;
        }
        .ant-tabs-tab + .ant-tabs-tab {
            margin: 0px;
        }
        .ant-tabs-tab  {
            margin: 0px;
            padding: 10px 20px;
        }
    }

    @media(max-width: 426px) {

        .ant-tabs-tab  {
            padding: 10px;
        }
    }

`
export const TabText = styled.span`
    line-height: 16px;
    font-size: 18px;
    @media (max-width: 401px) {
        font-size: 14px;
    }
`

export const TabQuantity = styled.span`
    font-weight: 500;
    font-size: 12px; 
`


export const TabsIconText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #707A83;

    span svg {
        width: 24px;
        height: 24px;
    }

    &:hover {
        color: rgb(53, 56, 64);
    }

    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;
`
