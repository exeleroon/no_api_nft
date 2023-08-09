/** @format */
import { useDispatch, useSelector } from 'react-redux'
import { Collapse } from 'antd'
import userDefaultAvatar from '../../../public/assets/images/blueEx.png'
import { LoadingOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { logout } from 'redux/auth-reducer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HeaderAccountWrapper } from 'components/HeaderAccountInfo/styled'
import { AccordionMenuItem, AccordionTextItem, BurgerDropMyAcc, HeaderAccountImage, ItemIconWrapper } from './styled'
import { toggleMobMenu } from 'redux/search-reducer'

const { Panel } = Collapse

const AccordionMenu = ({ userDataLoading }) => {
    const isConfirmed = useSelector(state => state.auth.isConfirmed)
    const accountAvatar = useSelector(state => state.auth.avatar)
    const dispatch = useDispatch()
    const router = useRouter()
    const logoutButtonOnClick = () => {
        dispatch(logout())
        router.push('/')
    }

    const switchMobMenu = () => {
        dispatch(toggleMobMenu(false))
    }

    let AccordionItems = [
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
        {
            icon: <LogoutOutlined />,
            text: 'Выйти из аккаунта',
            link: '#',
            onClick: logoutButtonOnClick
        }
    ]

    return (
        <Link href='#'>
            {userDataLoading ? (
                <HeaderAccountWrapper>
                    <LoadingOutlined style={{ color: '#333', fontSize: '53px' }} />
                </HeaderAccountWrapper>
            ) : (
                <BurgerDropMyAcc>
                    <Collapse defaultActiveKey={['1']} forceRender={true} expandIconPosition={'right'}>
                        <Panel
                            key='1'
                            header={
                                <>
                                    <HeaderAccountImage src={accountAvatar ? accountAvatar : userDefaultAvatar.src} alt='' width={46} height={46} />
                                    <p>My profile</p>
                                </>
                            }
                        >
                            {AccordionItems.map((item, i) => {
                                return (
                                    <>
                                        {item.onClick ? (
                                            <AccordionMenuItem>
                                                {item.icon ? <ItemIconWrapper>{item.icon}</ItemIconWrapper> : ''}
                                                {item.text ? <AccordionTextItem>{item.text}</AccordionTextItem> : ''}
                                            </AccordionMenuItem>
                                        ) : (
                                            <div onClick={switchMobMenu}>
                                                <Link href={item?.link ? item?.link : '#'} key={i} passHref>
                                                    <AccordionMenuItem>
                                                        {item.icon ? <ItemIconWrapper>{item.icon}</ItemIconWrapper> : ''}
                                                        {item.text ? <AccordionTextItem>{item.text}</AccordionTextItem> : ''}
                                                    </AccordionMenuItem>
                                                </Link>
                                            </div>
                                        )}
                                    </>
                                )
                            })}
                        </Panel>
                    </Collapse>
                </BurgerDropMyAcc>
            )}
        </Link>
    )
}

export default AccordionMenu
