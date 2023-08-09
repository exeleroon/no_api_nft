/** @format */

import { React, useEffect, useRef, useState } from 'react'
import { Tabs } from 'antd'
import { AppstoreAddOutlined, EyeOutlined, FormatPainterFilled } from '@ant-design/icons'
import { TabQuantity, TabsIconText, TabsWrapper, TabText } from './styled'
import CollectionList from '../../CollectionBlock/CollectionList'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { useInView } from 'react-intersection-observer'
import { useSelector, useDispatch } from 'react-redux'
import { getAllItemsByCreator, getAllItemsByOwner } from 'redux/nft-reducer'

const AccountTabs = () => {
    const { TabPane } = Tabs

    const items = useSelector(state => state.artist.items)
    const itemsLoading = useSelector(state => state.artist.itemsLoading)
    const wallet = useSelector(state => state.artist.item?.wallet)

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

    // const [inViewRef, inView] = useInView();
    // const [inViewRef2, inView2] = useInView(); for multi items

    // const [ref, inView] = useInView({
    //     threshold: 0
    // })

    // const [t, sT] = useState(5)
    // const test = () => {
    //     if(inView === true) {
    //         sT(t+5)
    //     }
    //     return cardsFields.tracked.length = t
    // }

    // useEffect(() => {
    //    return test()
    // }, [inView])

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollCheck, { passive: true });
    //     return () => window.removeEventListener('scroll', scrollCheck);
    // })

    useEffect(() => {
        // {
        //     wallet && dispatch(getAllItemsByCreator({ wallet: wallet }))
        // }
    }, [wallet])

    const onTabsClick = tabKey => {
        // router.push(window.location.href + '/' + tabsContent[tabKey].slug)
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
                <Tabs onChange={onTabsClick}>
                    <TabPane tab={<TabsRender icon={<FormatPainterFilled />} text={'Созданные'} />} key='0'>
                        <CollectionList items={items} tab={tab} itemsLoading={itemsLoading} />
                    </TabPane>
                    <TabPane tab={<TabsRender icon={<AppstoreAddOutlined />} text={'Собранные'} />} key='1'>
                        <CollectionList items={items} tab={tab} itemsLoading={itemsLoading} />
                    </TabPane>
                    {/* <TabPane tab={<TabsRender icon={<EyeOutlined />} text={'Отслеживаемые'} quantity={cardsFields?.tracked.length} />} key='2'>
                        <CollectionList switchTabPlus={cardsFields?.tracked.length} fields={cardsFields.tracked} />
                    </TabPane> */}
                </Tabs>
                <span></span>
            </TabsWrapper>
        </DefaultContainer>
    )
}

export default AccountTabs
