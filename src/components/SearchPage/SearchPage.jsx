/** @format */

import { ArrowLeftOutlined, ArrowRightOutlined, DownOutlined, FilterOutlined, UpOutlined, LoadingOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import {
    ButtonClose,
    ButtonOpen,
    Container,
    ContainerButton,
    FilterContainer,
    FilterContainerOpen,
    Header,
    HeaderContainer,
    HeaderLabel,
    IconContainer,
    InnerContainer,
    LookForContainer,
    SearchContainer,
    SearchResults,
    StyledSublabel,
    ItemPreloader,
    AltText,
    InvisibleFilterContainer
} from './styled.jsx'
import { Flex } from 'uikit/Flex/Flex'
import { StyledButton, StyledCheckbox, StyledInput } from 'uikit/FormComponents/styled'
import { Form, message, Radio, Spin } from 'antd'
import cardsFields from '../Profile/AccNavMenu/structure'
import CollectionList from 'components/CollectionBlock/CollectionList'
import { useDispatch, useSelector } from 'react-redux'
import { searchByArtist } from 'redux/search-reducer.js'
import useDebouncedSearch from './DebounceHook.jsx'
import ArtistCard from 'components/ArtistCard/ArtistCard.jsx'

const Searchpage = () => {
    const [priceVisible, setPriceVisible] = useState(true)
    const [isOpen, setIsOpen] = useState(true)
    const isByArtist = useSelector(state => state.search.searchByArtist)
    const searchInputTxt = useSelector(state => state.search.searchInputValue)
    const [radioValue, setRadioValue] = useState('global')
    const dispatch = useDispatch()
    const formRef = useRef(null)

    useEffect(() => {
        setInputText(searchInputTxt)
        formRef.current.setFieldsValue({
            artist_or_name: searchInputTxt
        })
    }, [searchInputTxt])

    const antIcon = <LoadingOutlined style={{ fontSize: 55, color: 'black' }} spin />

    const onFinish = async values => {
        message.success('Filter!')
    }

    const onFinishFailed = () => {
        message.error('Submit failed!')
    }

    const setSearchByArtist = () => {
        dispatch(searchByArtist(false))
    }

    const onChange = e => {
        setRadioValue(e.target.value)
    }

    const useSearchPage = () => useDebouncedSearch(text => results(text))
    const { inputText, setInputText, searchResults } = useSearchPage()

    const results = text => {
        let res = []

        if (radioValue === 'global') {
            cardsFields.tracked.filter(card => {
                if (card.artist.toLowerCase().includes(text) || card.name.toLowerCase().includes(text)) {
                    return res.push(card)
                }
            })
        } else if (radioValue === 'artist') {
            cardsFields.tracked.filter(card => {
                if (card.artist.toLowerCase().includes(text)) {
                    return res.push(card)
                }
            })
        } else if (radioValue === 'songName') {
            cardsFields.tracked.filter(card => {
                if (card.name.includes(text).includes(text)) {
                    return res.push(card)
                }
            })
        }

        return res
    }

    return (
        <>
            <SearchContainer>
                {!isOpen ? (
                    <FilterContainer>
                        <ButtonOpen
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            <IconContainer>
                                <FilterOutlined style={{ fontSize: '20px', color: 'rgba(4, 17, 29, 0.5)' }} />

                                {/* <ArrowRightOutlined style={{ color: 'rgba(4, 17, 29, 0.5)' }}/> */}
                            </IconContainer>
                        </ButtonOpen>
                    </FilterContainer>
                ) : (
                    <>
                        {/* <InvisibleFilterContainer /> */}
                        <FilterContainerOpen>
                            <HeaderContainer>
                                <Header>
                                    <HeaderLabel>
                                        <FilterOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
                                        Фильтр
                                    </HeaderLabel>
                                    <ButtonClose
                                        onClick={() => {
                                            setIsOpen(!isOpen)
                                        }}
                                    >
                                        <ArrowLeftOutlined style={{ color: 'rgba(4, 17, 29, 0.5)' }} />
                                    </ButtonClose>
                                </Header>
                            </HeaderContainer>
                            <Form
                                name='filter_form'
                                initialValues={{ artistOnly: isByArtist ? true : false }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                ref={formRef}
                            >
                                <LookForContainer>
                                    <StyledSublabel>Поиск NFT</StyledSublabel>
                                    <Form.Item name='artist_or_name'>
                                        <StyledInput
                                            defaultValue={searchInputTxt}
                                            value={inputText}
                                            onChange={e => setInputText(e.target.value.toLowerCase())}
                                            placeholder='Имя артиста или название аудио'
                                            size='large'
                                        />
                                    </Form.Item>
                                    {/* <Form.Item onClick={setSearchByArtist} name='artistOnly' valuePropName='checked' style={{ marginBottom: '0px' }}>
                                        <StyledCheckbox>Поиск по имени артиста</StyledCheckbox>
                                    </Form.Item>
                                    <Form.Item name='audioOnly' valuePropName='checked' style={{ marginBottom: '0px' }}>
                                        <StyledCheckbox>Поиск по названию аудио</StyledCheckbox>
                                    </Form.Item> */}
                                    <Radio.Group onChange={onChange} value={radioValue}>
                                        <Radio value={'global'}>Глобальный поиск</Radio>
                                        <Radio value={'artist'}>Поиск по имени артиста</Radio>
                                        <Radio value={'songName'}>Поиск по названию аудио</Radio>
                                    </Radio.Group>
                                </LookForContainer>
                                {/* <Container>
                                    <ContainerButton htmlType='button' onClick={() => setPriceVisible(!priceVisible)}>
                                        <span>Цена</span>
                                        {priceVisible ? (
                                            <UpOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                                        ) : (
                                            <DownOutlined style={{ fontSize: '12px', marginLeft: 'auto', color: 'rgba(4, 17, 29, 0.5)' }} />
                                        )}
                                    </ContainerButton>
                                    {priceVisible && (
                                        <InnerContainer>
                                            <Flex container='flex' alignItems='center'>
                                                <Form.Item name='price_min' style={{ marginBottom: '0px' }} hasFeedback>
                                                    <StyledInput placeholder='Мин' size='large' />
                                                </Form.Item>
                                                &nbsp;-&nbsp;
                                                <Form.Item name='price_max' style={{ marginBottom: '0px' }} hasFeedback>
                                                    <StyledInput placeholder='Mакс' size='large' />
                                                </Form.Item>
                                            </Flex>
                                            <Form.Item name='isFiat' valuePropName='checked' style={{ marginTop: '20px', marginBottom: '0px' }}>
                                                <StyledCheckbox>Фиатная валюта</StyledCheckbox>
                                            </Form.Item>
                                            <Form.Item name='isNFT' valuePropName='checked' style={{ marginBottom: '0px' }}>
                                                <StyledCheckbox>NFT</StyledCheckbox>
                                            </Form.Item>
                                            <StyledButton type='primary' htmlType='submit' style={{ marginTop: '20px' }}>
                                                Применить
                                            </StyledButton>
                                        </InnerContainer>
                                    )}
                                </Container> */}
                            </Form>
                        </FilterContainerOpen>
                    </>
                )}
                <SearchResults>
                    {searchResults?.loading ? (
                        <ItemPreloader>
                            <Spin indicator={antIcon} />
                        </ItemPreloader>
                    ) : searchResults.result?.length === 0 && inputText?.length > 0 ? (
                        <AltText>Нет совпадений</AltText>
                    ) : (
                        <CollectionList items={inputText?.length === 0 ? cardsFields.tracked : searchResults?.result} />
                    )}
                {searchResults?.error && <AltText noSearchText>Введите ключевые слова поиска</AltText>}

                </SearchResults>

            </SearchContainer>
        </>
    )
}

export default Searchpage
