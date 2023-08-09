import styled from 'styled-components';

export const AccountInfoWrapper = styled.div`
    display: flex;
    font-size: 16px;
`

export const AccountInfoAvatar = styled.a`
    display: flex;
    margin-right: 16px;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 50%;
    object-fit: cover;
    width: 40px;
    height: 40px;

`

export const AccountInfoCreatorAndName = styled.div`
    display: flex;
    flex-direction: column;
`

export const AccountInfoName = styled.a`
    font-size: 14px;
    color: rgb(4, 17, 29);
`

export const AccountInfoCreator = styled.a`
    color: rgb(32, 129, 226);
    font-weight: 500;
    font-size: 14px;
`
