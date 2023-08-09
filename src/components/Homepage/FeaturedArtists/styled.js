import Image from 'next/image';
import styled from 'styled-components';

export const ArtistItem = styled.a`
    width: 100%;
    border-radius: 10px;
    font-weight: 600;
    padding: 16px;
    border: 1px solid rgb(229, 232, 235);
    color: rgb(53, 56, 64);
    text-align: left;
    border-color: transparent transparent rgb(229, 232, 235);
    display: flex;
    align-items: center;
    height: 88px;
    &:hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    }
    transition: all 0.2s ease 0s;
`

export const ArtistCounter = styled.div`
    font-weight: 600;
    font-size: 18px;
    color: rgb(4, 17, 29);
`

export const ArtistAvatar = styled.div`
    margin-left: 16px;
    margin-right: 10px;
    border: 1px solid rgb(229, 232, 235);
    height: 50px;
    border-radius: 50%;
    width: 50px;
    object-fit: cover;
    img {
        border-radius: 50%;

    }
`

export const ArtistMediumInfo = styled.div`
    align-self: stretch;
    flex: 1 1 auto;
    flex-flow: column;
    justify-content: space-between;
    margin-right: 16px;
    overflow: hidden;
    font-size: 16px;
    align-items: flex-start;
`

export const ArtistName = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: rgb(4, 17, 29);
    margin-bottom: 3px;
    margin-top: 4px;
`

export const ArtistAdditionalInfo = styled.div`
    display: flex;
    align-items: center;

    > *:first-child {
        padding-right: 15px;
    }
`

export const AdditionalInfoNumber = styled.div`
    font-size: 16px;
    line-height: normal;
    position: relative;
    top: 1px;
    margin-left: 1px;
`

export const ArtistTracks = styled.div`
    display: flex;
    gap: 5px;
    font-weight: 600;
    font-size: 14px;
    color: rgb(138, 147, 155);
`

export const ArtistSomeInfo = styled.div`
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-flow: column;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: 40%;
    order: 4;
    overflow: hidden;
    text-align: right;
    font-weight: 400;
`

export const gfdhfdgh = styled.div`
    margin-top: 40px;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);
    font-weight: 500;
    font-size: 14px;
    padding: 6px 20px 7px;
    display: inline-block;

    @media (max-width: 767px) {
        margin-top: 24px;
    }
`
export const ItemPreloader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

`

