/** @format */

import React from 'react'
import { Input, Select } from 'antd'
import { InputElWrapper, SearchElemWrapper, SearchView, SelectItemsCont, SwitchBtn, ViewStyleCont, WhenViewedBlock } from './styled'
import { HolderOutlined, AppstoreOutlined } from '@ant-design/icons'
const onSearch = value => console.log(value)
function handleChange(value) {
    console.log(`selected ${value}`)
}

const SearchElems = () => {
    const { Search } = Input
    const { Option } = Select

    return (
        <SearchElemWrapper>
            <InputElWrapper>
                <Search onSearch={onSearch} />
            </InputElWrapper>
            <SearchView>
                <SelectItemsCont>
                    <Select
                        dropdownClassName={'dropDownSelect'}
                        bordered={false}
                        className='itemsSelect'
                        defaultValue='All items'
                        onChange={handleChange}
                    >
                        <Option value='all'>Все элементы</Option>
                        <Option value='single'>Один элемент</Option>
                        <Option value='bundles'>Связки</Option>
                    </Select>
                </SelectItemsCont>
                <WhenViewedBlock>
                    <SelectItemsCont>
                        <Select
                            dropdownClassName={'dropDownSelect'}
                            bordered={false}
                            className='itemsSelect'
                            defaultValue='All items'
                            onChange={handleChange}
                        >
                            <Option value='sold'>Недавно проданные</Option>
                            <Option value='viewed'>Недавно просмотренные</Option>
                            <Option value='created'>Недавно созданные</Option>
                        </Select>
                    </SelectItemsCont>
                </WhenViewedBlock>
                {/* <ViewStyleCont>
                    <SwitchBtn>
                        <AppstoreOutlined />
                    </SwitchBtn>
                    <SwitchBtn>
                        <HolderOutlined />
                    </SwitchBtn>
                </ViewStyleCont> */}
            </SearchView>
        </SearchElemWrapper>
    )
}

export default SearchElems
