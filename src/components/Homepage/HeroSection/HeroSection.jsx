/** @format */

import React from 'react'
import { Row, Col } from 'antd'
import { BackgroundOverlay, Buttons, CustomButton, MainImgWrapper, MainText, SubText, TextWrapper, Wrapper } from './styled'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import FeaturedItem from 'components/FeaturedItem/FeaturedItem'
import MainLogo from '../../../../public/assets/images/logos/main.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const HeroSection = () => {
    const item = useSelector(state => state.nft.featureItem)

    const imageSrc = '/random_nft.jpg'

    return (
        <>
            <Wrapper>
                <DefaultContainer addPadding>
                    <BackgroundOverlay image={item?.image} />
                    <Row style={{ padding: '15px 0' }}>
                        <Col sm={24} md={12}>
                            <TextWrapper>
                                <MainText>
                                    <MainImgWrapper>
                                        <Image src={MainLogo.src} alt='NFT Music logo' width={80} height={80} />
                                    </MainImgWrapper>
                                    NFT Music
                                </MainText>
                                <SubText>NFT Music - первый и крупнейший NFT marketplace</SubText>
                                <Buttons>
                                    <Link href='/create-nft' passHref>
                                        <CustomButton rel='nofollow' status={`primary`}>
                                            Создать
                                        </CustomButton>
                                    </Link>
                                    <Link href='/search' passHref>
                                        <CustomButton>Найти</CustomButton>
                                    </Link>
                                </Buttons>
                            </TextWrapper>
                        </Col>
                        <Col sm={24} md={12} style={{ width: '100%' }}>
                            <FeaturedItem />
                        </Col>
                    </Row>
                </DefaultContainer>
            </Wrapper>
        </>
    )
}

export default HeroSection
