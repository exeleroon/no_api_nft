/** @format */

import React, { useEffect, useRef } from 'react'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Form, message, Modal, Select, Tooltip, Upload } from 'antd'
// import { FileImageOutlined, SoundOutlined } from '@ant-design/icons'
import { PageTitle } from 'uikit/PageTitle/styled'
import {
    StyledButton,
    StyledCheckbox,
    StyledInput,
    StyledLabel,
    StyledRangePicker,
    StyledSelect,
    StyledSublabel,
    StyledTextArea
} from 'uikit/FormComponents/styled'
import { useState } from 'react'
import { ethers } from 'ethers'
// import { PreviewAudioWrapper } from './styled'
// import testAudio from '../../../public/assets/audio/popstar.mp3'
// // import PreviewAudio from 'components/PreviewAudio/PreviewAudio'
import { useMoralis } from 'react-moralis'
import NftMusic721 from '../../contracts/NftMusic721.json'
import NftMusicMarketplace from '../../contracts/NftMusicMarketplace.json'
import { nftAPI } from 'api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { DollarCircleOutlined, FileImageOutlined, PlusOutlined, SoundOutlined } from '@ant-design/icons'
import WarningBlock from 'uikit/WarningBlock/WarningBlock'
import { getAvailableTokens } from 'redux/nft-reducer'
import Image from 'next/image'
import { Flex } from 'uikit/Flex/Flex'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import { StyledIcon } from './styled'

const { Option } = Select

const getBase64 = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

