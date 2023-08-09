import styled from 'styled-components';


export const DropdownMenuWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.15);
    margin-top: 5px;
    max-width: 500px;
`

export const DropdownMenuItem = styled.a`
    padding: 10px 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #333;
        transition: .3s;

    :hover {
        background-color: #f5f5f5;
        color: #333;
    }

    :not(:last-child) {
        border-bottom: 1px solid #eaeaea;
    }
`

export const ItemIconWrapper = styled.div`
    margin-right: 14px;
    font-size: 20px;
`

export const ItemTextWrapper = styled.div`
    font-weight: 600;
    font-size: 15px;
`