import Image from "next/image"
import styled from "styled-components"

export const HeaderAccountImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`

export const AccordionTextItem = styled.div`
color: rgba(4,17,29,0.75);
font-weight: 600;
font-size: 16px;
`

export const BurgerDropMyAcc = styled.div`
background: rgb(251, 253, 255);
flex: 1 0 0%;
margin: 0px -24px;
overflow-y: auto;
padding: 0;
width: 100%;
display: flex;
.ant-collapse {
    width: 100%;
}

.ant-collapse {
    border: 1px solid rgb(229,232,235);
    background-color: rgb(251,253,255);
    border-bottom: none;
}

.ant-collapse > .ant-collapse-item {
    border-bottom: 1px solid rgb(229,232,235);
}

.ant-collapse-content {
    border-top: none;
}

.ant-collapse-content-box {
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: block;
    align-items: center;
    width: 100%;
    padding: 0;
    gap: 10px;
    -webkit-box-pack: justify;
    flex-shrink: 0;
   a {
    .anticon svg {
        width: 20px;
        height: 20px;
    }
   }
}

.ant-collapse-header {
    display: flex;
    align-items: center !important;
    gap: 10px;
    padding: 17px 16px 17px 4px !important;
 }
 .anticon-right {
     right: 19px !important;
 }
 .anticon-right svg {
    width: 16px;
    height: 16px;
}
          
`

export const ItemIconWrapper = styled.div`
    margin-right: 14px;
    font-size: 20px;
`

export const AccordionMenuItem = styled.a`
    padding: 10px 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #333;
    transition: .3s;
    border-top:  1px solid rgb(229,232,235);

    :hover {
        background-color: #f5f5f5;
        color: #333;
    }


`
