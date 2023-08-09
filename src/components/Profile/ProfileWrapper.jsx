/** @format */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccountTabs from './AccNavMenu/AccTabs'
import AccInfo from './AccountInfo/AccInfo'
import { getArtist } from 'redux/artist-reducer'
import AccountLinks from './AccountLinks/AccountLinks'
import LibraryBanner from './Header/LibraryBanner'
import { useRouter } from 'next/router'

const ProfileWrapper = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const { name } = router.query

    useEffect(() => {
        // name && dispatch(getArtist(name))
    }, [name])

    return (
        <>
            <LibraryBanner />
            <AccountLinks />
            <AccInfo />
            <AccountTabs />
        </>
    )
}

export default ProfileWrapper
