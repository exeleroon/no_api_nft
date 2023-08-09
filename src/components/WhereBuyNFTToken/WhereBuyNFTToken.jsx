/** @format */

import React from 'react'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { PageTitle } from 'uikit/PageTitle/styled'
import Link from 'next/link'
import { Breadcrumb } from 'antd'
import { BreadcrumbsWrapper } from 'uikit/BreadcrumbsWrapper/styled'
import { TextPageWrapper } from 'uikit/TextPageWrapper/styled'

const data = {
    pageName: 'Где купить NFT токены'
}

const WhereBuyNFTToken = () => {
    return (
        <>
            <DefaultSection>
                <DefaultContainer>
                    <TextPageWrapper>
                        <BreadcrumbsWrapper>
                            <Breadcrumb separator='•'>
                                <Breadcrumb.Item className='firstItem' href='/'>
                                    Главная
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className='secondItem'>{data.pageName}</Breadcrumb.Item>
                            </Breadcrumb>
                        </BreadcrumbsWrapper>
                        <PageTitle>Где купить NFT токены</PageTitle>
                        <p>
                            В наши дни большинство новостей связанно с NFT - но, несмотря на их популярность, многие люди не знают,{' '}
                            <Link href={'/chto-takoe-nft-tokenu'}>
                                <a target='_blank'>что такое NFT</a>
                            </Link>
                            . NFT или невзаимозаменяемые токены - это единственные в своем роде цифровые товары, как картина Моны Лизы. Они уникальны,
                            ими можно торговать, и они хранятся в блокчейне. Если Вы еще не знали, NFT могут продаваться за сотни тысяч долларов, если
                            не больше. Такие исполнители, как Eminem и Grimes, заработали миллионы, продавая свои&nbsp;
                            <Link href='/nft-audio'>
                                <a>аудио NFT</a>
                            </Link>
                            .
                        </p>
                        <p>
                            В отличие от биткойна, который функционирует в основном как платежная сеть и криптовалюта, сети блокчейнов, такие как
                            Ethereum и Solana, позволяют пользователям создавать приложения, которые могут хранить личные данные и устанавливать
                            правила для сложных финансовых транзакций. Это так называемые смарт-контракты, представляющие собой цифровые контракты,
                            хранящиеся в блокчейне, которые автоматически выполняются при соблюдении определенных условий, например, когда NFT
                            передает право собственности, а оригинальный создатель получает роялти. Чтобы купить NFT, вам нужно будет создать цифровой
                            кошелек для хранения вашей криптовалюты. Например Metamask, который вы можете подключить к нашей торговой площадке, где вы
                            планируете покупать NFT.
                        </p>
                        <p>
                            NFT часто продаются через систему аукционов, где вы делаете ставку на NFT и дальше все происходит по стандартному пути.
                            Некоторые сайты, такие как NFT Music, предлагают возможность купить NFT сразу по установленной цене исполнителем.
                        </p>
                        <p>
                            Насколько быстро растет рынок? Исследование, опубликованное в январе 2022 года компанией Emergen Research, показывает, что
                            размер мирового рынка NFT, как ожидается, достигнет более 3,5 триллиона долларов в 2030 году — для сравнения, размер рынка
                            достиг 340 миллионов долларов в 2020 году. Те, кто выходит на рынок, должны делать это с широко открытыми глазами,
                            понимая, что важно тщательно оценивать рынки, в том числе часто задаваемые вопросы и условия обслуживания.
                        </p>
                        <p>
                            NFT изменили то, как мы взаимодействуем с цифровыми предметами. Создатели больше не являются заложниками таких платформ,
                            как Spotify или Soundcloud, и могут взаимодействовать со своей аудиторией без какой-либо среды или централизованной
                            платформы. Прежде чем прыгнуть “на поезд” NFT, Вы должны знать, где купить NFT.&nbsp;
                            <Link href={'/'}>
                                <a>NFT Music</a>
                            </Link>
                            &nbsp; - первый и крупнейший NFT marketplace. Наш музыкальный маркетплейс позволяет очень просто купить и продать NFT.
                        </p>
                    </TextPageWrapper>
                </DefaultContainer>
            </DefaultSection>
        </>
    )
}

export default WhereBuyNFTToken
