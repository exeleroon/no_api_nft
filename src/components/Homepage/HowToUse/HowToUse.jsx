/** @format */

import { Col, Row } from 'antd'
import React from 'react'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { DefaultTitle } from 'uikit/DefaultTitle/styled'
import { NotableItemsContainer } from '../Notable/styled'
import { HowToUseDescription, HowToUseItem, HowToUseName } from './styled'
import Link from 'next/link'
import { LoginOutlined, PlusSquareOutlined, SoundOutlined, WalletOutlined } from '@ant-design/icons'

const HowToUse = () => {
    const howToUseItems = [
        {
            name: 'Зарегистрируйтесь на NFT Music',
            description: (
                <div>
                    Есть 2 способа&nbsp;
                    <Link href='/signup'>
                        <a>зарегистрироваться на NFT Music </a>
                    </Link>
                    - используя почту и крипто-кошелек. Для того, чтобы купить или продать NFT токен обязательно нужно будет подключить кошелек.
                </div>
            ),
            icon: <LoginOutlined />
        },
        {
            name: 'Создайте и подключите кошелек',
            description:
                'Поскольку Вы будете использовать NFT Music для прямого взаимодействия с другими пользователями в блокчейне, Вам понадобится кошелек, который поможет Вам превратить Ваши действия в транзакции в блокчейне.',
            icon: <WalletOutlined />
        },
        {
            name: 'Перейдите в создание NFT',
            description: (
                <div>
                    После успешной регистрации и подключения кошелька нужно перейти на страницу&nbsp;
                    <Link href='/create-nft'>
                        <a>создания NFT</a>
                    </Link>
                    .
                </div>
            ),
            icon: <PlusSquareOutlined />
        },
        {
            name: 'Поделитесь в социальных сетях!',
            description: (
                <div>
                    Мы работаем каждый день, чтобы как можно больше людей узнало о Ваших&nbsp;
                    <Link href='/nft-audio'>
                        <a>аудио NFT </a>
                    </Link>
                    - но привлечение Вашей собственной аудитории только добавит интереса к Вашим NFT!
                </div>
            ),
            icon: <SoundOutlined />
        }
    ]

    return (
        <DefaultSection>
            <DefaultContainer>
                <DefaultTitle>
                    Как{' '}
                    <Link href='/create-nft'>
                        <a>создать NFT</a>
                    </Link>
                </DefaultTitle>
                <NotableItemsContainer>
                    <Row gutter={40}>
                        {howToUseItems.map((item, index) => (
                            <Col sm={24} md={6} style={{ width: '100%' }} key={index}>
                                <HowToUseItem>
                                    <div>{item.icon}</div>
                                    <HowToUseName>{item.name}</HowToUseName>
                                    <HowToUseDescription>{item.description}</HowToUseDescription>
                                </HowToUseItem>
                            </Col>
                        ))}
                    </Row>
                </NotableItemsContainer>
            </DefaultContainer>
        </DefaultSection>
    )
}

export default HowToUse
