/** @format */

import { Col, Row, Spin } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultTitle } from 'uikit/DefaultTitle/styled'
import { NotableItemsContainer, ItemPreloader } from './styled'
//TODO: make separate component for child items and map it
import { LoadingOutlined } from '@ant-design/icons'
import CardItem from '../../CardItem/CardItem'

const Notable = () => {
    const popItems = useSelector(state => state.nft.mostPopularItems)
    const antIcon = <LoadingOutlined style={{ fontSize: 55, color: 'black' }} spin />

    return (
        <DefaultContainer addPadding addMargin={'40px auto'}>
            <DefaultTitle>
                Самое популярное -
                <Link href='/kypit-nft-tokenu'>
                    <a> купить NFT</a>
                </Link>
            </DefaultTitle>
            <NotableItemsContainer isNotable>
                <Row gutter={{ sm: 20 }}>
                    {popItems?.length > 0 ? (
                        <>
                            {popItems.map(el => {
                                return (
                                    <Col span={8}>
                                        <CardItem el={el} colSpan={8} homepage />
                                    </Col>
                                )
                            })}
                        </>
                    ) : (
                        <ItemPreloader>
                            <Spin indicator={antIcon} />
                        </ItemPreloader>
                    )}
                </Row>
            </NotableItemsContainer>
        </DefaultContainer>
    )
}

export default Notable
