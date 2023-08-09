/** @format */

import { message, Form, Tabs } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch, useSelector } from 'react-redux'
import { login, loginViaWallet, setWalletFormLoading } from 'redux/auth-reducer'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Flex } from 'uikit/Flex/Flex'
import { FormRow, StyledButton, StyledCheckbox, StyledInput, StyledPasswordInput } from 'uikit/FormComponents/styled'
import { PageTitle } from 'uikit/PageTitle/styled'

const { TabPane } = Tabs

const LoginPage = () => {
    const dispatch = useDispatch()
    const { authenticate, isAuthenticated, user } = useMoralis()
    const isAuth = useSelector(state => state.auth.isAuth)
    const walletFormLoading = useSelector(state => state.auth.walletFormLoading)
    const isDataFetching = useSelector(state => state.auth.loginFormLoading)
    const router = useRouter()

    useEffect(() => {
        isAuth && router.push('/')
    }, [isAuth])

    const onFinish = async values => {
        dispatch(login(values))
    }

    const onFinishFailed = () => {
        message.error('Submit failed!')
    }

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

    return (
        <>
            <DefaultSection>
                <DefaultContainer maxWidth={'600'}>
                    <PageTitle>Логин на NFT Music</PageTitle>
                    <Tabs defaultActiveKey='1'>
                        <TabPane tab={'С помощью логина и пароля'} key='1'>
                            <Form name='login_form' onFinish={onFinish} onFinishFailed={onFinishFailed}>
                                <FormRow>
                                    <Form.Item
                                        name={'username'}
                                        hasFeedback
                                        rules={[{ required: true, message: 'Пожалуйста, введите Email или логин!' }]}
                                    >
                                        <StyledInput placeholder='Email или логин' size='large' />
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
                                            }
                                        ]}
                                    >
                                        <StyledPasswordInput placeholder='Пароль' size='large' />
                                    </Form.Item>
                                </FormRow>
                                <Flex container='flex' alignItems='center' justifyContent='space-between' margin='30px 0 0'>
                                    <Form.Item name='rememberMe' valuePropName='checked' style={{ marginBottom: '0px' }}>
                                        <StyledCheckbox>Запомнить меня</StyledCheckbox>
                                    </Form.Item>
                                    <span className='ant-form-text'>
                                        <Link href='/forgot-password'>Забыли пароль?</Link>
                                    </span>
                                </Flex>

                                <Flex container='flex' alignItems='flex-end' justifyContent='space-between' margin='30px 0 0'>
                                    <StyledButton type='primary' htmlType='submit' loading={isDataFetching}>
                                        Войти
                                    </StyledButton>
                                    <span className='ant-form-text' style={{ textAlign: 'right' }}>
                                        Еще нет аккаунта? <Link href='/signup'>Зарегистрироваться!</Link>
                                    </span>
                                </Flex>
                            </Form>
                        </TabPane>
                        <TabPane tab={'С помощью кошелька'} key='2'>
                            <StyledButton type='primary' htmlType='button' loading={walletFormLoading} onClick={connectWalletOnClick}>
                                Войти с помощью кошелька
                            </StyledButton>
                        </TabPane>
                    </Tabs>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default LoginPage
