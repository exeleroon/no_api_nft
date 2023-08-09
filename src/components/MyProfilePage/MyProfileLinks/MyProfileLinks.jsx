/** @format */

import React from 'react'
import { AccountLinksContainer, LeftLinks, LeftSideLinks, RightSideLinks, ShareBtn, ShareBtnCont } from './styled'
import { Tooltip, Dropdown } from 'antd'
import { ShareAltOutlined, TwitterSquareFilled, FacebookFilled, CopyFilled, SettingFilled } from '@ant-design/icons'
import DropdownMenuContainer from 'components/DropDownMenu/DropdownMenuContainer'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import Link from 'next/link'
import { ActionBtnR } from './styled'

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

const MyProfileLinks = () => {
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
                                <ActionBtn>
                                    <ShareAltOutlined />
                                </ActionBtn>
                            </div>
                        </Dropdown>
                    </Tooltip>
                    <Link href={'#'} passHref>
                        <Tooltip placement='topRight' color={'#000'} overlayInnerStyle={tooltipStyle} title='Настройки'>
                            <ActionBtnR>
                                <SettingFilled />
                            </ActionBtnR>
                        </Tooltip>
                    </Link>
                </ShareBtnCont>
            </RightSideLinks> */}
        </AccountLinksContainer>
    )
}

export default MyProfileLinks
