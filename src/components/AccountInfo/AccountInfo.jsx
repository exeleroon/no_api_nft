/** @format */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { AccountInfoAvatar, AccountInfoCreator, AccountInfoCreatorAndName, AccountInfoName, AccountInfoWrapper } from './styled'

const AccountInfo = ({ image }) => {
    const accName = useSelector(state => state.auth.username)
    const artist = useSelector(state => state.auth.artist)

    return (
        <AccountInfoWrapper>
            <Link href='/my-profile' passHref>
                <AccountInfoAvatar>
                    <Image src={image} width={40} height={40} alt={artist ? artist : accName}></Image>
                </AccountInfoAvatar>
            </Link>
            <AccountInfoCreatorAndName>
                <Link href='/my-profile' passHref>
                    <AccountInfoName>{accName}</AccountInfoName>
                </Link>
                <Link href='/my-profile' passHref>
                    <AccountInfoCreator>Adidas no limits</AccountInfoCreator>
                </Link>
            </AccountInfoCreatorAndName>
        </AccountInfoWrapper>
    )
}

export default AccountInfo
