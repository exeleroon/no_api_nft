/** @format */

import { CopyOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Form, Upload, Modal, Row, Col, Input, Tooltip, Button, Dropdown } from 'antd'
import DropdownMenuContainer from 'components/DropDownMenu/DropdownMenuContainer'
import { DropdownMenuWrapper } from 'components/DropDownMenu/styled'
import { StyledMenuItem } from 'components/Header/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, login, loginViaWallet, postInstaName, setWalletFormLoading, updateMyProfile, updateMyWallet } from 'redux/auth-reducer'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Flex } from 'uikit/Flex/Flex'
import {
    ButtonNearInput,
    FormRow,
    StyledButton,
    StyledCheckbox,
    StyledInput,
    StyledLabel,
    StyledPasswordInput,
    StyledSublabel,
    StyledTextArea
} from 'uikit/FormComponents/styled'
import { PageTitle } from 'uikit/PageTitle/styled'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import WarningBlock from 'uikit/WarningBlock/WarningBlock'
import { DropItemsSettings, StyledSettingButton } from './styled'

const MyProfileSettingsPage = () => {
    const dispatch = useDispatch()
    const allUserData = useSelector(state => state.auth)
    const { isAuth, userDataLoading, walletFormLoading } = allUserData
    const isDataFetching = useSelector(state => state.auth.loginFormLoading)
    const router = useRouter()
    const [copyWalletAdressTooltip, setCopyWalletAdressTooltip] = useState('Копировать')
    const { authenticate, isAuthenticated, logout, user } = useMoralis()

    const formRef = useRef(null)
    const [imageFileList, setImageFileList] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)
    const [previewVisible, setPreviewVisible] = useState(null)
    const [previewTitle, setPreviewTitle] = useState(null)

    const [backgroundFileList, setBackgroundFileList] = useState(null)
    const [backgroundPreviewImage, setBackgroundPreviewImage] = useState(null)
    const [previewBackgroundVisible, setPreviewBackgroundVisible] = useState(null)
    const [previewBackgroundTitle, setPreviewBackgroundTitle] = useState(null)

    // useEffect(() => {
    //     !isAuth && !userDataLoading && router.push('/login')
    // }, [isAuth, userDataLoading])

    useEffect(() => {
        formRef.current.setFieldsValue({
            username: allUserData.username,
            email: allUserData.email,
            artist: allUserData.artist ? allUserData.artist : '',
            description: allUserData.description ? allUserData.description : '',
            wallet: allUserData.wallet ? allUserData.wallet : ''
        })

        if (allUserData.avatar !== null) {
            setImageFileList([
                {
                    uid: '-1',
                    status: 'done',
                    url: allUserData.avatar
                }
            ])
        }

        if (allUserData.background !== null) {
            setBackgroundFileList([
                {
                    uid: '-1',
                    status: 'done',
                    url: allUserData.background
                }
            ])
        }
    }, [allUserData])

    useEffect(() => {
        // dispatch(getProfile())
    }, [])

    const onFinish = async values => {
        const formData = new FormData()
        if (values.avatar) {
            if (values.avatar[0]?.originFileObj) {
                formData.append('avatar', values.avatar[0].originFileObj)
            }
        }
        if (values.background) {
            if (values.background[0]?.originFileObj) {
                formData.append('background', values.background[0].originFileObj)
            }
        }

        formData.append('username', values.username)
        formData.append('email', values.email)
        formData.append('artist', values.artist)
        formData.append('description', values.description)
        dispatch(updateMyProfile(formData))
    }

    const onFinishFailed = () => {
        message.error('Заполните все обязательные поля!')
    }
    const [form] = Form.useForm();

    const connectWalletOnClick = async () => {
        // // signInWithWallet
        // dispatch(setWalletFormLoading(true));
        // await authenticate({ signingMessage: 'NFT Music wallet connection' })

        // if (isAuthenticated) {
        //     if (user.attributes.ethAddress) {
        //         dispatch(loginViaWallet({wallet: user.attributes.ethAddress, signature: user?.get('authData').moralisEth.signature}))
        //     } else {
        //         message.error('Не удалось получить номер кошелька, попробуйте еще раз')
        //     }
        // } else {
        //     message.error('Не удалось войти используя кошелек')
        // }
        // dispatch(setWalletFormLoading(false));

        if (user?.get('authData').moralisEth.signature) {
            await authenticate({ signingMessage: 'NFT Music wallet connection' })
            if (user?.get('ethAddress')) {
                dispatch(updateMyWallet(user?.get('authData').moralisEth.id))
            } else {
                message.error('Не удалось получить адрес кошелька, попробуйте еще раз!')
            }
        } else {
            message.error('Ошибка при подключения кошелька!')
        }
    }

    const handleImagePreview = async file => {
        if (!file.url && !file.preview) {
            // file.preview = await getBase64(file.originFileObj)
        }

        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }

    const handleImageChange = e => {
        console.log(e)
        setImageFileList(e.fileList)
        formRef.current.setFieldsValue({ avatar: e.fileList })
    }

    const handleImagePreviewCancel = () => setPreviewVisible(false)

    const handleBackgroundPreview = async file => {
        if (!file.url && !file.preview) {
            // file.preview = await getBase64(file.originFileObj)
        }

        setBackgroundPreviewImage(file.url || file.preview)
        setPreviewBackgroundVisible(true)
        setPreviewBackgroundTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }

    const handleBackgroundChange = e => {
        console.log(e)
        setBackgroundFileList(e.fileList)
        formRef.current.setFieldsValue({ background: e.fileList })
    }

    const handleBackgroundPreviewCancel = () => setPreviewBackgroundVisible(false)

    const copyWalletAdress = () => {
        navigator.clipboard.writeText(allUserData.wallet)
        setCopyWalletAdressTooltip('Скопировано!')
        setTimeout(() => {
            setCopyWalletAdressTooltip('Копировать')
        }, 1000)
    }

    const hasFollowed = async values => {
        form.resetFields();
        dispatch(postInstaName(values))
    }

    const MenuItems = () => {
        return (
            <DropdownMenuWrapper>
                <DropItemsSettings>
                    Для того, чтобы мы могли верифицировать ваш аккаунт на нашей платформе - нужно всего лишь подписаться на наш аккаунт в{' '}
                    <a target="_blank" href="https://www.instagram.com/nft_music.co/">Instagram </a> с вашего основного профиля.
                    <Form form={form} name='instagramUsername' onFinish={hasFollowed} onFinishFailed={onFinishFailed}>
                    <Flex container='flex'>
                            <Form.Item
                                name={'instagramUsername'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, введите ваш инстаграм логин!'
                                    }
                                ]}
                            >
                                <StyledInput isButtonNearInput={true} placeholder='Введите ваш инстаграм логин' size='large' />
                            </Form.Item>
                            <StyledSettingButton type='primary' htmlType='submit' loading={isDataFetching}>
                                Я подписался
                            </StyledSettingButton>
                            </Flex>
                    </Form>
                </DropItemsSettings>
            </DropdownMenuWrapper>
        )
    }

    return (
        <>
            <DefaultSection>
                <DefaultContainer maxWidth={'630'}>
                    <PageTitle>Настройки профиля</PageTitle>

                    {!allUserData?.wallet && (
                        <WarningBlock>
                            У вас не подключен кошелек. Пока вы не подключите кошелек, вы не сможете покупать и выставлять на продажу NFT
                        </WarningBlock>
                    )}

                    {!allUserData?.verify && (
                        <WarningBlock>
                            Вы не верифицированы. Для верификации используйте&nbsp;
                            <Dropdown overlay={<MenuItems />} trigger={['click']}>
                                <span style={{ cursor: 'pointer', color:'#1890ff' }} className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                                    инструкцию
                                </span>
                            </Dropdown>
                        </WarningBlock>
                    )}

                    <Form name='user_seettings' onFinish={onFinish} onFinishFailed={onFinishFailed} ref={formRef}>
                        <Row>
                            <Col sm={24} md={12}>
                                <StyledLabel>Аватар</StyledLabel>
                                <Form.Item>
                                    <Form.Item name='avatar' noStyle>
                                        <Upload
                                            listType='picture-card'
                                            fileList={imageFileList}
                                            onPreview={handleImagePreview}
                                            onChange={handleImageChange}
                                        >
                                            {imageFileList === null || imageFileList.length === 0 ? (
                                                <div>
                                                    <PlusOutlined />
                                                    <div style={{ marginTop: 8 }}>Загрузить</div>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </Upload>
                                        <Modal visible={previewVisible} title={'Аватар'} footer={null} onCancel={handleImagePreviewCancel}>
                                            <img alt='example' style={{ width: '100%' }} src={previewImage} />
                                        </Modal>
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={12} style={{ width: '100%' }}>
                                <StyledLabel>Фон профиля</StyledLabel>
                                <Form.Item>
                                    <Form.Item name='background' noStyle>
                                        <Upload
                                            listType='picture-card'
                                            fileList={backgroundFileList}
                                            onPreview={handleBackgroundPreview}
                                            onChange={handleBackgroundChange}
                                        >
                                            {backgroundFileList === null || backgroundFileList.length === 0 ? (
                                                <div>
                                                    <PlusOutlined />
                                                    <div style={{ marginTop: 8 }}>Загрузить</div>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </Upload>
                                        <Modal
                                            visible={previewBackgroundVisible}
                                            title={'Фон профиля'}
                                            footer={null}
                                            onCancel={handleBackgroundPreviewCancel}
                                        >
                                            <img alt='example' style={{ width: '100%' }} src={backgroundPreviewImage} />
                                        </Modal>
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                        </Row>

                        <StyledLabel>Имя аккаунта</StyledLabel>
                        <StyledSublabel>
                            Это символы латиницей, которые вы вводите при логине и которые будут отображаться для всех в случае, если вы не хотите
                            ничего указывать в поле "Публичное имя"
                        </StyledSublabel>
                        <Form.Item name='username' rules={[{ required: true, message: 'Пожалуйста, введите имя аккаунта!' }]} hasFeedback>
                            <StyledInput placeholder='Имя аккаунта' size='large' />
                        </Form.Item>

                        <StyledLabel>Email</StyledLabel>
                        <StyledSublabel>Введите в это поле Email, с его помощью мы сможем связаться с вами</StyledSublabel>
                        <Form.Item name='email' rules={[{ required: true, message: 'Пожалуйста, введите Email!' }]} hasFeedback>
                            <StyledInput placeholder='Email' size='large' />
                        </Form.Item>

                        <StyledLabel>Публичное имя</StyledLabel>
                        <StyledSublabel>
                            Введите в это поле ваше имя или сценический псевдоним, которое потом будет отображаться рядом с названием трека
                        </StyledSublabel>
                        <Form.Item name='artist'>
                            <StyledInput placeholder='Публичное имя' size='large' />
                        </Form.Item>

                        <StyledLabel>Описание</StyledLabel>
                        <StyledSublabel>Описание, которое будет отображаться в вашем профиле</StyledSublabel>
                        <Form.Item name='description'>
                            <StyledTextArea placeholder='Описание' size='large' rows={4} />
                        </Form.Item>

                        {allUserData.wallet && (
                            <>
                                <StyledLabel>Кошелек</StyledLabel>
                                <StyledSublabel>Это номер вашего кошелька, который используется в транзакциях</StyledSublabel>
                                <Flex container='flex'>
                                    <Form.Item name='wallet' style={{ marginBottom: '0', width: '100%' }}>
                                        <StyledInput isButtonNearInput={true} placeholder='Номер кошелька' size='large' disabled />
                                    </Form.Item>
                                    <Tooltip title={copyWalletAdressTooltip} overlayInnerStyle={tooltipStyle}>
                                        <ButtonNearInput icon={<CopyOutlined />} onClick={copyWalletAdress} />
                                    </Tooltip>
                                </Flex>
                            </>
                        )}

                        <Flex container='flex' alignItems='flex-end' justifyContent='space-between' margin='30px 0 0'>
                            <StyledButton type='primary' htmlType='submit' loading={isDataFetching}>
                                Обновить
                            </StyledButton>
                            <Link href={'/change-password'}>
                                <a>
                                    <StyledButton type='primary' loading={isDataFetching}>
                                        Изменить пароль
                                    </StyledButton>
                                </a>
                            </Link>
                            {!allUserData?.wallet && (
                                <StyledButton htmlType='button' loading={isDataFetching} onClick={connectWalletOnClick}>
                                    Подключить кошелек
                                </StyledButton>
                            )}
                        </Flex>
                    </Form>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default MyProfileSettingsPage
