/** @format */

import React from 'react'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { Typography } from 'antd'
import { PageTitle } from 'uikit/PageTitle/styled'
import Link from 'next/link'
import { Breadcrumb } from 'antd'
import { TextPageWrapper } from 'uikit/TextPageWrapper/styled'
import { BreadcrumbsWrapper } from 'uikit/BreadcrumbsWrapper/styled'

const data = {
    pageName: 'Как создать NFT токены'
}

const HowToCreateNFT = () => {
    const { Title } = Typography

    return (
        <>
            <DefaultSection>
                <DefaultContainer>
                    <TextPageWrapper>
                        <BreadcrumbsWrapper>
                            <Breadcrumb separator='•'>
                                <Breadcrumb.Item href='/'>Главная</Breadcrumb.Item>
                                <Breadcrumb.Item>{data.pageName}</Breadcrumb.Item>
                            </Breadcrumb>
                        </BreadcrumbsWrapper>
                        <PageTitle>Как создать NFT токены</PageTitle>
                        <p>
                            Создание NFT токенов раньше было сложным и длительным процессом, но теперь благодаря NFT Music создать токены не составит
                            труда. В первую очередь, конечно, Вам потребуется сам объект, к которому будет привязан токен. И именно от его
                            уникальности и эксклюзивности зависит итоговая цена NFT.
                        </p>
                        <Title level={2}>Зарегистрируйтесь на NFT Music</Title>
                        <p>
                            Есть 2 способа зарегистрироваться на NFT Music - используя почту и крипто-кошелек. Для того, чтобы купить или продать NFT
                            токен обязательно нужно будет подключить кошелек - без него можно создать профиль, следить за интересующими Вас{' '}
                            <Link href='/nft-audio'>
                                <a>аудио NFT</a>
                            </Link>
                            .
                        </p>
                        <p>
                            Для регистрации через почту перейдите на страницу{' '}
                            <Link href='/signup'>
                                <a target='_blank'>регистрации</a>
                            </Link>
                            .
                        </p>
                        <Title level={2}>Создайте и подключите кошелек</Title>
                        <p>
                            Крипто-кошелек, такой как{' '}
                            <a href='https://metamask.io/' target='_blank' rel='nofollow'>
                                MetaMask
                            </a>
                            , хранит Ваши ETH и обрабатывает транзакции в блокчейне Ethereum. При регистрации автоматически будет сгенерирован
                            уникальный адрес кошелька, и его нужно будет использовать для совершения транзакций.
                        </p>
                        <p>
                            NFT Music — это инструмент, который Вы можете использовать для взаимодействия с блокчейном. Мы никогда не присваиваем Ваши
                            предметы и не храним Ваши NFT. Вместо этого мы предоставляем систему для продажи и покупки токенов. Поскольку Вы будете
                            использовать NFT Music для прямого взаимодействия с другими пользователями в блокчейне, Вам понадобится кошелек, который
                            поможет Вам превратить Ваши действия в транзакции в блокчейне.
                        </p>
                        <p>
                            Для того, чтобы зарегистрировать кошелек, перейдите на сайт{' '}
                            <a href='https://metamask.io/' target='_blank' rel='nofollow'>
                                MetaMask
                            </a>
                            .
                        </p>
                        <p>
                            После успешного создания кошелька подключите его на странице <Link href='#'>подключения кошелька</Link>.
                        </p>
                        <Title level={2}>Перейдите в создание NFT</Title>
                        <p>
                            После успешной регистрации и подключения кошелька нужно перейти на страницу <Link href='/create-nft'>создания NFT</Link>.
                            На ней нужно внести всю необходимую информацию про Ваш NFT - сам файл аудиозаписи, картинку анонса, название, описание,
                            цену и тому подобное. Весь процесс достаточно прост, но если будут появляться дополнительные вопросы, с нами можно{' '}
                            <Link href='/kontaktu'>
                                <a target='_blank'>связаться</a>
                            </Link>
                            !
                        </p>
                        <Title level={2}>Поделитесь в социальных сетях!</Title>
                        <p>
                            Для любого товара нужен покупатель! Мы работаем каждый день, чтобы как можно больше людей узнало о Ваших NFT - но привлечь
                            Вашу собственную аудиторию только добавит интереса к Вашим NFT!
                        </p>
                    </TextPageWrapper>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default HowToCreateNFT
