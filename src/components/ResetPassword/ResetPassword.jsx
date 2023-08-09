/** @format */

import { message, Form } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserToken, resetPassword, updateMyProfile } from 'redux/auth-reducer'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Flex } from 'uikit/Flex/Flex'
import { FormRow, StyledButton, StyledPasswordInput } from 'uikit/FormComponents/styled'
import { PageTitle } from 'uikit/PageTitle/styled'

const ResetPassword = () => {
    const dispatch = useDispatch()
    const isDataFetching = useSelector(state => state.auth.loginFormLoading)
    const router = useRouter()
    const { token } = router.query
    const [form] = Form.useForm()

    useEffect(() => {
        // if (token) {
        //     dispatch(getUserToken(token))
        // }
    }, [token])

    const onFinish = async values => {
        form.resetFields()
        dispatch(updateMyProfile({ password: values.password }))
        router.push('/')
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

                        <Flex container='flex' alignItems='flex-end' justifyContent='space-between' margin='30px 0 0'>
                            <StyledButton type='primary' htmlType='submit' loading={isDataFetching}>
                                Восстановить пароль
                            </StyledButton>
                        </Flex>
                    </Form>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default ResetPassword
