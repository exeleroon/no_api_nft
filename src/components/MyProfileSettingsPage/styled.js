import { Button } from "antd";
import styled from "styled-components";


export const DropItemsSettings = styled.div`
    padding: 20px 20px;
    font-size: 16px;
    display: block;
    align-items: center;
    color: #333;
    transition: .3s;
    
    .ant-form {
        /* display: flex; */
        margin-top: 20px;
        justify-content: space-between;
        gap: 20px;
    }
    .ant-row {
        width: -webkit-fill-available;
        margin-bottom: 0;
    }
    :not(:last-child) {
        border-bottom: 1px solid #eaeaea;
    }
    .ant-input:focus{
        box-shadow:none;
    }
    .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus{
        box-shadow:none;
    }
`

export const StyledSettingButton = styled(Button)`
    padding: 10px 20px;
    height: 44px;
    line-height: 0;
    font-size: 18px;
    border: none;
    background: #1890ff;
    border-radius: 0 10px 10px 0;
    font-size: 18px;
    a {
        line-height: 0;
    }
    &:hover {
        border:none;
        background: #40a9ff;
    }
    &:active {
        background: #1890ff;
        border: none;   
    }
`