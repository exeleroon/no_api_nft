/** @format */

import styled from 'styled-components'
import AudioPlayer from 'react-h5-audio-player'

export const StyledCardLink = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: ${({ isLarge }) => (isLarge ? 'fit-content' : 'auto')};
    overflow: hidden;
    text-decoration: none;
    border-radius: 10px;
    &:hover {
        transform: ${({ isLarge }) => (isLarge ? '' : 'translateY(-2px)')};
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    }
    border: 1px solid rgb(229, 232, 235);
    audio {
        width: 100%;
        background: #f1f3f4;
    }
    transition: all 0.1s ease 0s;
`
export const ImgContainer = styled.div`
    height: 52%;
    overflow: hidden;
    position: relative;
    line-height: 0;
    &:hover {
        .player {
            display: flex;
        }
    }
`

export const StyledImgCard = styled.div`
    img {
        object-fit: cover;
    }
`

export const InfoContainer = styled.div`
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`

export const PriceInfo = styled.div`
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 12px;
    /* background: linear-gradient(rgba(229,232,235,0.392) 0%,rgb(255,255,255) 7%); */
`
export const LeftPricePart = styled.div`
    margin-right: 12px;
    min-width: 0px;
    width: 60%;
    color: rgb(112, 122, 131);
    font-weight: 500;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const AboveTextLeft = styled.a`
    color: rgb(112, 122, 131);
    font-weight: 500;
    width: 100%;
    display: flex;
    align-items: center;

    span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    ${({ isLarge }) =>
        isLarge
            ? `
        font-size: 18px;
        .icon {
            margin-top: 5px;
        }

        `
            : `font-size: 14px;`}

    @media (max-width: 767px) {
        ${({ isLarge }) =>
            (isLarge = `
        font-size: 14px;
        .icon {
            margin-top: 3px;
        }`)}
    }

    &:hover {
        color: #353840;
    }
`

export const UnderTextLeft = styled.a`
    width: 100%;
    /* display: -webkit-box; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    color: rgb(53, 56, 64);
    letter-spacing: 0.1px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    div {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ${({ isLarge }) =>
        isLarge
            ? `
    font-size: 22px;
    `
            : `
    font-size: 18px;
`}
    @media (max-width: 767px) {
        font-size: ${isLarge => (isLarge = '18px')};
    }

    &:hover {
        color: rgb(53, 56, 64);
    }
`

export const RightPricePart = styled.div`
    flex-direction: column;
    display: flex;
    width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: flex-end;
`

export const CurrentPrice = styled.div`
    flex: 1 0 0%;
    align-items: flex-end;
    flex-direction: column;
    display: flex;
    h2 {
        margin-bottom: 0;
    }
`
export const PriceWord = styled.span`
    font-weight: 400;
    color: rgb(112, 122, 131);
    font-size: ${({ isLarge }) => (isLarge ? '16px' : '12px')};
    @media (max-width: 767px) {
        font-size: ${isLarge => (isLarge = '12px')};
    }
`

export const PriceWithIcon = styled.div`
    @media (min-width: 600px) {
        font-size: 14px;
        height: initial;
    }
    font-size: 3.2vw;
    height: 3.47vw;
    -webkit-box-pack: end;
    justify-content: flex-end;
    max-width: 13ch;

    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-weight: 600;
    color: rgb(53, 56, 64);
    width: fit-content;
    max-width: 100%;
`
export const IconContainer = styled.div`
    cursor: pointer;
    font-size: ${({ isLarge }) => (isLarge ? '18px' : '16px')};
    display: flex;
    width: ${({ isLarge }) => (isLarge ? '18px' : '16px')};
    height: ${({ isLarge }) => (isLarge ? '18px' : '16px')};
    img {
        object-fit: contain;
        width: ${({ isLarge }) => (isLarge ? '18px' : '16px')};
        height: ${({ isLarge }) => (isLarge ? '18px' : '16px')};
    }
`

export const PriceTxt = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: right;
    h2 {
        font-size: 16px;
    }
`

export const LastPriceCont = styled.div`
    display: flex;
    font-size: 16px;
    -webkit-box-pack: end;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(112, 122, 131);
    flex-wrap: nowrap;
    justify-content: flex-end;
    font-weight: ${({ isLarge }) => (isLarge ? '600' : '500')};

    @media(max-width: 767px) {
        span {
            width: -webkit-fill-available;
        }
        font-weight: ${({ isLarge }) => isLarge = '500'};
    }
`

export const LastPriceWithIcon = styled.div`
    color: rgb(53, 56, 64);
    width: fit-content;
    max-width: 100%;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-weight: 600;
    margin-left: 4px;
    h2 {
        font-size: 11px;
        margin-bottom: 0;
    }
`

export const LastIconCont = styled.div`
    cursor: pointer;
    font-size: 11px;
    display: flex;
    width: 11px;
    height: 11px;
    img {
        object-fit: contain;
        width: 11px;
        height: 11px;
    }
`

export const CardFooter = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-weight: 500;
    padding: 0 12px 12px 12px;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    cursor: pointer;
`

export const IconHoverBtn = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

export const IconWithBtnCont = styled.div`
    margin-right: 8px;
    justify-content: center;
    flex-direction: column;
`

export const BuyBtn = styled.a`
    display: inline-flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.5px;
    cursor: pointer;

    ${({ isLarge }) =>
        isLarge
            ? `
        padding: 10px 34px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 10px;
        `
            : `
        padding: 4px 10px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 6px;
    `}

    -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    background-color: rgb(32, 129, 226);
    border: 1px solid rgb(32, 129, 226);
    color: rgb(255, 255, 255);

    :hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
        color: rgb(255, 255, 255);
        background-color: rgb(24, 104, 183);
    }

    @media (max-width: 840px) {
        display: block;
    }

    @media (max-width: 767px) {
        ${({ isLarge }) =>
            (isLarge = `
        padding: 4px 10px;
        font-size: 14px;
        font-weight: 500;`)}
    }

    transition: 0.2s linear;
`

export const IconCont = styled.div`
    img {
        fill: grey;
        width: 12px;
        height: 12px;
    }
    @media (max-width: 840px) {
        display: none;
    }
`

export const LikesWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 5px;
    font-size: ${({ isLarge }) => (isLarge ? '25px' : '19px')};
    color: ${({ isViewed }) => (isViewed ? 'rgb(0 126 251)' : 'rgb(138, 147, 155)')};

    @media (max-width: 767px) {
        font-size: ${({ isLarge }) => (isLarge = '19px')};
    }

    &:hover {
        color: #353840;
    }

    &:hover {
        span svg {
            color: rgb(0 126 251);
        }
    }
`

export const LikesCount = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: rgb(112, 122, 131);
    margin-left: 5px;
    height: 20px;
    margin-bottom: 0;
`

export const PreviewAudioWrapper = styled.div`
    padding: 10px 12px;
    width: 100%;
    max-height: 78px;
    top: 100px;
    display: flex;
    // position: absolute;
    // background-color: white;

    > div#waveform${({ count }) => (count ? count : 0)} {
        flex-grow: 1;
        wave {
            height: 46px !important;
        }
    }
`

export const StyledAudioPlayer = styled(AudioPlayer)`
    border-bottom: 1px solid #eaeaea;
    padding: 18px 15px;
    box-shadow: unset;

    .rhap_progress-indicator,
    .rhap_volume-indicator {
        background: #2081e2;
    }

    .rhap_progress-filled {
        background-color: #2081e2;
    }

    .rhap_repeat-button,
    .rhap_main-controls-button,
    .rhap_volume-button {
        color: #2081e2;
    }
`
