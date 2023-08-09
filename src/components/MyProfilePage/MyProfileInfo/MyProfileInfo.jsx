/** @format */

import { React, useState, useRef, useEffect } from 'react'
import {
    AccImageDiv,
    AccWrapper,
    ImageContainer,
    JoinData,
    ProfileImageSheet,
    SubTitleIcon,
    UnStyledBtn,
    UserSubtitle,
    UserTitle,
    UserTitleSecond,
    UserTitleCont,
    Name,
    LoadingContainer,
    StyledIcon
} from './styled'
import imageExample from '../../../../public/assets/images/blueEx.png'
import ethIcon from '../../../../public/assets/images/ethGrey.svg'
import { message, Tooltip } from 'antd'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import Verified from '../../../../public/assets/images/corret4.svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { usersAPI } from 'api/api'
import { changeAvatar } from 'redux/auth-reducer'
import Link from 'next/link'

const MyProfileInfo = () => {
    const username = useSelector(state => state.auth.username)
    const avatarImage = useSelector(state => state.auth.avatar)
    const verified = useSelector(state => state.auth.verified)
    const wallet = useSelector(state => state.auth.wallet)
    const description = useSelector(state => state.auth.description)
    const artist = useSelector(state => state.auth.artist)

    const hiddenAvatarInput = useRef(null)
    const dispatch = useDispatch()

    const [avatarLoading, setAvatarLoading] = useState(false)

    // useEffect(() => {
    //     setAvatarImage(initialAvatarImage)
    // }, [])

    const copyLink = () => {
        navigator.clipboard.writeText(wallet)
    }

    const [copiedText, setCopied] = useState('Копировать')

    const copyTitle = () => {
        setCopied('Скопировано!')

        setTimeout(() => {
            setCopied('Копировать')
        }, 1000)
    }

    const avatarUploaderOnCLick = event => {
        hiddenAvatarInput.current.click()
    }

    const avatarChange = async event => {
        const fileUploaded = event.target.files[0]
        setAvatarLoading(true)

        const formData = new FormData()
        formData.append('avatar', fileUploaded)

        try {
            const data = await usersAPI.sendAvatarFile(formData)
            dispatch(changeAvatar(data.data.avatar))

            message.success('Аватар успешно изменен')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            setAvatarLoading(false)
        }
    }

    return (
        <AccWrapper>
            <ImageContainer>
                <ProfileImageSheet>
                    <AccImageDiv onClick={avatarUploaderOnCLick}>
                        <Image width={130} height={130} alt={artist ? artist : username} src={avatarImage ? avatarImage : imageExample.src} />
                        <div className='edit-icon-container'>
                            <EditOutlined />
                        </div>
                        {avatarLoading && (
                            <LoadingContainer>
                                <LoadingOutlined />
                            </LoadingContainer>
                        )}
                        <input type='file' ref={hiddenAvatarInput} onChange={avatarChange} style={{ display: 'none' }} />
                    </AccImageDiv>
                </ProfileImageSheet>
            </ImageContainer>
            {artist && <Name>{artist}</Name>}
            <UserTitleCont>
                {artist ? (
                    <UserTitle>
                        {username}
                        {verified && (
                            <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                <Image width={32} alt='Verified user' height={32} src={Verified.src} />
                            </Tooltip>
                        )}
                        <Link href={'/my-profile/settings'} passHref>
                            <StyledIcon>
                                <EditOutlined style={{ fontSize: '18px' }} />
                            </StyledIcon>
                        </Link>
                    </UserTitle>
                ) : (
                    <UserTitleSecond>
                        {username}
                        {verified && (
                            <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                <Image width={32} alt='Verified user' height={32} src={Verified.src} />
                            </Tooltip>
                        )}
                        <Link href={'/my-profile/settings'} passHref>
                            <StyledIcon>
                                <EditOutlined style={{ fontSize: '18px' }} />
                            </StyledIcon>
                        </Link>
                    </UserTitleSecond>
                )}
            </UserTitleCont>
            {/* <JoinData style={{fontSize:'18px'}}>{artist}</JoinData> */}
            {wallet && (
                <UserSubtitle>
                    <SubTitleIcon>
                        <Image src={ethIcon.src} alt='Token logo' width={12} height={22}></Image>
                    </SubTitleIcon>
                    <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} onClick={copyTitle} title={copiedText}>
                        <UnStyledBtn onClick={() => copyLink()}>
                            {wallet?.substr(0, 6) + '...' + wallet?.substr(wallet?.length - 4, wallet?.length)}
                        </UnStyledBtn>
                    </Tooltip>
                </UserSubtitle>
            )}
            {description && <JoinData>{description}</JoinData>}
        </AccWrapper>
    )
}

export default MyProfileInfo
