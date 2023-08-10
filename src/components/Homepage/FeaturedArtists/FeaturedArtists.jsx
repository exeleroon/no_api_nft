/** @format */

import { Col, Row, Spin } from 'antd'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchByArtist } from 'redux/search-reducer'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultSection } from 'uikit/DefaultSection/styled'
import { DefaultTitle } from 'uikit/DefaultTitle/styled'
import { NotableItemsContainer } from '../Notable/styled'
import { AdditionalInfoNumber, ArtistAdditionalInfo, ArtistAvatar, ArtistCounter, ArtistItem, ArtistMediumInfo, ArtistName, ArtistSomeInfo, ArtistTracks, ItemPreloader } from './styled'
import melody from '../../../../public/assets/images/melody2.svg'
import Image from 'next/image'
import { EyeOutlined, LoadingOutlined } from '@ant-design/icons'

const FeaturedArtists = () => {
    const dispatch = useDispatch()
    const artists = useSelector(state => state.nft.topArtistsItems)

    // const setSearchByArtist = () => {
    //     dispatch(searchByArtist(true))
    // }
    const antIcon = <LoadingOutlined style={{ fontSize: 45, color: 'black' }} spin />

    return (
        <DefaultSection>
            <DefaultContainer>
                <DefaultTitle>
                    Топ{' '}
                    {/*<Link href='/search'>*/}
                    {/*    <a onClick={setSearchByArtist}>исполнители</a>*/}
                    {/*</Link>{' '}*/}
                    за последние 7 дней{' '}
                </DefaultTitle>
                <NotableItemsContainer>
                    <Row gutter={40}>
                        {artists ? (
                            <>
                                {artists?.map((artist, index) => (
                                    <Link key={index + 'head'} href={`/artist/${artist.username}`} passHref>
                                        <Col sm={24} md={8} style={{ width: '100%' }} key={index}>
                                            <ArtistItem>
                                                <ArtistCounter>{index + 1}</ArtistCounter>
                                                <ArtistAvatar>
                                                    <Image
                                                        src={artist.avatar}
                                                        alt={artist.artist ? artist.artist : artist.username}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </ArtistAvatar>
                                                <ArtistMediumInfo>
                                                    <ArtistName>{artist.artist ? artist.artist : artist.username}</ArtistName>
                                                    <ArtistAdditionalInfo>
                                                        <ArtistTracks>
                                                            <Image src={melody.src} width={20} height={20} alt='audio'></Image>
                                                            <AdditionalInfoNumber>0</AdditionalInfoNumber>
                                                        </ArtistTracks>
                                                        <ArtistTracks>
                                                            <EyeOutlined style={{fontSize: '22px', color: 'rgb(112 122 131)'}} />
                                                            <AdditionalInfoNumber>{Math.random().toString().slice(2,11)}</AdditionalInfoNumber>
                                                        </ArtistTracks>
                                                    </ArtistAdditionalInfo>
                                                    
                                                </ArtistMediumInfo>
                                                {/* <ArtistSomeInfo>{artist.additionalInfo}</ArtistSomeInfo> */}
                                            </ArtistItem>
                                        </Col>
                                    </Link>
                                ))}
                            </>
                        ) : (
                            <ItemPreloader>
                                <Spin indicator={antIcon} />
                            </ItemPreloader>
                        )}
                    </Row>
                </NotableItemsContainer>
            </DefaultContainer>
        </DefaultSection>
    )
}

export default FeaturedArtists
