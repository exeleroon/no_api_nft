/** @format */

import React, { useRef } from 'react'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Typography } from 'antd'
import { PageTitle } from 'uikit/PageTitle/styled'
import { message, Form } from 'antd'
import { FormRow, StyledButton, StyledInput, StyledTextArea } from 'uikit/FormComponents/styled'
import { Flex } from 'uikit/Flex/Flex'
import { TextPageWrapper } from 'uikit/TextPageWrapper/styled'
import { sendContactForm } from 'redux/auth-reducer'
import { useDispatch } from 'react-redux'

const Contacts = () => {
    const formRef = useRef(null)

    const { Title } = Typography

    const dispatch = useDispatch()

    const isDataFetching = false

    const onFinish = async values => {
        dispatch(sendContactForm(values))
        formRef.current.resetFields()
    }

    const onFinishFailed = () => {
        message.error('Пожалуйста, заполните все обязательные поля!')
    }

    return (
        <>
            <DefaultSection>
                <DefaultContainer maxWidth={'600'}>
                    <TextPageWrapper>
                        <PageTitle>Контакты NFT Music</PageTitle>
                        <p>
                            Если у вас есть какие-либо вопросы касающиеся работы сервиса - заполните форму ниже или напрямую на почту{' '}
                            <a href='mailto:info@nft-music.co'>info@nft-music.co</a>
                        </p>
                        <Title level={2}>Связаться с NFT Music</Title>
                        <Form name='feedback_form' onFinish={onFinish} onFinishFailed={onFinishFailed} ref={formRef}>
                            <FormRow>
                                <Form.Item name={'name'} hasFeedback rules={[{ required: true, message: 'Пожалуйста, введите Ваше имя' }]}>
                                    <StyledInput placeholder='Имя' size='large' />
                                </Form.Item>
                            </FormRow>

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
                                <Form.Item name={'message'} hasFeedback>
                                    <StyledTextArea placeholder='Описание' size='large' rows={4} />
                                </Form.Item>
                            </FormRow>

                            <Flex container='flex' alignItems='flex-end' justifyContent='space-between' margin='30px 0 0'>
                                <StyledButton type='primary' htmlType='submit' loading={isDataFetching}>
                                    Отправить
                                </StyledButton>
                            </Flex>
                        </Form>
                    </TextPageWrapper>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default Contacts
