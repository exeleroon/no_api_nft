/** @format */

import React from 'react'
import { StyledWarningOutlined, WarningBlockTextWrapper, WarningBlockWrapper } from './style'


const WarningBlock = ({children}) => {
    return (
        <WarningBlockWrapper>
            <StyledWarningOutlined />
            <WarningBlockTextWrapper>
                {children}
            </WarningBlockTextWrapper>
        </WarningBlockWrapper>
    )
}

export default WarningBlock
