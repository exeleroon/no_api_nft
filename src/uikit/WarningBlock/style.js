import { WarningOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const WarningBlockWrapper = styled.div`
    border: 2px solid orange;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 20px 0;
    display: flex;
    align-items: center;
`

export const StyledWarningOutlined = styled(WarningOutlined)`
    font-size: 28px;
    padding-right: 21px;
    color: orange;
    position: relative;
    top: -3px;
`

export const WarningBlockTextWrapper = styled.div`
    font-size: 16px;
    color: orange;
    font-weight: 600;
`