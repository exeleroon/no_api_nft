import styled from 'styled-components';

export const SearchElemWrapper = styled.div`
    *, ::before, ::after {
        box-sizing: border-box;
    }
    @media (min-width: 600px) {
        flex-flow: row wrap;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin: 24px 0px 10px;
        max-width: none;
    }
    @media (min-width: 815px) {
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
  

`

export const InputElWrapper = styled.div`
    margin: 8px 16px 8px 0px;
    flex: 1 0 0%;
    cursor: text;
    display: flex;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    width: 100%;
    padding: 12px;
  


    .ant-input:focus {
        border: none;
        box-shadow: none;
    }
      
    .ant-input-search-button {
        border: none;
        height: 24px;
    }
    .anticon-search svg {
        width: 20px;
        height: 20px;
        color: #353840;
    }
    .ant-input {
        padding: 0px;
        border: none;
    }

`
export const SearchView = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-top: 12px;
    z-index: 3;
    max-width: 100%;
    flex-wrap: wrap;

    border-radius: 10px;

    @media (min-width: 600px) {
        margin-top: 0px;
        flex-wrap: nowrap;
    }
    
`

export const SelectItemsCont = styled.div`
    .itemsSelect {
        height: 50px;
        
    }
    border: 1px solid rgb(229, 232, 235);   
    border-radius: 10px !important;
    .ant-select-selector {
        min-width: 257px;
        height: 50px !important;
        padding: 0px 32px 12px 12px !important;
        border-radius: 10px !important;
  
    }
    .ant-select-selection-item {
        padding: 9px 0 0 0  !important;
    }

`

export const WhenViewedBlock = styled.div`

@media (min-width: 600px) {
    order: 2;
    width: initial;
    margin-top: 0px;
    margin-left: 8px;
}

`

export const ViewStyleCont = styled.div`
    -webkit-box-flex: 0;
    flex-grow: 0;
    order: 2;
    margin: 0;
    padding: 0;
    @media (min-width: 600px) {
        order: 3;
    }
    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

`

export const SwitchBtn = styled.div`
    opacity: 1;
    background-color: rgb(243, 251, 254);
    display: inline-flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    margin-left: 8px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 232, 235);
    color: rgb(112, 122, 131);
    .anticon.anticon-appstore svg{
        width: 24px;
        height: 24px;
    }
    .anticon.anticon-holder svg{
        width: 24px;
        height: 24px;
    }
    &:hover {
        color: #04111D;
    }
    cursor: pointer;
    transition: all 0.2s ease 0s;

`
