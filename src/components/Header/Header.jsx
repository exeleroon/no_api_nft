/** @format */

import Account from 'components/Account'
import MainLogo from '../../../public/assets/images/logos/main.svg'
import {
    AccountDetailsWrapepr,
    BurgerHeaderTxt,
    BurgerMHeader,
    CloseIconCont,
    HeaderLogoBlock,
    SearchBtn,
    SearchCollectionsWrapper,
    StyledHeader,
    StyledMenu,
    StyledMenuItem,
    StyledMenuItemWrapper
} from './styled'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { MobileHidden, MobileVisible } from 'uikit/ResponsiveHelpers/styled'
import { Drawer, Dropdown } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { CloseOutlined, PlusSquareOutlined } from '@ant-design/icons'
import SearchCollections from 'components/SearchCollections'
import DropdownMenuContainer from 'components/DropDownMenu/DropdownMenuContainer'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobMenu } from 'redux/search-reducer'
// import Chains from 'components/Chains'
// import NativeBalance from 'components/NativeBalance'
//TODO: remove unused imports from all files

const data = {
    name: 'Ноу нэйм',
    artist: 'artist'
}

const menuItems = [
    {
        text: 'Что такое nft токены',
        link: '/chto-takoe-nft-tokenu'
    },
    {
        text: 'Как создать нфт',
        link: '/how-to-create-nft'
    },
    {
        text: 'Контакты',
        link: '/kontaktu'
    },
    {
        text: 'Купить нфт токенс',
        link: '/kypit-nft-tokenu'
    },
    {
        text: 'Где купить нфт токенс',
        link: '/gde-kypit-nft-tokenu'
    }
]

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const isMobMenuOpen = useSelector(state => state.search.isMobMenuOpen)

    const toggleDrawer = () => {
        if (isMobMenuOpen === true) {
            dispatch(toggleMobMenu(false))
        } else {
            dispatch(toggleMobMenu(true))
        }
    }

    return (
        <StyledHeader>
            <div>
                <Logo />
            </div>
            <MobileHidden style={{ flexGrow: 1 }}>
                <SearchCollectionsWrapper>
                    <SearchCollections />
                </SearchCollectionsWrapper>
            </MobileHidden>
            <MobileHidden>
                <StyledMenu>
                    <StyledMenuItemWrapper>
                        <Link href='/search' passHref>
                            <StyledMenuItem>Найти</StyledMenuItem>
                        </Link>
                    </StyledMenuItemWrapper>
                    {/*{isAuth && (*/}
                        <StyledMenuItemWrapper>
                            <Link href='/create-nft' passHref>
                                <StyledMenuItem>Создать</StyledMenuItem>
                            </Link>
                        </StyledMenuItemWrapper>
                    {/*// )}*/}
                    {/* <StyledMenuItemWrapper>
                        <Link href='/kypit-nft/connected' passHref>
                            <StyledMenuItem>NFT Item</StyledMenuItem>
                        </Link>
                    </StyledMenuItemWrapper>
                    <StyledMenuItemWrapper>
                        <Link href={`/artist/${data.name}`} passHref>
                            <StyledMenuItem>Профиль артиста</StyledMenuItem>
                        </Link>
                    </StyledMenuItemWrapper> */}
                    {/* <StyledMenuItemWrapper>
                        <Dropdown overlay={<DropdownMenuContainer menuItems={menuItems} />} trigger={['hover']}>
                            <StyledMenuItem className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                                Другие страницы
                            </StyledMenuItem>
                        </Dropdown>
                    </StyledMenuItemWrapper> */}
                </StyledMenu>
            </MobileHidden>
            <AccountDetailsWrapepr>
                {/* <Chains /> */}
                {/* <NativeBalance /> */}
                <Account />
            </AccountDetailsWrapepr>
            <MobileVisible>
                <MenuOutlined onClick={toggleDrawer} />
            </MobileVisible>

            <Drawer
                width={'100%'}
                placement='right'
                className='drawerBurger'
                style={{ marginTop: -16 }}
                closeIcon={
                    <CloseIconCont>
                        <CloseOutlined />
                    </CloseIconCont>
                }
                onClose={toggleDrawer}
                visible={isMobMenuOpen}
            >
                <BurgerMHeader>
                    <Logo mobMenu func={toggleDrawer} />
                </BurgerMHeader>
                <SearchCollectionsWrapper>
                    <SearchCollections />
                </SearchCollectionsWrapper>
                <AccountDetailsWrapepr isMob>
                    {/* <Chains /> */}
                    {/* <NativeBalance /> */}
                    <Account mobMenu />
                </AccountDetailsWrapepr>
                <div onClick={toggleDrawer}>
                    <Link href='/search' passHref>
                        <SearchBtn>
                            <SearchOutlined />
                            <p> Найти</p>
                        </SearchBtn>
                    </Link>
                </div>
                {isAuth && (
                    <div onClick={toggleDrawer}>
                        <Link href='/create-nft' passHref>
                            <SearchBtn>
                                <PlusSquareOutlined />
                                <p> Создать NFT</p>
                            </SearchBtn>
                        </Link>
                    </div>
                )}
            </Drawer>
        </StyledHeader>
    )
}

// TODO: create separate component + add styled-components + refactor using https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component
export const Logo = ({ func }) => (
    <HeaderLogoBlock onClick={func}>
        <Link href='/' passHref>
            <a>
                <Image src={MainLogo.src} alt='NFT Music logo' width={50} height={50} />
                <BurgerHeaderTxt>Nft Music</BurgerHeaderTxt>
            </a>
        </Link>
    </HeaderLogoBlock>
)

export default Header
