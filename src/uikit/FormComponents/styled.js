/** @format */

import { Button, Checkbox, DatePicker, Input, Select } from 'antd'
import styled from 'styled-components'

const { TextArea } = Input
const { RangePicker } = DatePicker

export const StyledButton = styled(Button)`
    border-radius: 10px;
    padding: 10px 20px;
    height: auto;
    font-size: 18px;
    ${({ pseudoDisabled }) => pseudoDisabled ? `opacity: 0.5;` : ``}
`

export const ButtonNearInput = styled(Button)`
    border-radius: 0 10px 10px 0;
    height: auto;
    width: 60px;
    font-size: 18px;
`

export const StyledInput = styled(Input)`
    border-radius: 10px;
    padding: 10px 20px;
    line-height: 0;
    ${({ isButtonNearInput }) => isButtonNearInput ? `border-radius: 10px 0 0 10px; border-right: none;` : `border-radius: 10px;`}
`

export const StyledSelect = styled(Select)`
    .ant-select-selector.ant-select-selector {
        border-radius: 10px;
        padding: 7px 20px;
        height: auto;
    }

    .ant-select-selection-item {
        display: flex;
        gap: 10px;
    }
`

export const StyledPasswordInput = styled(Input.Password)`
    border-radius: 10px;
    padding: 10px 20px;
`

export const StyledTextArea = styled(TextArea)`
    border-radius: 10px;
    padding: 10px 20px;
`

export const StyledLabel = styled.div`
    margin-bottom: 4px;
    color: rgb(53, 56, 64);
    font-weight: 600;
    font-size: 17px;
`

export const StyledSublabel = styled.div`
    font-weight: 500;
    font-size: 13px;
    color: rgb(112, 122, 131);
    margin-bottom: 7px;
`

export const FormRow = styled.div`
    margin-top: 20px;
`

export const StyledCheckbox = styled(Checkbox)`
    .ant-checkbox-inner {
        border-radius: 4px;
    }

    .ant-checkbox-checked::after {
        border-radius: 4px;
    }
`

export const StyledRangePicker = styled(RangePicker)`
    border-radius: 10px;
    padding: 10px 20px;
`
