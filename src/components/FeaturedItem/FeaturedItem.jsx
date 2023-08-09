/** @format */

import AccountInfo from 'components/AccountInfo/AccountInfo'
import React from 'react'
import { FeaturedItemDecription, FeaturedItemImage, FeaturedItemWrapper, ItemPreloader } from './styled'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'
import CardItem from '../CardItem/CardItem'
import items from '../Profile/AccNavMenu/structure.json'

const FeaturedItem = () => {
    const item = items.tracked[1]
    // const item = useSelector(state => state.nft.featureItem)
    const antIcon = <LoadingOutlined style={{ fontSize: 55, color: 'black' }} spin />

    return (
        <>
            <FeaturedItemWrapper>
                {item ? (
                    <>
                        <CardItem el={item} isLarge homepage />
                        {/* <FeaturedItemImage src={image} width={704} height={550} />
                        <FeaturedItemDecription>
                            <AccountInfo image={image} />
                        </FeaturedItemDecription> */}
                    </>
                ) : (
                    <ItemPreloader>
                        <Spin indicator={antIcon} />
                    </ItemPreloader>
                )}
            </FeaturedItemWrapper>
        </>
    )
}

export default FeaturedItem
