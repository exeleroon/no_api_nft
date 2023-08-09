/** @format */

import { React, useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { AppstoreAddOutlined, EyeInvisibleOutlined, EyeOutlined, FormatPainterFilled } from '@ant-design/icons'
import { TabsWrapper, TabQuantity, TabsIconText, TabText } from '../../Profile/AccNavMenu/styled'
import CollectionList from '../../CollectionBlock/CollectionList'
import { useSelector, useDispatch } from 'react-redux'
import { getAllItemsByCreator, getAllItemsByOwner } from 'redux/nft-reducer'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import collectionsTest from './structure.json'

const MyProfileTabs = () => {
    const { TabPane } = Tabs

    const items = useSelector(state => state.nft.items)
    const itemsLoading = useSelector(state => state.nft.itemsLoading)
    const wallet = useSelector(state => state.auth.wallet)

    const [tab, setTab] = useState('0')

    const dispatch = useDispatch()

    const TabsRender = ({ icon, text }) => {
        return (
            <TabsIconText className='hookClass'>
                {icon}
                <TabText>{text}</TabText>
            </TabsIconText>
        )
    }

    useEffect(() => {
        // {
        //     wallet && dispatch(getAllItemsByCreator({ wallet: wallet }))
        // }
    }, [wallet])

    const onTabsClick = tabKey => {
        if (wallet) {
            if (tabKey === '0') {
                setTab('0')
                dispatch(getAllItemsByCreator({ wallet: wallet }))
            } else if (tabKey === '1') {
                setTab('1')
                dispatch(getAllItemsByOwner({ wallet: wallet }))
            }
        }
    }

    return (
        <DefaultContainer maxWidth={2000} addPadding addMargin={'16px auto 0 auto'}>
            <TabsWrapper>
                <Tabs moreIcon={<div style={{ display: 'none' }}></div>} onChange={onTabsClick}>
                    <TabPane tab={<TabsRender icon={<AppstoreAddOutlined />} text={'Собранные'} />} key='1'>
                        <CollectionList items={collectionsTest.tracked} tab={tab} itemsLoading={itemsLoading} />
                    </TabPane>
                    <TabPane tab={<TabsRender icon={<FormatPainterFilled />} text={'Созданные'} />} key='0'>
                        <CollectionList items={items} tab={tab} itemsLoading={itemsLoading} />
                    </TabPane>
                    {/* <TabPane tab={<TabsRender icon={<EyeInvisibleOutlined />} text={'Отслеживаемые'} />} key='2'>
                        <CollectionList items={items} tab={tab} itemsLoading={itemsLoading} />
                    </TabPane> */}
                </Tabs>
            </TabsWrapper>
        </DefaultContainer>
    )
}

export default MyProfileTabs
