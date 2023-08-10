/** @format */

import { useDispatch, useSelector } from 'react-redux'
import { HeaderAccountImage, HeaderAccountWrapper } from './styled'
import { Dropdown } from 'antd'
import userDefaultAvatar from '../../../public/assets/images/blueEx.png'
import { EyeOutlined, LoadingOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { logout } from 'redux/auth-reducer'
import Link from 'next/link'
import DropdownMenuContainer from 'components/DropDownMenu/DropdownMenuContainer'
import { useRouter } from 'next/router'

const HeaderAccountInfo = ({ userDataLoading }) => {
    const isConfirmed = useSelector(state => state.auth.isConfirmed)
    const accountAvatar = useSelector(state => state.auth.avatar)
    const dispatch = useDispatch()
    const router = useRouter()

    const logoutButtonOnClick = () => {
        dispatch(logout())
        router.push('/')
    }

    let dropdownItems = [
        {
            icon: <UserOutlined />,
            text: 'Профиль',
            link: `/my-profile`,
            noFollow: true
        },
        {
            icon: <SettingOutlined />,
            text: 'Настройки',
            link: '/my-profile/settings',
            noFollow: true
        },
        // {
        //     icon: <EyeOutlined />,
        //     text: 'Отслеживаемые',
        //     link: '/my-profile/likes',
        //     noFollow: true
        // },
        {
            icon: <LogoutOutlined />,
            text: 'Выйти из аккаунта',
            onClick: logoutButtonOnClick
        }
    ]

    return (
        <>
            {!userDataLoading ? (
                <HeaderAccountWrapper>
                    <LoadingOutlined style={{ color: '#333', fontSize: '53px' }} />
                </HeaderAccountWrapper>
            ) : (
                <Dropdown overlay={<DropdownMenuContainer menuItems={dropdownItems} />} placement='bottomLeft'>
                    <HeaderAccountWrapper isConfirmed={isConfirmed}>
                        <HeaderAccountImage src={accountAvatar ? accountAvatar : userDefaultAvatar.src} alt='' width={46} height={46} />
                    </HeaderAccountWrapper>
                </Dropdown>
            )}
        </>
    )
}

export default HeaderAccountInfo
