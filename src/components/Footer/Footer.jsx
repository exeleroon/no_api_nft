/** @format */

import { Col, Row } from 'antd'
import React from 'react'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import {
    CopyBlock,
    FooterDescription,
    FooterIconWrapper,
    FooterMenuColItem,
    FooterMenuColTitle,
    FooterMenuColWrapper,
    FooterSecondSectionInner,
    FooterSection,
    FooterTitle,
    FooterTitleWrapper,
    PrivacyMenu,
    FooterWrapper,
    PrivacyMenuItem
} from './styled'
import WhiteLogo from '../../../public/assets/images/logos/white.svg'
import twitterIcon from '../../../public/assets/images/twitterIcon2.svg'
import instaIcon from '../../../public/assets/images/instIcon2.svg'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    const data = {
        name: 'Ноу нэйм',
        artist: 'artist'
    }

    //TODO: refactor code below to single array

    const firstColItems = [
        {
            text: 'Что такое NFT токены',
            link: '/chto-takoe-nft-tokenu'
        },
        {
            text: 'Купить NFT токены',
            link: '/kypit-nft-tokenu'
        },
        {
            text: 'Как создать NFT',
            link: '/how-to-create-nft'
        },
        {
            text: 'Где купить NFT токены',
            link: '/gde-kypit-nft-tokenu'
        },
        {
            text: 'Что такое Аудио NFT',
            link: '/nft-audio'
        }
    ]

    const secondColItems = [
        {
            text: 'Войти',
            link: '/login'
        },
        {
            text: 'Регистрация',
            link: '/signup'
        }
    ]

    const thirdColItems = [
        {
            text: 'Контакты',
            link: '/kontaktu'
        },
        {
            text: 'info@nft-music.co',
            link: 'mail:info@nft-music.co'
        }
    ]

    return (
        <FooterWrapper>
            <DefaultSection backgoundColor={'rgb(0 126 251)'} disablePadding={true}>
                <DefaultContainer>
                    <FooterSection>
                        <Row gutter={40}>
                            <Col sm={24} md={9} className={'socialCol'}>
                                <FooterTitleWrapper>
                                    <FooterIconWrapper>
                                        <Image src={WhiteLogo.src} alt='NFT Music logo' width={50} height={50} />
                                    </FooterIconWrapper>
                                    <FooterTitle>NFT Music</FooterTitle>
                                </FooterTitleWrapper>
                                <FooterDescription>Первый и крупнейший NFT аудио-маркетплейс</FooterDescription>
                                <a href={'https://www.instagram.com/nft_music.co'} target='_blank'>
                                    <Image src={instaIcon.src} width={16} alt='Instagram logo' height={16} />
                                </a>
                                <a style={{ marginLeft: '20px' }} href={'https://twitter.com/nft_music_co'} target='_blank'>
                                    <Image src={twitterIcon.src} alt='Twitter logo' width={16} height={16} />
                                </a>
                            </Col>
                            <Col xs={12} md={5}>
                                <FooterMenuCol title={'NFT токены'} items={firstColItems} />
                            </Col>
                            <Col xs={12} md={5}>
                                <FooterMenuCol title={'Аккаунт'} items={secondColItems} />
                            </Col>
                            <Col xs={12} md={5}>
                                <FooterMenuCol title={'Обратная связь'} items={thirdColItems} />
                            </Col>

                            {/* <Col xs={12} md={4}>
                            <FooterMenuCol title={'Мой аккаунт'} items={secondColItems} />
                        </Col> */}
                        </Row>
                    </FooterSection>
                    <FooterSection>
                        <FooterSecondSectionInner>
                            <CopyBlock>© 2021 - {new Date().getFullYear()} NFT Music</CopyBlock>
                            <PrivacyMenu>
                                <Link href={'/privacy-policy'} passHref>
                                    <PrivacyMenuItem rel='nofollow'>Политика конфиденциальности</PrivacyMenuItem>
                                </Link>
                                <Link href={'/terms-and-conditions'} passHref>
                                    <PrivacyMenuItem rel='nofollow'>Условия использования</PrivacyMenuItem>
                                </Link>
                            </PrivacyMenu>
                        </FooterSecondSectionInner>
                    </FooterSection>
                </DefaultContainer>
            </DefaultSection>
        </FooterWrapper>
    )
}

const FooterMenuCol = ({ title, items }) => {
    return (
        <FooterMenuColWrapper>
            <FooterMenuColTitle>{title}</FooterMenuColTitle>
            {items.map((item, i) => (
                <FooterMenuColItem>
                    {item?.icon ? <Image src={item.icon.src} width={13} alt='Icon' height={13} /> : ''}{' '}
                    <Link href={item.link} key={i}>
                        <a style={{ color: 'white' }}>{item.text}</a>
                    </Link>
                </FooterMenuColItem>
            ))}
        </FooterMenuColWrapper>
    )
}

export default Footer
