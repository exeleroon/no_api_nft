/** @format */

import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { usersAPI } from 'api/api'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BannerContainer, BannerContent, BannerWrapper, LoadingContainer, StyledLoadingOutlined } from './styled'

const ProfileHeaderBanner = () => {
    const dispatch = useDispatch()
    const hiddenBackgroundImageInput = useRef(null)
    const [backgroundImage, setBackgroundImage] = useState(null)
    const [backgroundLoading, setBackgroundLoading] = useState(false)
    const initialBackgroundImage = useSelector(state => state.auth.background)

    useEffect(() => {
        setBackgroundImage(initialBackgroundImage)
    }, [])

    const backgroundUploaderOnCLick = event => {
        hiddenBackgroundImageInput.current.click()
    }

    const backgroundChange = async event => {
        const fileUploaded = event.target.files[0]
        setBackgroundLoading(true)

        const formData = new FormData()
        formData.append('background', fileUploaded)

        try {
            const data = await usersAPI.sendBackgroundFile(formData)
            setBackgroundImage(data.data.background) //TODO: replace it with DISPATCH
            console.log(data)

            message.success('Фон профиля успешно изменен')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            setBackgroundLoading(false)
        }
    }

    return (
        <BannerWrapper>
            <BannerContainer>
                <BannerContent onClick={backgroundUploaderOnCLick} style={{ backgroundImage: `url('${backgroundImage}')` }}>
                    <div className='edit-icon-container'>
                        <EditOutlined />
                    </div>
                </BannerContent>
                {backgroundLoading && (
                    <LoadingContainer>
                        <LoadingOutlined />
                    </LoadingContainer>
                )}
                <input type='file' ref={hiddenBackgroundImageInput} onChange={backgroundChange} style={{ display: 'none' }} />
            </BannerContainer>
        </BannerWrapper>
    )
}

export default ProfileHeaderBanner
