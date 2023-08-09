/** @format */

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ProfileHeaderBanner from './MyProfileHeader/ProfileHeaderBanner'
import MyProfileInfo from './MyProfileInfo/MyProfileInfo'
import { getProfile } from 'redux/auth-reducer'
import MyProfileLinks from './MyProfileLinks/MyProfileLinks'
import MyProfileTabs from './MyProfileNavMenu/MyProfileTabs'

const MyProfilePage = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const userDataLoading = useSelector(state => state.auth.userDataLoading)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getProfile())
    }, [])

    // useEffect(() => {
    //     (!isAuth && !userDataLoading) && router.push('/login')
    // }, [isAuth, userDataLoading])

    return (
        <>
            <ProfileHeaderBanner />
            <MyProfileLinks />

            <MyProfileInfo />
            <MyProfileTabs />
        </>
    )
}

export default MyProfilePage
