/** @format */

import React, { useEffect } from 'react'
import ItemSum from './ItemSum/ItemSum'
import ItemMain from './ItemMain/ItemMain'
import { MainContainer } from './styled'
import { Wrapper } from 'components/Homepage/HeroSection/styled'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getNFT } from 'redux/nft-reducer'

const data = {
    previewImage:
        'https://lh3.googleusercontent.com/bUXCoCysa9XI_T_ZSdWxa1rXkTgr8yMnehVyB3NApMr7E8cvDDmC82wJi8OgbyQ4OLxMS1gj7Pt1pI4Hd8uYym_LiwTspipNzp7D=w600',
    like: 799,
    artist: 'Anya',
    // collection_name: '57 Moments',
    name: 'Connected',
    collection_link: '/',
    description:
        '57 moments from the eruption in Geldingadalir. No volcanic eruption had occurred for 800 years on the Reykjanes Peninsula until 19 March 2021 when a fissure vent appeared in Geldingadalir to the south of Fagradalsfjall mountain.',
    artist_link: '/',
    about: '57 moments from the eruption in Geldingadalir. No volcanic eruption had occurred for 800 years on the Reykjanes Peninsula until 19 March 2021 when a fissure vent appeared in Geldingadalir to the south of Fagradalsfjall mountain. Series of 57 unique 1/1 pieces by Garðar Ólafsson.',
    details: '',
    website: '/',
    inst: '/',
    address: '0x71523b03385e24fca2671413b409e394fc5364ae',
    token: '71348397378810690825618428912408306798479722983811327082816877774070261743617',
    token_standart: 'ERC-1155',
    blockchain: 'Ethereum',
    metadata: 'Centralized',
    owner: 'Smikkie',
    logo: 'https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg',
    crypto_price: '0.25',
    fiat_price: '($652.30)',
    start_date: '20.09.2021',
    end_date: '22.10.2021',
    verified: true
}

const ItemPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { name } = router.query

    const item = useSelector(state => state.nft.item)

    useEffect(() => {
        if (name) {
            // dispatch(getNFT(name))
        }
    }, [name])

    return (
        <>
            <Wrapper>
                <DefaultContainer>
                    <MainContainer>
                        {item && (
                            <>
                                <ItemSum data={data} item={item} />
                                <ItemMain data={data} item={item} />
                            </>
                        )}
                    </MainContainer>
                </DefaultContainer>
            </Wrapper>
        </>
    )
}

export default ItemPage
