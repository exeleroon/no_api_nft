/** @format */

import React from 'react'
import { Row, Col, Tooltip, Spin, message } from 'antd'
import {
    ImgContainer,
    StyledCardLink,
    StyledImgCard,
    InfoContainer,
    LeftPricePart,
    AboveTextLeft,
    UnderTextLeft,
    PriceInfo,
    RightPricePart,
    CurrentPrice,
    PriceWord,
    IconContainer,
    PriceWithIcon,
    PriceTxt,
    LastPriceCont,
    LastPriceWithIcon,
    LastIconCont,
    CardFooter,
    IconHoverBtn,
    BuyBtn,
    LikesCount,
    LikesWrapper,
    IconCont,
    PreviewAudioWrapper,
    StyledAudioPlayer
} from './styled'
import { EyeOutlined, LoadingOutlined } from '@ant-design/icons'
// import PreviewAudio from 'components/PreviewAudio/PreviewAudio'
import testAudio from '../../../public/assets/audio/popstar.mp3'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import ethGreyIcon from '../../../public/assets/images/ethGrey.svg'
import ethIcon from '../../../public/assets/images/eth.svg'
import Image from 'next/image'
import Link from 'next/link'
import Verified from '../../../public/assets/images/corret4.svg'
import Matic from '../../../public/assets/images/matic-logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addWatchList, removeWatchList } from 'redux/auth-reducer'
import { getAllItemsByCreator, getAllItemsByOwner, getHomepageItemsData } from 'redux/nft-reducer'
import 'react-h5-audio-player/lib/styles.css';

const CardItem = ({ isLarge, el, itemsLoading, tab, homepage }) => {
    const wallet = useSelector(state => state.auth.wallet)
    const isAuth = useSelector(state => state.auth.isAuth)
    const maticCurrency = useSelector(state => state.nft.maticCurrency)

    const dispatch = useDispatch()

    const addOrRemoveListWatch = () => {
        if (isAuth) {
            if (el.isFollowing) {
                dispatch(removeWatchList(el.id))
            } else {
                dispatch(addWatchList(el.id))
            }
            if (tab === '0') {
                dispatch(getAllItemsByCreator({ wallet: wallet }))
            }
            if (tab === '1') {
                dispatch(getAllItemsByOwner({ wallet: wallet }))
            }
            if (homepage) {
                dispatch(getHomepageItemsData())
            }
        } else {
            message.error('Данная возможность разрешена только для авторизованных пользователей')
        }
    }

    return (
        <>
            {el && (
                <StyledCardLink isLarge={isLarge}>
                    <ImgContainer>
                        <StyledImgCard>
                            <Link href={`/kypit-nft/${el.id}`}>
                                <a>
                                    <Image src={el.image} width={600} alt={`${el.artist} - ${el.name}`} height={420} />
                                </a>
                            </Link>
                        </StyledImgCard>
                    </ImgContainer>
                    {/* <audio controls src={el.audio} controlsList='nodownload'>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio> */}
                    <StyledAudioPlayer
                        autoPlay={false}
                        src={testAudio}
                        onPlay={e => console.log("onPlay")}
                        
                    />
                    {/* <Suspense fallback={`loading`}>
                    <PreviewAudioWrapper>
                        <PreviewAudio audioSrc={el.audio} />
                    </PreviewAudioWrapper>
                </Suspense> */}
                    <InfoContainer>
                        <PriceInfo>
                            <LeftPricePart>
                                <Link href={`/kypit-nft/${el.id}`} passHref>
                                    <UnderTextLeft isLarge={isLarge}>
                                        <div>{el.name}</div>
                                    </UnderTextLeft>
                                </Link>
                                <Link href={`/artist/${el.creator?.username}`} passHref>
                                    <AboveTextLeft isLarge={isLarge}>
                                        <span>{el.artist}&nbsp;</span>
                                        {el?.creator?.verified && (
                                            <Tooltip
                                                placement='top'
                                                color={'#000'}
                                                overlayInnerStyle={tooltipStyle}
                                                title='Подтвержденный пользователь'
                                            >
                                                <span style={{ minWidth: '14px', height: '18px' }}>
                                                    <Image width={14} height={14} alt={'verified'} src={Verified.src} />
                                                </span>
                                            </Tooltip>
                                        )}
                                    </AboveTextLeft>
                                </Link>
                            </LeftPricePart>
                            <RightPricePart>
                                <CurrentPrice>
                                    <PriceWord isLarge={isLarge}>Цена</PriceWord>
                                    <PriceWithIcon>
                                        <IconContainer isLarge={isLarge}>
                                            <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Matic'>
                                                <Image width={18} height={18} alt={'Matic logo'} src={Matic.src} />
                                            </Tooltip>
                                        </IconContainer>
                                        <PriceTxt>
                                            <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title={el.price}>
                                                <h2>{el.price}</h2>
                                            </Tooltip>
                                        </PriceTxt>
                                    </PriceWithIcon>
                                </CurrentPrice>
                                {maticCurrency && (
                                    <LastPriceCont isLarge={isLarge}>
                                        <span>${el.price * maticCurrency}</span>
                                        {/* <LastPriceWithIcon>
                                    <LastIconCont>
                                        <Tooltip
                                            placement='top'
                                            color={'#000'}
                                            overlayInnerStyle={tooltipStyle}
                                            title='ETH on Polygon'
                                        >
                                            <Image width={24} height={24} src={ethIcon} />
                                        </Tooltip>
                                    </LastIconCont>
                                    <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title={el.lastPrice}>
                                        <h2>{el.lastPrice}</h2>
                                    </Tooltip>
                                </LastPriceWithIcon> */}
                                    </LastPriceCont>
                                )}
                            </RightPricePart>
                        </PriceInfo>
                        <CardFooter>
                            <IconHoverBtn>
                                {/* <IconCont className='IconBuy'>
                                <Image width={12} height={12} src={ethGreyIcon} />
                            </IconCont> */}
                                <Link href={`/kypit-nft/${el.id}`} passHref>
                                    <BuyBtn isLarge={isLarge}>Купить</BuyBtn>
                                </Link>
                            </IconHoverBtn>
                            <LikesWrapper isLarge={isLarge} isViewed={el.isFollowing}>
                                <LikesCount>{el.watching}</LikesCount>
                                <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Следить'>
                                    <EyeOutlined
                                        onClick={() => {
                                            addOrRemoveListWatch()
                                        }}
                                    />
                                </Tooltip>
                            </LikesWrapper>
                        </CardFooter>
                    </InfoContainer>{' '}
                </StyledCardLink>
            )}
        </>
    )
}

export default CardItem
