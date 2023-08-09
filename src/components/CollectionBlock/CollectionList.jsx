/** @format */

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { NoItems } from 'components/MyProfilePage/MyProfileNavMenu/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import Cards from './Cards/Cards'
import { CardsWrapper, ItemPreloader } from './styled'

const CollectionList = ({ switchTabPlus, items, itemsLoading, tab }) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 55, color: 'black' }} spin />
    const wallet = useSelector(state => state.artist.item?.wallet)

    return (
        <CardsWrapper>
            {/* <SearchElems /> */}
            {items ? (
                <Cards
                    // switchTabPlus={switchTabPlus}
                    items={items}
                    itemsLoading={itemsLoading}
                    tab={tab}
                />
            ) : itemsLoading === true && wallet ? (
                <ItemPreloader>
                    <Spin indicator={antIcon} />
                </ItemPreloader>
            ) : (
                <NoItems>Нет элементов</NoItems>
            )}
        </CardsWrapper>
    )
}

export default CollectionList
