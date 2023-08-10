/** @format */

import React from 'react'
import { ItemSummary, PreviewBlock, LikesWrapper, Header, BlockchainLogo, MainImg, Likes, LikeButton, LikeNumber, PreviewMain, Img } from './styled'
import { ClockCircleOutlined, EyeFilled, EyeOutlined } from '@ant-design/icons'
import DescriptionBlock from './DescriptionBlock/DescriptionBlock'
import Image from 'next/image'
import testAudio from '../../../../public/assets/audio/popstar.mp3'
import { MobileVisible } from 'uikit/ResponsiveHelpers/styled'
import { CollectionInfo, CollectionName, HeaderRight, ImgContainer, ItemCounts, ItemName, Name, Owned, OwnedWrapper } from '../ItemMain/styled'
import Link from 'next/link'
import Verified from '../../../../public/assets/images/corret4.svg'
import { Tooltip } from 'antd'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import { useDispatch, useSelector } from 'react-redux'
import { addWatchList, removeWatchList } from 'redux/auth-reducer'
import { getNFT } from 'redux/nft-reducer'

const ItemSum = ({ data, item }) => {
    const isAuth = useSelector(state => state.auth.isAuth)

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
            // message.error('Данная возможность разрешена только для авторизованных пользователей')
        }
    }

    return (
        <>
            <ItemSummary>
                <MobileVisible style={{ flexDirection: 'column' }}>
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
                            {item.creator?.verified && (
                                <ImgContainer>
                                    <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                        <Image width={34} height={34} alt='Verified user' src={Verified.src} />
                                    </Tooltip>
                                </ImgContainer>
                            )}
                        </ItemName>
                    </HeaderRight>
                    <ItemCounts style={{ marginTop: '10px' }}>
                        <ClockCircleOutlined style={{ fontSize: '16px', color: 'rgb(138, 147, 155)', marginRight: '8px' }} />
                        Sale: {data.start_date} - {data.end_date}
                    </ItemCounts>
                </MobileVisible>
                <PreviewBlock>
                    {/* <Header>
                        <BlockchainLogo>
                            {/* <MainImg src={Logo} alt='' /> */}
                    {/* <Image src={Logo.src} alt='' width={50} height={50} /> */}
                    {/* </BlockchainLogo>
                        <Likes>
                            <LikeButton>
                                <EyeOutlined style={{ fontSize: '20px', color: 'rgb(138, 147, 155)' }} />
                                <LikeNumber>{data.like}</LikeNumber>
                            </LikeButton>
                        </Likes>
                    </Header> */}
                    <PreviewMain>
                        <Image src={item.image} width={560} height={500} alt={`${item.artist} - ${item.name}`} />
                        <audio controls src={item.audio} controlsList='nodownload'>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </PreviewMain>
                </PreviewBlock>
                <MobileVisible>
                    <ItemCounts>
                        <OwnedWrapper>
                            Owned by&nbsp;
                            <Link href={`/artist/${item.owner?.username}`} passHref>
                                <Owned>{item.owner?.artistName ? item.owner.artistName : item.owner?.username}</Owned>
                            </Link>
                            {item.owner?.verified && (
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
                            <Link href={`/artist/${item.creator?.username}`} passHref>
                                <Owned style={{ marginRight: '5px' }}>
                                    {item.creator?.artistName ? item.creator?.artistName : item.creator?.username}
                                </Owned>
                            </Link>
                            {item.creator?.verified && (
                                <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                    <Image width={24} height={24} alt='Verified user' src={Verified.src} />
                                </Tooltip>
                            )}
                        </OwnedWrapper>
                    </ItemCounts>
                </MobileVisible>
                <DescriptionBlock data={data} item={item} width={50} height={50} />
            </ItemSummary>
        </>
    )
}

export default ItemSum
