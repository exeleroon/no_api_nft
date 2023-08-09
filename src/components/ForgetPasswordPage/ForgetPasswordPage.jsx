/** @format */

import { message, Form } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from 'redux/auth-reducer'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Flex } from 'uikit/Flex/Flex'
import { FormRow, StyledButton, StyledInput } from 'uikit/FormComponents/styled'
import { PageTitle } from 'uikit/PageTitle/styled'

const ForgetPassword = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const isDataFetching = useSelector(state => state.auth.loginFormLoading)
    const router = useRouter()
    const [form] = Form.useForm();
    useEffect(() => {
        isAuth && router.push('/')
    }, [isAuth])

    const onFinish = async values => {
        form.resetFields();
        dispatch(resetPassword(values))
    }

    const onFinishFailed = () => {
        message.error('Submit failed!')
    }

    return (
        <>
            <DefaultSection>
                <DefaultContainer maxWidth={'600'}>
                    <PageTitle>Восстановление пароля</PageTitle>

                    <Form form={form} name='restore_password' onFinish={onFinish} onFinishFailed={onFinishFailed}>
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

                        <Flex container='flex' alignItems='flex-end' justifyContent='space-between' margin='30px 0 0'>
                            <StyledButton type='primary' htmlType='submit' loading={isDataFetching}>
                                Сбросить пароль
                            </StyledButton>
                        </Flex>
                    </Form>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default ForgetPassword
