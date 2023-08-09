/** @format */

import { React, useState } from 'react'
import {
    AccImageDiv,
    AccWrapper,
    ImageContainer,
    JoinData,
    ProfileImageSheet,
    UnStyledBtn,
    UserSubtitle,
    UserTitle,
    UserTitleCont,
    UserTitleSecond,
    Name,
    SubTitleIcon,
    LikesWrapper,
    LikesCount
} from './styled'
import imageExample from '../../../../public/assets/images/imageExample.png'
import { message, Tooltip } from 'antd'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import ethIcon from '../../../../public/assets/images/ethGrey.svg'
import Verified from '../../../../public/assets/images/corret4.svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { EyeOutlined } from '@ant-design/icons'
import { follow, unfollow } from 'redux/auth-reducer'
import { getArtist } from 'redux/artist-reducer'

const AccInfo = () => {
    const item = useSelector(state => state.artist.item)
    const isAuth = useSelector(state => state.auth.isAuth)
    const username = useSelector(state => state.auth.username)

    const copyLink = () => {
        navigator.clipboard.writeText(item.wallet)
    }

    const [copiedText, setCopied] = useState('Копировать')

    const copyTitle = () => {
        setCopied('Скопировано!')

        setTimeout(() => {
            setCopied('Копировать')
        }, 1000)
    }

    const dispatch = useDispatch()

    const followUnfollow = () => {
        if (isAuth) {
            if (item.followers.length > 0 && item.followers.find(el => el === username)) {
                dispatch(unfollow(item.username))
            } else {
                dispatch(follow(item.username))
            }
            dispatch(getArtist(item.username))
        } else {
            message.error('Данная возможность разрешена только для авторизованных пользователей')
        }
    }

    return (
        <>
            {item && (
                <AccWrapper>
                    <ImageContainer>
                        <ProfileImageSheet>
                            <AccImageDiv>
                                <Image
                                    width={130}
                                    height={130}
                                    alt={item.artist ? item.artist : item.username}
                                    src={item.avatar ? item.avatar : imageExample.src}
                                />
                            </AccImageDiv>
                        </ProfileImageSheet>
                    </ImageContainer>
                    {item.artist && <Name>{item.artist}</Name>}
                    <UserTitleCont>
                        {!item.artist && (
                            <UserTitleSecond>
                                {item.username}
                                {item.verified && (
                                    <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                        <Image width={32} alt='Verified user' height={32} src={Verified.src} />
                                    </Tooltip>
                                )}
                            </UserTitleSecond>
                        )}
                    </UserTitleCont>
                    {item.wallet && (
                        <UserSubtitle>
                            <SubTitleIcon>
                                <Image src={ethIcon.src} alt='Token logo' width={12} height={22}></Image>
                            </SubTitleIcon>
                            <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} onClick={copyTitle} title={copiedText}>
                                <UnStyledBtn onClick={() => copyLink()}>
                                    {item.wallet?.substr(0, 6) + '...' + item.wallet?.substr(item.wallet?.length - 4, item.wallet?.length)}
                                </UnStyledBtn>
                            </Tooltip>
                        </UserSubtitle>
                    )}
                    {item.description && <JoinData>{item.description}</JoinData>}
                    <LikesWrapper isViewed={item.followers.length > 0 && item.followers.find(el => el === username)}>
                        <LikesCount>{item.followers.length}</LikesCount>
                        <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Следить'>
                            <EyeOutlined
                                onClick={() => {
                                    followUnfollow()
                                }}
                            />
                        </Tooltip>
                    </LikesWrapper>
                </AccWrapper>
            )}
        </>
    )
}

export default AccInfo
