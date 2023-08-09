/** @format */

import React, { useState } from 'react'
import {
    Text,
    Username,
    CreatedBy,
    InnerText,
    AboutBlock,
    BodyBlock,
    Description,
    TitleBlock,
    Title,
    SocialNetWrapper,
    SocialNet,
    SocialNetLine,
    Address,
    TextLine,
    Token,
    ValueWrapper
} from './styled'
import { AppstoreOutlined, BarsOutlined, DownOutlined, InstagramOutlined, MenuOutlined, ProfileOutlined, UpOutlined } from '@ant-design/icons'
import { tooltipStyle } from 'uikit/Tooltip/styled'
import { Tooltip } from 'antd'
import Verified from '../../../../../public/assets/images/corret4.svg'
import Image from 'next/image'
import Link from 'next/link'

const DescriptionBlock = ({ data, item }) => {
    const [aboutVisible, setAboutVisible] = useState(false)
    const [detailsVisible, setDetailsVisible] = useState(false)
    const [copiedText, setCopied] = useState('Копировать')

    const copyTitle = () => {
        setCopied('Скопировано!')

        setTimeout(() => {
            setCopied('Копировать')
        }, 1000)
    }

    const copyLink = () => {
        navigator.clipboard.writeText(item.tokenId)
    }

    return (
        <>
            <AboutBlock>
                <Description>
                    <TitleBlock>
                        <MenuOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
                        <Title>Description</Title>
                    </TitleBlock>
                    <BodyBlock>
                        <InnerText>
                            <CreatedBy>
                                Created by&nbsp;
                                <Link href={`/artist/${item.creator.username}`} passHref>
                                    <Username>{item.creator.artistName ? item.creator.artistName : item.creator.username}</Username>
                                </Link>
                                &nbsp;
                                {item.creator.verified && (
                                    <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Подтвержденный пользователь'>
                                        <Image width={24} height={24} alt='Verified user' style={{ width: '24px' }} src={Verified.src} />
                                    </Tooltip>
                                )}
                            </CreatedBy>
                            {item.description !== 'undefined' && <Text>{item.description}</Text>}
                        </InnerText>
                    </BodyBlock>
                </Description>
                {/* <Description>
                    <TitleBlock
                        onClick={() => {
                            setAboutVisible(!aboutVisible)
                        }}
                    >
                        <BarsOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                        <Title>About {data.collection_name}</Title>
                        {aboutVisible ? (
                            <UpOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                        ) : (
                            <DownOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                        )}
                    </TitleBlock>
                    {aboutVisible && (
                        <BodyBlock>
                            <InnerText>
                                <Text>{data.about}</Text>
                                <SocialNetWrapper>
                                    <SocialNetLine>
                                        <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Website'>
                                            <Link href={data.website} passHref>
                                                <SocialNet position={'left'}>
                                                    <AppstoreOutlined style={{ width: '20px', color: 'rgba(4, 17, 29, 0.5)' }} />
                                                </SocialNet>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip placement='top' color={'#000'} overlayInnerStyle={tooltipStyle} title='Instagram'>
                                            <Link href={data.inst} passHref>
                                                <SocialNet position={'right'}>
                                                    <InstagramOutlined style={{ width: '20px', color: 'rgba(4, 17, 29, 0.5)' }} />
                                                </SocialNet>
                                            </Link>
                                        </Tooltip>
                                    </SocialNetLine>
                                </SocialNetWrapper>
                            </InnerText>
                        </BodyBlock>
                    )}
                </Description> */}
                <Description>
                    <TitleBlock
                        onClick={() => {
                            setDetailsVisible(!detailsVisible)
                        }}
                    >
                        <ProfileOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                        <Title>Details</Title>
                        {detailsVisible ? (
                            <UpOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                        ) : (
                            <DownOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                        )}
                    </TitleBlock>
                    {detailsVisible && (
                        <BodyBlock>
                            <InnerText>
                                <TextLine>
                                    Contact Address
                                    <ValueWrapper>
                                        <Link href={`https://etherscan.io/address/${data.address}`} passHref>
                                            <Address>
                                                {data.address?.substr(0, 6) +
                                                    '...' +
                                                    data.address?.substr(data.address?.length - 4, data.address?.length)}
                                            </Address>
                                        </Link>
                                    </ValueWrapper>
                                </TextLine>
                                <TextLine>
                                    Token ID
                                    <ValueWrapper>
                                        <Tooltip
                                            placement='top'
                                            color={'#000'}
                                            overlayInnerStyle={tooltipStyle}
                                            onClick={copyTitle}
                                            title={copiedText}
                                        >
                                            <Token onClick={() => copyLink()}>
                                                {item.tokenId?.toString().substr(0, 6) +
                                                    '...' +
                                                    item.tokenId
                                                        ?.toString()
                                                        .substr(item.tokenId?.toString().length - 15, item.tokenId?.toString().length)}
                                            </Token>
                                        </Tooltip>
                                    </ValueWrapper>
                                </TextLine>
                                <TextLine>
                                    Token Standard
                                    <ValueWrapper>{data.token_standart}</ValueWrapper>
                                </TextLine>
                                <TextLine>
                                    Blockchain
                                    <ValueWrapper>
                                        <Token>{data.blockchain}</Token>
                                    </ValueWrapper>
                                </TextLine>
                                <TextLine>
                                    Metadata
                                    <ValueWrapper>
                                        <Token>{data.metadata}</Token>
                                    </ValueWrapper>
                                </TextLine>
                            </InnerText>
                        </BodyBlock>
                    )}
                </Description>
            </AboutBlock>
        </>
    )
}

export default DescriptionBlock
