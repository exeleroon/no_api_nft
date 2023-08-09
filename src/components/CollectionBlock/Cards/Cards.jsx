/** @format */

import React from 'react'
import { Row, Col, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import CardItem from '../../CardItem/CardItem'
import ArtistCard from 'components/ArtistCard/ArtistCard'

const Cards = ({ switchTabPlus, items, itemsLoading, tab }) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 55, color: 'black' }} spin />

    return (
        <Row gutter={[16, 16]}>
            <>
                <Col span={6}>
                    <ArtistCard />
                </Col>

                {items?.map((item, index) => {
                    return (
                        <Col span={6} key={index}>
                            <CardItem el={item} tab={tab} />
                        </Col>
                    )
                })}
            </>
        </Row>
    )
}

export default Cards
