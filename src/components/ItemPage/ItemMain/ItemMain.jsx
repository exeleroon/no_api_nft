/** @format */

import { ClockCircleOutlined, EyeFilled, EyeOutlined, TagFilled } from '@ant-design/icons'
import React from 'react'
import OffersBlock from './OffersBlock/OffersBlock'
import {
    ItemMainContainer,
    CollectionInfo,
    HeaderRight,
    CollectionName,
    Name,
    ItemName,
    ItemCounts,
    OwnedWrapper,
    Owned,
    LikesWrapper,
    OfferWrapper,
    CryptoPriceCont,
    PriceContainer,
    CryptoLogoWrapper,
    CryptoPrice,
    FiatPrice,
    OfferButton,
    Offer,
    ImgContainer
} from './styled'
import Verified from '../../../../public/assets/images/corret4.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MobileHidden } from 'uikit/ResponsiveHelpers/styled'
import { message, Tooltip } from 'antd'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import { useDispatch, useSelector } from 'react-redux'
import { addWatchList, removeWatchList } from 'redux/auth-reducer'
import { getNFT } from 'redux/nft-reducer'
import Matic from '../../../../public/assets/images/matic-logo.svg'

const ItemMain = ({ data, item }) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const maticCurrency = useSelector(state => state.nft.maticCurrency)

    const dispatch = useDispatch()

    const addOrRemoveListWatch = () => {
        if (isAuth) {
            if (item.isFollowing) {
                dispatch(removeWatchList(item.id))
            } else {
                dispatch(addWatchList(item.id))
            }
            dispatch(getNFT(item.id))
        } else {
            message.error('Данная возможность разрешена только для авторизованных пользователей')
        }
    }

    return (
        <>
            <ItemMainContainer>
                <MobileHidden>
                    <HeaderRight>
                        {/* <CollectionInfo>
                            <CollectionName>
                                <Link href={data.collection_link} passHref>
                                    <Name>{data.collection_name}</Name>
                                </Link>
                            </CollectionName>
                        </CollectionInfo> */}
                        <ItemName>
                            {item.name} - {item.artist}
                            {item.creator.verified && (
                                <ImgContainer>
                                    <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                        <Image width={34} alt='Verified user' height={34} src={Verified.src} />
                                    </Tooltip>
                                </ImgContainer>
                            )}
                        </ItemName>
                    </HeaderRight>
                    <ItemCounts>
                        <ClockCircleOutlined style={{ fontSize: '16px', color: 'rgb(138, 147, 155)', marginRight: '8px' }} />
                        Sale: {data.start_date} - {data.end_date}
                    </ItemCounts>
                    <ItemCounts>
                        <OwnedWrapper>
                            Owned by&nbsp;
                            <Link href={`/artist/${item.owner.username}`} passHref>
                                <Owned>{item.owner.artistName ? item.owner.artistName : item.owner.username}</Owned>
                            </Link>
                            {item.owner.verified && (
                                <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                    <Image width={24} height={24} alt='Verified user' src={Verified.src} />
                                </Tooltip>
                            )}
                        </OwnedWrapper>
                        <LikesWrapper isViewed={item.isFollowing}>
                            <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Следить'>
                                <EyeOutlined
                                    onClick={() => {
                                        addOrRemoveListWatch()
                                    }}
                                    style={{ fontSize: '24px', color: 'rgb(138, 147, 155)', marginRight: '8px' }}
                                />
                            </Tooltip>
                            {item.watching} Отслеживают
                        </LikesWrapper>
                        <OwnedWrapper>
                            Created by&nbsp;
                            <Link href={`/artist/${item.creator.username}`} passHref>
                                <Owned style={{ marginRight: '5px' }}>
                                    {item.creator.artistName ? item.creator.artistName : item.creator.username}
                                </Owned>
                            </Link>
                            {item.creator.verified && (
                                <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                    <Image width={24} alt='Verified user' height={24} src={Verified.src} />
                                </Tooltip>
                            )}
                        </OwnedWrapper>
                    </ItemCounts>
                </MobileHidden>
                <OfferWrapper>
                    <Offer>Цена NFT</Offer>
                    <PriceContainer>
                        <CryptoPriceCont>
                            <CryptoLogoWrapper alt='Token logo' src={Matic.src}></CryptoLogoWrapper>
                            <CryptoPrice>{item.price}</CryptoPrice>
                        </CryptoPriceCont>
                        <FiatPrice>${item.price * maticCurrency}</FiatPrice>
                    </PriceContainer>
                    <OfferButton>
                        <TagFilled style={{ fontSize: '24px', color: 'rgb(24, 104, 183)', marginRight: '10px' }} />
                        Купить
                    </OfferButton>
                </OfferWrapper>
                {/* <OffersBlock data={data} /> */}
            </ItemMainContainer>
        </>
    )
}

export default ItemMain
