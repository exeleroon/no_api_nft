/** @format */

import React from 'react'
import { useSelector } from 'react-redux'
import { DefaultContainer } from 'uikit/DefaultContainer/styled'
import { DefaultTitle } from 'uikit/DefaultTitle/styled'
import { Table, Tag, Space } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { TableWrapper } from './styled'

const columns = [
    {
        title: '',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: 'NFT Music',
        dataIndex: 'nft',
        key: 'nft'
    },
    {
        title: 'Opensea',
        dataIndex: 'opensea',
        key: 'opensea'
    },
    {
        title: 'Air NFTs',
        dataIndex: 'air',
        key: 'air'
    },
    {
        title: 'NFT Tone',
        dataIndex: 'nft_tone',
        key: 'nft_tone'
    }
]

const data = [
    {
        key: '1',
        type: 'роялти музыканту',
        nft: '8%',
        opensea: '0-10%',
        air: '0%',
        nft_tone: '0%'
    },
    {
        key: '1',
        type: 'комиссия сервиса',
        nft: '2%',
        opensea: '2.5%',
        air: '2.5%',
        nft_tone: '8%'
    }
]

const ServiceComparison = () => {

    return (
        <DefaultContainer addPadding addMargin={'40px auto'}>
            <DefaultTitle>Сравнение сервисов</DefaultTitle>
            <TableWrapper>
                <Table columns={columns} pagination={false} dataSource={data} />
            </TableWrapper>
        </DefaultContainer>
    )
}

export default ServiceComparison
