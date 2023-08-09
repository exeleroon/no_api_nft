/** @format */
import { useState } from 'react'
import { Select, Typography } from 'antd'
// import { useMoralisDapp } from 'providers/MoralisDappProvider/MoralisDappProvider'
import { getCollectionsByChain } from 'helpers/collections'
import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
const { Paragraph } = Typography
import { useDispatch, useSelector } from 'react-redux'
import { setSearchInputVal, toggleMobMenu } from 'redux/search-reducer'

const StyledSelect = styled(Select)`
    margin-left: 0 !important;
    width: 100% !important;
    max-width: 1000px;
    :hover .ant-select-selector.ant-select-selector {
        border-right-width: 2px !important;
    }

    &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-right-width: 2px !important;
    }

    .ant-select-selector.ant-select-selector {
        border-radius: 10px;
        height: 38px;
        border: 2px solid #e7eaf3;
        padding: 0 16px;

        input {
            height: 100%;
            margin-top: 1px !important;
            margin-left: 4px !important;
        }

        .ant-select-selection-placeholder.ant-select-selection-placeholder {
            line-height: 35px;
            width: 100px;
        }
    }

    .ant-select-arrow {
        right: 20px;
        top: 15px;
    }
    .ant-select-arrow svg {
        width: 20px;
        height: 20px;
        fill: black;
    }

    @media (max-width: 767px) {
        margin: 0 -24px !important;
        width: -webkit-fill-available !important;
        .ant-select-selector.ant-select-selector {
            height: 80px;
            border: 1px solid rgb(229, 232, 235);
            border-radius: 0;
        }
        .ant-select-selection-search-input {
            height: 79px !important;
        }
        .ant-select-selection-placeholder {
            line-height: 79px !important;
        }
        .ant-select-selector.ant-select-selector {
            input {
                margin-top: 0px !important;
            }
        }
        .ant-select-arrow svg {
            width: 18px;
            height: 18px;
            fill: black;
        }
        .ant-select-arrow {
            top: 38px;
            right: 25px;
        }
    }
`

function SearchCollections() {
    // const { chainId } = useMoralisDapp()
    // const NFTCollections = getCollectionsByChain(chainId)
    const dispatch = useDispatch()
    const router = useRouter()
    const isMobMenuOpen = useSelector(state => state.search.isMobMenuOpen)
    const [inputValue, setInputValue] = useState()

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            dispatch(setSearchInputVal(inputValue))
            setInputValue('')
            router.push('/search')
        }
    }

    const handleSearchPress = () => {
        if (isMobMenuOpen) {
            dispatch(toggleMobMenu(false))
        }
        dispatch(setSearchInputVal(inputValue))
        setInputValue('')
        router.push('/search')
    }

    let rows = 1

    return (
        <>
            <StyledSelect
                showSearch
                // showArrow={false}
                open={false}
                onSearch={e => setInputValue(e)}
                onInputKeyDown={e => handleKeyPress(e)}
                suffixIcon={<SearchOutlined onClick={() => handleSearchPress()} />}
                style={{ marginLeft: '20px' }}
                placeholder={<Paragraph ellipsis={{ rows }}>Поиск треков и исполнителей</Paragraph>}
                optionFilterProp='children'
                searchValue={inputValue}
            />
        </>
    )
}
export default SearchCollections
