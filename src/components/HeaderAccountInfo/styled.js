/** @format */

import Image from 'next/image'
import styled from 'styled-components'

export const HeaderAccountWrapper = styled.a`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 2px solid;
    border-radius: 50%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${({ isConfirmed }) => {
        return isConfirmed ? '#008be6' : '#c0c0c0'
    }};
`

export const HeaderAccountImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`

export const DropdownMenuWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);
    margin-top: 5px;
`

export const DropdownMenuItem = styled.a`
    padding: 10px 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #333;
    transition: 0.3s;

    :hover {
        background-color: #f5f5f5;
        color: #333;
    }

    :not(:last-child) {
        border-bottom: 1px solid #eaeaea;
    }
`
