/** @format */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArtistCardWrapper, Avatar, Background, DescriptionBlock, DescriptionText, Name, StyledAvatarImage, StyledBackgroundImage, Username } from './styled'

const ArtistCard = () => {
    const data = {
        avatar: 'https://lh3.googleusercontent.com/arZp0k6bZZRcaZg0bepv5f7g0IzG04xoqYHymQSRj1emlUSGEZ5rkMdRdDnlaRyDxPBU3h-uuewAexFbQ3eFE3Dxt1OnOfw5HvCklQ=w375',
        background: 'https://lh3.googleusercontent.com/cNHN-Vj9TRIfwo30sqsbZlwz__psgA0HGlifGCHc7i3MnXArFH6sLIbhb46TrHrjJw3WzE7P1cLG44T46Yo7YqpbPnJpWCz_gxOP=w375',
        artist: "Admiral Studios",
        description: "123 123123 123 231 ",
        username: "adorableazurelobster",
        verified: false,
        wallet: "0xeaf7b647c14673fce6f704f85b2d5e6ad653580f",
    }

    return (
        <Link href={'#'} passHref>
            <ArtistCardWrapper >
                <Background>
                    <StyledBackgroundImage src={data.background} width={400} height={200} alt='' />
                </Background>
                <Avatar>
                    <StyledAvatarImage src={data.avatar} width={120} height={120} alt='' />
                </Avatar>
                <DescriptionBlock>
                    <Name>{data.artist}</Name>
                    <Username>{data.username}</Username>
                    <DescriptionText>{data.description}</DescriptionText>
                </DescriptionBlock>
            </ArtistCardWrapper>
        </Link>
    )
}

export default ArtistCard
