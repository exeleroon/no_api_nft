import styled from 'styled-components';

export const HowToUseItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    svg {
        width: 35px;
        height: 35px;
        fill: #1890ff;
    }

    @media (max-width: 767px) {
        margin-bottom: 40px;
    }
`

export const HowToUseImage = styled.img`
    
`

export const HowToUseName = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: rgb(4, 17, 29);
    margin-bottom: 4px;
    margin-top: 14px;
`

export const HowToUseDescription = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: rgb(112, 122, 131);
    margin-top: 4px;
    text-align: center;
`