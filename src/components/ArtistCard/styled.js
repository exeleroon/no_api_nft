/** @format */

import Image from 'next/image'
import styled from 'styled-components'

export const ArtistCardWrapper = styled.a`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    transition: all 0.2s ease 0s;
    overflow: hidden;
    color: #000;

    :hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
        color: #000;
    }
`

export const Background = styled.div`

`

export const StyledBackgroundImage = styled(Image)``

export const Avatar = styled.div`
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    
`

export const StyledAvatarImage = styled(Image)`
    border-radius: 50%;
    border: 2px solid rgb(255,255,255);
    background-color: rgb(255,255,255);
`

export const DescriptionBlock = styled.div`
    margin-top: -60px;
    padding: 20px 26px;
    text-align: center;
`

export const Name = styled.div`
    font-size: 26px;
    font-weight: 600;
`

export const Username = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
`

export const DescriptionText = styled.div`
    font-size: 14px;
`
