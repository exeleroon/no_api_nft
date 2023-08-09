/** @format */

import { DownOutlined, TagsFilled, UpOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import {
    Title,
    OffersContainer,
    TitleBlock,
    Offers,
    ContentContainer,
    Table,
    StyledLi,
    TitleTable,
    InfoTable,
    Price,
    Amount,
    Currency,
    TableText,
    OfferFrom,
    CryptoLogoWrapper
} from './styled'
import Link from 'next/link'

const OffersBlock = ({ data, item }) => {
    const [visible, setVisible] = useState(true)
    return (
        <>
            <OffersContainer>
                <Offers>
                    <TitleBlock
                        onClick={() => {
                            setVisible(!visible)
                        }}
                    >
                        <TagsFilled style={{ fontSize: '24px', marginRight: '10px' }} />
                        <Title>Offers</Title>
                        {visible ? (
                            <UpOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                        ) : (
                            <DownOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                        )}
                    </TitleBlock>
                    {visible && (
                        <ContentContainer>
                            <Table>
                                <StyledLi>
                                    <TitleTable>Price</TitleTable>
                                    <TitleTable>USD Price</TitleTable>
                                    <TitleTable>Floor Difference</TitleTable>
                                    <TitleTable>Expiration</TitleTable>
                                    <TitleTable>From</TitleTable>
                                    <TitleTable></TitleTable>
                                </StyledLi>
                                <StyledLi>
                                    <InfoTable>
                                        <Price>
                                            <CryptoLogoWrapper alt='Token logo' src={data.logo} />
                                            &nbsp;<Amount>0.25</Amount>&nbsp;<Currency>Weth</Currency>
                                        </Price>
                                    </InfoTable>
                                    <InfoTable>
                                        <TableText>$650.16</TableText>
                                    </InfoTable>
                                    <InfoTable>
                                        <TableText>72% above</TableText>
                                    </InfoTable>
                                    <InfoTable>
                                        <TableText>in 5 days</TableText>
                                    </InfoTable>
                                    <InfoTable>
                                        <Link href={'/'} passHref>
                                            <OfferFrom>B7B2A3</OfferFrom>
                                        </Link>
                                    </InfoTable>
                                </StyledLi>
                            </Table>
                        </ContentContainer>
                    )}
                </Offers>
            </OffersContainer>
        </>
    )
}

export default OffersBlock
