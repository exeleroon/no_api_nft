/** @format */

import { message, Form, Tabs } from 'antd'
import { authAPI } from 'api/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import Blockie from 'components/Blockie'
import { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch, useSelector } from 'react-redux'
import { loginViaWallet, setWalletFormLoading, signup } from 'redux/auth-reducer'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Flex } from 'uikit/Flex/Flex'
import { FormRow, StyledButton, StyledCheckbox, StyledInput, StyledPasswordInput } from 'uikit/FormComponents/styled'
import { PageSubtitle } from 'uikit/PageSubtitle/styled'
import { PageTitle } from 'uikit/PageTitle/styled'

const { TabPane } = Tabs

function SignupPage() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { authenticate, isAuthenticated, logout, user } = useMoralis()
    const isAuth = useSelector(state => state.auth.isAuth)
    const userDataLoading = useSelector(state => state.auth.userDataLoading)
    const isDataFetching = useSelector(state => state.auth.loginFormLoading)
    const walletFormLoading = useSelector(state => state.auth.walletFormLoading)
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

    const [form] = Form.useForm()

    useEffect(() => {
        isAuth && !userDataLoading && router.push('/my-profile')
    }, [isAuth, userDataLoading])

    const connectWalletOnClick = async () => {
        // signInWithWallet
        dispatch(setWalletFormLoading(true))
        await authenticate({ signingMessage: 'NFT Music wallet connection' })

        if (isAuthenticated) {
            if (user.attributes.ethAddress) {
                dispatch(loginViaWallet({ wallet: user.attributes.ethAddress, signature: user?.get('authData').moralisEth.signature }))
            } else {
                message.error('Не удалось получить номер кошелька, попробуйте еще раз')
            }
        } else {
            message.error('Не удалось войти используя кошелек')
        }
        dispatch(setWalletFormLoading(false))
    }

    const onFinish = async values => {
        dispatch(signup(values))
    }

    const onFinishFailed = errorInfo => {
        message.error('Пожалуйста, заполните все обязательные поля')
    }

    return (
        <>
            <DefaultSection>
                <DefaultContainer maxWidth={'600'}>
                    <PageTitle>Регистрация на NFT Music</PageTitle>
                    <PageSubtitle>У нас вы можете зарегистрироваться несколькими способами:</PageSubtitle>

                    <Tabs defaultActiveKey='1'>
                        <TabPane tab={'С помощью логина и пароля'} key='1'>
                            <Form name='login_form' form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                                <FormRow>
                                    <Form.Item
                                        name={'email'}
                                        hasFeedback
                                        rules={[
                                            { required: true, message: 'Пожалуйста, введите Email!' },
                                            { type: 'email', message: 'Пожалуйста, введите корректный Email!' }
                                        ]}
                                    >
                                        <StyledInput placeholder='Email' size='large' />
                                    </Form.Item>
                                </FormRow>
                                <FormRow>
                                    <Form.Item
                                        name='password'
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Пожалуйста, введите пароль!'
                                            },
                                            {
                                                min: 6,
                                                message: 'Пароль должен состоять как минимум из 6-ти символов'
                                            }
                                        ]}
                                    >
                                        <StyledPasswordInput placeholder='Пароль' size='large' />
                                    </Form.Item>
                                </FormRow>

                                <FormRow>
                                    <Form.Item
                                        name='password_confirm'
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Пожалуйста, введите пароль!'
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve()
                                                    }
                                                    return Promise.reject(new Error('Пароли не совпадают'))
                                                }
                                            })
                                        ]}
                                    >
                                        <StyledPasswordInput placeholder='Повторите пароль' size='large' />
                                    </Form.Item>
                                </FormRow>

                                <Form.Item
                                    name='accept_rulles'
                                    valuePropName='checked'
                                    style={{ marginBottom: '0px' }}
                                    rules={[{ validator: validation }]}
                                >
                                    <StyledCheckbox checked={checked} onChange={onCheckboxChange}>
                                        Соглашаюсь с <Link href='/privacy-policy'>политикой конфиденциальности</Link> и{' '}
                                        <Link href='/terms-and-conditions'>условиями использования</Link>
                                    </StyledCheckbox>
                                </Form.Item>

                                <Flex container='flex' alignItems='flex-end' justifyContent='space-between' margin='30px 0 0'>
                                    <StyledButton type='primary' htmlType='submit' loading={isDataFetching}>
                                        Зарегистрироваться
                                    </StyledButton>
                                    <span className='ant-form-text' style={{ textAlign: 'right' }}>
                                        Уже есть аккаунт? <Link href='/login'>Войти!</Link>
                                    </span>
                                </Flex>
                            </Form>
                        </TabPane>
                        <TabPane tab={'С помощью кошелька'} key='2'>
                            {isAuthenticated && <div>{/* <Blockie currentWallet scale={3} /> {walletAddress} */}</div>}
                            {/* {!isAuthenticated && ( */}
                            <StyledButton type='primary' htmlType='button' loading={walletFormLoading} onClick={connectWalletOnClick}>
                                Подключить кошелек
                            </StyledButton>
                            {/* )} */}
                        </TabPane>
                    </Tabs>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default SignupPage
