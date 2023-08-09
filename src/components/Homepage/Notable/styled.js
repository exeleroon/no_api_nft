import Image from 'next/image';
import styled from 'styled-components';

export const NotableItemsContainer = styled.div`
    padding-top: 60px;
    flex: 1 0 0%;
    // padding: 0px 28px;
    margin-bottom: 16px;
    @media (max-width: 820px) {
        padding-top: 30px;

        .ant-col {
            max-height: 500px !important;
            min-width: 240px !important;   
        }
        .ant-row {
            row-gap: 16px !important;
        }
        .ant-col-8 {
            display: block;
            flex: auto;
            max-width: 50%;
        }
    }

    @media (max-width: 520px) {
        .ant-col {
            max-height: 600px !important;
            min-width: 240px !important;
        }
       
        .ant-col-8 {
            flex: 2 1 100%;
            max-width: 100%;    
        }
}

    @media (max-width: 410px) {
        .ant-col-8 {
            max-width: 100%;
        }
    }
`

export const NotableItem = styled.div`
    color: white;
    display: inline-block;
    border: 1px solid rgb(229, 232, 235);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    overflow: hidden;
    transition: all 0.2s ease 0s;

    :hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    }

    @media (max-width: 767px) {
        margin-bottom: 30px;
    }
`


export const NotableItemImage = styled(Image)`
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: fill;
    max-height: 360px;
    min-height: 300px !important;

    @media (max-width: 767px) {
        height: auto !important;
        max-height: 360px;
        object-fit: cover;
      
    }
}
`
export const NotableImgCont = styled.div`
margin-bottom: -7px;

   span {
    min-height: 300px;
   } 

`

export const ItemPreloader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 280px;
    margin: 0 auto;
    
    @media (max-width: 767px) {
        // height: 300px;
    }
`


export const NotableItemDescription = styled.div`
    background-color: ${props => props.color};
    padding: 20px 35px 26px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 767px) {
        padding: 14px 25px 20px;
    }
`

export const NotableItemTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
`

export const NotableItemSubtitle = styled.div`
    font-size: 14px;
    font-weight: 400;
    max-width: 90%;
    margin: 20px auto 4px;

    @media (max-width: 767px) {
        margin: 14px auto 4px;
    }
`

export const NotableItemButton = styled.a`
    margin-top: 40px;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);
    font-weight: 500;
    font-size: 14px;
    padding: 8px 20px 7px;
    display: inline-block;

    &:hover {
        color: ${({hoverColor}) => hoverColor};
        background-color: white;
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    }
    transition: all 0.2s ease 0s;

    @media (max-width: 767px) {
        margin-top: 24px;
    }

`
