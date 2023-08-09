/** @format */

import React from 'react'
import { useSelector } from 'react-redux'
import { BannerContainer, BannerContent, BannerWrapper } from './styled'

const LibraryBanner = () => {

    const item = useSelector(state => state.artist.item)

    return (
        <BannerWrapper>
            <BannerContainer>
                <BannerContent style={{ backgroundImage: `url('${item?.background}')` }}>

                </BannerContent>
            </BannerContainer>
        </BannerWrapper>
    )
}

export default LibraryBanner;
