/** @format */

import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import Notable from './Notable/Notable'
import FeaturedArtists from './FeaturedArtists/FeaturedArtists'
import HowToUse from './HowToUse/HowToUse'
import { getHomepageItemsData } from 'redux/nft-reducer'
import { useDispatch } from 'react-redux'
import ServiceComparison from './ServiceComparison/ServiceComparison'

const Homepage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getHomepageItemsData())
    }, [])

    return (
        <>
            <HeroSection />
            <Notable />
            <FeaturedArtists />
            <HowToUse />
            <ServiceComparison />
        </>
    )
}

export default Homepage