const CreateNFTPage = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const userDataLoading = useSelector(state => state.auth.userDataLoading)
    const walletFromAccount = useSelector(state => state.auth.wallet)
    const availableTokensLoading = useSelector(state => state.nft.availableTokensLoading)
    const availableTokens = useSelector(state => state.nft.availableTokens)
    const maticCurrency = useSelector(state => state.nft.maticCurrency)

    const router = useRouter()
    const dispatch = useDispatch()

    const formRef = useRef(null)
    const [imageFileList, setImageFileList] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)
    const [previewVisible, setPreviewVisible] = useState(null)
    const [previewTitle, setPreviewTitle] = useState(null)

    const [audioFile, setAudioFile] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const [datepickerStart, setDatepickerStart] = useState(null)
    const [datepickerEnd, setDatepickerEnd] = useState(null)
    const [dollarPriceValue, setDollarPriceValue] = useState()
    const [isFormDataLoading, setIsFormDataLoading] = useState(false)
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, web3, account, authenticate } = useMoralis()
    const [checked, setChecked] = useState(false)

    const onCheckboxChange = e => {
        setChecked(e.target.checked)
    }

    const validation = (rule, value, callback) => {
        if (checked) {
            return callback()
        }
        return callback('Пожалуйста, подтвердите согласие с нашими правилами!')
    }

    const nftMarketPlaceAddress = process.env.nftMarketPlaceAddress
    const nftContractAddress = process.env.nftContractAddress

    useEffect(() => {
        // dispatch(getAvailableTokens())
    }, [])

    useEffect(() => {
        availableTokens && formRef.current.setFieldsValue({ token: availableTokens[0].symbols })
    }, [availableTokens])

    // useEffect(() => {
    //     !isAuth && !userDataLoading && router.push('/')
    // }, [isAuth, userDataLoading])

    // useEffect(() => {

    // }, [isWeb3Enabled])

    const onConnectWalletClick = () => {
        // enableWeb3()
        authenticate({ signingMessage: 'Пожалуйста, подтвердите подключение кошелька к nft-music.co. Это подтверждение не создаст транзакцию.' })
    }

    const createNFT = async ({ id, ipfs_url: ipfsURL, dateStart, dateEnd, nftPrice }) => {
        const signer = web3.getSigner()
        const nftContract = new ethers.Contract(nftContractAddress, NftMusic721.abi, signer)
        let txn = await nftContract.mintNft(ipfsURL, id)
        let tx = await txn.wait()

        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()
        const price = ethers.utils.parseEther(nftPrice.toString())

        const marketContract = new ethers.Contract(nftMarketPlaceAddress, NftMusicMarketplace.abi, signer)
        txn = await marketContract.createNFT(nftContractAddress, tokenId, price, dateStart, dateEnd)
        tx = await txn.wait()

        id && router.push(`/kypit-nft/${id}`)
    }

    const onFinish = async values => {
        if (!isWeb3Enabled) {
            message.error('Для создания NFT необходимо подключить кошелек!')
            return
        }

        setIsFormDataLoading(true)

        const dateStart = Math.floor(new Date(datepickerStart).getTime() / 1000)
        const dateEnd = Math.floor(new Date(datepickerEnd).getTime() / 1000)
        const nftPrice = values.price

        const formData = new FormData()
        formData.append('audio', values.audio[0].originFileObj)
        formData.append('image', values.image[0].originFileObj)
        formData.append('artist', values.artist)
        formData.append('name', values.name)
        formData.append('price', values.price)
        formData.append('wallet', account)
        formData.append('description', values.description)
        formData.append('dateStart', dateStart)
        formData.append('dateEnd', dateEnd)

        try {
            const NFTDetails = await nftAPI.sendNFTDetails(formData)
            await createNFT({ ...NFTDetails.data, dateStart, dateEnd, nftPrice })

            message.success('Поздравляем! Вы успешно создали свой NFT и выставили его на продажу!')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            setTimeout(() => {
                setIsFormDataLoading(false)
            }, 100)
        }
    }

    const onFinishFailed = () => {
        message.error('Заполните все обязательный поля!')
    }

    const onAudioInputChange = e => {
        setAudioFile(e.target.files[0])
    }

    const onImageInputChange = e => {
        setImageFile(e.target.files[0])
    }

    const onRangePickerChange = value => {
        setDatepickerStart(value[0])
        setDatepickerEnd(value[1])
    }

    const normFile = e => {
        if (e.fileList.length > 1) {
            e.fileList.shift()
        }
        if (Array.isArray(e)) {
            return e
        }
        return e && e.fileList
    }

    const handleImagePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
        }

        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }

    const handleImageChange = e => {
        console.log(e)
        setImageFileList(e.fileList)
        formRef.current.setFieldsValue({ image: e.fileList })
    }

    const handleImagePreviewCancel = () => setPreviewVisible(false)

    const [form] = Form.useForm()

    //TODO: refactor entire file

    return (
        <>
            <DefaultSection>
                <DefaultContainer maxWidth={'780'}>
                    <PageTitle>Создайте свой собственный NFT</PageTitle>
                    <Form name='create_nft' onFinish={onFinish} form={form} onFinishFailed={onFinishFailed} ref={formRef}>
                        {!walletFromAccount && (
                            <WarningBlock>
                                У вас не подключен кошелек. Пока вы не подключите кошелек, вы не сможете покупать и выставлять на продажу NFT
                            </WarningBlock>
                        )}

                        {!isWeb3Enabled && (
                            <WarningBlock>
                                Чтобы создать NFT, вам нужно войти с помощью вашего кошелька
                                <br />
                                <StyledButton type='primary' style={{ marginTop: '10px' }} onClick={onConnectWalletClick}>
                                    Войти
                                </StyledButton>
                            </WarningBlock>
                        )}

                        {/* <StyledLabel>Загрузите трек</StyledLabel>

                        <input type='file' name='audio' onChange={onAudioInputChange} />

                        <StyledLabel>Изображение для превью</StyledLabel>
                        <StyledSublabel>Загрузите изображение вашего альбома или сингла</StyledSublabel>

                        <input type='file' name='image' onChange={onImageInputChange} /> */}
                        <StyledLabel>Загрузите трек</StyledLabel>
                        <Form.Item>
                            <Form.Item
                                name='audio'
                                valuePropName='fileList'
                                getValueFromEvent={normFile}
                                noStyle
                                multiple={false}
                                rules={[{ required: true, message: 'Пожалуйста, загрузите трек!' }]}
                                hasFeedback
                            >
                                <Upload.Dragger
                                    beforeUpload={file => {
                                        const filetypes = [
                                            'audio/mpeg',
                                            'audio/mp4',
                                            'audio/aac',
                                            'audio/aacp',
                                            'audio/ogg',
                                            'audio/webm',
                                            'audio/wav',
                                            'audio/x-caf',
                                            'audio/flac'
                                        ]
                                        const isAudio = filetypes.includes(file.type)
                                        if (!isAudio) {
                                            message.error(`${file.name} не аудио файл`)
                                        }
                                        const isLt2M = file.size / 1024 / 1024 < 30
                                        if (!isLt2M) {
                                            message.error('Аудио файл должен быть меньше чем 30 мегабайт!')
                                            return false
                                        }
                                        return isAudio || Upload.LIST_IGNORE
                                    }}
                                    previewFile={file => {
                                        console.log('Your upload file:', file)
                                    }}
                                    style={{ borderRadius: '10px' }}
                                >
                                    <p className='ant-upload-drag-icon'>
                                        <SoundOutlined />
                                    </p>
                                    <p className='ant-upload-text'>Кликнете или перетащите свой трек сюда</p>
                                    <p className='ant-upload-hint'>Только один файл за раз :)</p>
                                </Upload.Dragger>
                            </Form.Item>
                        </Form.Item>

                        {/* <StyledLabel>Загрузите трек</StyledLabel> */}
                        {/* <StyledSublabel>Загрузите изображение вашего альбома или сингла</StyledSublabel>
                        <Form.Item>
                            <Form.Item
                                name='audio'
                                noStyle
                                rules={[{ required: true, message: 'Пожалуйста, загрузите превью!' }]}
                                hasFeedback
                            >
                                <Upload
                                    // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                    listType='picture'
                                    fileList={audioFileList}
                                    onPreview={handleImagePreview}
                                    onChange={handleImageChange}
                                >
                                    {imageFileList <= 1 && <div>
                                        <PlusOutlined />
                                        <div style={{ marginTop: 8 }}>Загрузить</div>
                                    </div>}
                                </Upload>
                                <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleImagePreviewCancel}>
                                    <img alt='example' style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </Form.Item>
                        </Form.Item> */}

                        <StyledLabel>Изображение для превью</StyledLabel>
                        <StyledSublabel>Загрузите изображение вашего трека</StyledSublabel>
                        <Form.Item>
                            <Form.Item name='image' noStyle rules={[{ required: true, message: 'Пожалуйста, загрузите превью!' }]} hasFeedback>
                                <Upload
                                    // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                    listType='picture-card'
                                    fileList={imageFileList}
                                    onPreview={handleImagePreview}
                                    onChange={handleImageChange}
                                >
                                    {imageFileList <= 1 && (
                                        <div>
                                            <PlusOutlined />
                                            <div style={{ marginTop: 8 }}>Загрузить</div>
                                        </div>
                                    )}
                                </Upload>
                                <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleImagePreviewCancel}>
                                    <img alt='example' style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </Form.Item>
                        </Form.Item>

                        {/* <PreviewAudioWrapper>
                        <PreviewAudio counter={0} audioSrc={testAudio} />
                    </PreviewAudioWrapper> */}

                        {/* <Form.Item>
                            <Form.Item
                                name='image'
                                valuePropName='fileList'
                                getValueFromEvent={normFile}
                                noStyle
                                rules={[{ required: true, message: 'Пожалуйста, загрузите превью!' }]}
                                hasFeedback
                            >
                                <Upload.Dragger
                                    action='https://file.re/_upload-server.php'
                                    beforeUpload={file => {
                                        const filetypes = [
                                            'image/gif',
                                            'image/jpeg',
                                            'image/svg+xml',
                                            'image/tiff',
                                            'image/png',
                                            'image/webp',
                                            'image/avif'
                                        ]
                                        const isImage = filetypes.includes(file.type)
                                        if (!isImage) {
                                            message.error(`${file.name} не изображение`)
                                        }
                                        return isImage || Upload.LIST_IGNORE
                                    }}
                                    style={{ borderRadius: '10px' }}
                                >
                                    <p className='ant-upload-drag-icon'>
                                        <FileImageOutlined />
                                    </p>
                                    <p className='ant-upload-text'>Кликнете или перетащите изображение сюда</p>
                                </Upload.Dragger>
                            </Form.Item>
                        </Form.Item> */}

                        {/* <StyledLabel>Артист</StyledLabel>
                        <StyledSublabel>Временное поле для создания НФТ, потом уберем</StyledSublabel>
                        <Form.Item name='artist' value='Дорофеева' rules={[{ required: true, message: 'Пожалуйста, введите название!' }]} hasFeedback>
                            <StyledInput placeholder='Имя артиста' size='large' />
                        </Form.Item> */}

                        <StyledLabel>Название NFT</StyledLabel>
                        <StyledSublabel>Название трека для показа по всему маркетплейсу</StyledSublabel>
                        <Form.Item name='name' rules={[{ required: true, message: 'Пожалуйста, введите название!' }]} hasFeedback>
                            <StyledInput placeholder='Название трека' size='large' />
                        </Form.Item>

                        <StyledLabel>Дата</StyledLabel>
                        <StyledSublabel>Выберите начало и конец продажи своего аудио</StyledSublabel>
                        <StyledRangePicker
                            onChange={onRangePickerChange}
                            size={'large'}
                            placeholder={['Дата начала', 'Дата конца']}
                            style={{ marginBottom: '20px' }}
                        />

                        <StyledLabel>Токен</StyledLabel>
                        <StyledSublabel>Выберете токен в котором указываете цену</StyledSublabel>
                        <Form.Item name='token' rules={[{ required: true, message: 'Пожалуйста, выбериье токен!' }]} hasFeedback>
                            <StyledSelect loading={availableTokensLoading}>
                                {availableTokens &&
                                    availableTokens.map(e => (
                                        <Option value={e.symbols}>
                                            <Image src={e.logo} height={26} width={26} alt='Token logo' style={{ marginRight: '5px' }} />
                                            {e.symbols}
                                        </Option>
                                    ))}
                            </StyledSelect>
                        </Form.Item>

                        <StyledLabel>Цена</StyledLabel>
                        <StyledSublabel>Указывайте цену в криптовалюте, система автоматически подтянет цену в долларах для показа</StyledSublabel>
                        <Flex container='flex'>
                            <Form.Item
                                name='price'
                                style={{ marginRight: '30px' }}
                                rules={[{ required: true, message: 'Пожалуйста, введите цену!' }]}
                                onChange={() => setDollarPriceValue(form.getFieldsValue().price * maticCurrency)}
                                hasFeedback
                            >
                                <StyledInput placeholder='Цена' size='large' />
                            </Form.Item>
                            {/* <Tooltip title={'Цена в долларах'} overlayInnerStyle={tooltipStyle}>
                                <StyledIcon>
                            <DollarCircleOutlined/>
                            </StyledIcon>
                            </Tooltip> */}
                            <Form.Item>
                                <StyledInput
                                    placeholder='Цена'
                                    disabled
                                    prefix={<DollarCircleOutlined style={{ fontSize: '14px' }} />}
                                    value={dollarPriceValue}
                                    style={{ fontSize: '16px' }}
                                />
                            </Form.Item>
                        </Flex>
                        
                        <StyledLabel>Описание</StyledLabel>
                        <StyledSublabel>Придумайте или используйте уже существующее название вашего трека</StyledSublabel>
                        <Form.Item name='description' hasFeedback>
                            <StyledTextArea placeholder='Описание' size='large' rows={4} />
                        </Form.Item>

                        <Form.Item name='accept_rulles' valuePropName='checked' rules={[{ validator: validation }]}>
                            <StyledCheckbox checked={checked} onChange={onCheckboxChange}>
                                Соглашаюсь с <Link href='/privacy-policy'>политикой конфиденциальности</Link> и{' '}
                                <Link href='/terms-and-conditions'>условиями использования</Link>
                            </StyledCheckbox>
                        </Form.Item>

                        {/* <input defaultValue="test" {...register("example")} />
                    <input {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>} */}

                        <StyledButton type='primary' htmlType='submit' disabled={!isWeb3Enabled} loading={isFormDataLoading}>
                            Создать
                        </StyledButton>
                    </Form>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default CreateNFTPage
