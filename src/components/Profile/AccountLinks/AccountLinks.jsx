/** @format */

import React from 'react'
import { AccountLinksContainer, LeftLinks, LeftSideLinks, RightSideLinks, ShareBtn, ShareBtnCont} from './styled'
import { Tooltip, Dropdown } from 'antd'
import { ShareAltOutlined, TwitterSquareFilled, FacebookFilled, CopyFilled } from '@ant-design/icons'
import DropdownMenuContainer from 'components/DropDownMenu/DropdownMenuContainer'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import Link from 'next/link'

const copyLink = () => {
    navigator.clipboard.writeText(window.location)
}

const menuItems = [
    {
        icon: <CopyFilled />,
        text: 'Скопировать ссылку',
        onClick: copyLink
    },
    {
        icon: <FacebookFilled />,
        text: 'Сделать репорст в Facebook',
        link: '/facebook.com'
    },
    {
        icon: <TwitterSquareFilled />,
        text: 'Сделать репорст в Twitter',
        link: '/twitter.com'
    }
]

const AccountLinks = () => {
    return (
        <AccountLinksContainer>
            <LeftSideLinks>
                <LeftLinks />
            </LeftSideLinks>
            {/* <RightSideLinks>
                <ShareBtnCont>
                    <Tooltip placement='topRight' color={'#000'} overlayInnerStyle={tooltipStyle} title='Сделать репост'>
                        <Dropdown overlay={<DropdownMenuContainer menuItems={menuItems} />} trigger={['click']}>
                            <div className='ant-dropdown-link'>
                                <ShareBtn>
                                    <ShareAltOutlined />
                                </ShareBtn>
                            </div>
                        </Dropdown>
                    </Tooltip>
                </ShareBtnCont>
            </RightSideLinks> */}
        </AccountLinksContainer>
    )
}

export default AccountLinks
