import styled from 'styled-components';

export const AccWrapper = styled.div`
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0px auto;
    @media (min-width: 600px) {
        max-width: 500px;
    }

`

export const ImageContainer = styled.div`
    position: relative;
    z-index: 1;

`

export const ProfileImageSheet = styled.div`
    position: relative;
    border: 2px solid rgb(255, 255, 255);
    background-color: rgb(255, 255, 255);
    margin-top: -64px;
    border-radius: 50%;
    width: 130px;
    min-width: 130px;
    height: 130px;
    min-height: 130px;
`

export const AccImageDiv = styled.div`
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    position: relative;

    img {
        height: 100%;
        object-fit: contain;
        transition: opacity 400ms ease 0s;
        width: 100%;
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: 0;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: 0.2s;
    }

    :hover::after {
        opacity: 1;
    }

    .edit-icon-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 24px;
        color: #000;
        opacity: 0;
        color: #fff;
        pointer-events: none;
        z-index: 1;
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :hover .edit-icon-container {
        opacity: 1;
        pointer-events: all;
    }
    
    img {
        height: 100%;
        object-fit: contain;
        transition: opacity 400ms ease 0s;
        width: 100%;
    }
    
    .anticon-edit svg {
        display: none;
        position: absolute;
        width: 25px;
        height: 25px;
        left: 50%;
        top: 50%;
        fill: white !important;
        transform: translate(-50%, -50%);
    }

    .greySheet {
        display: none;
        border-radius: 50%;
        background-color: #0000002b;
        width: 120px;
        height: 120px;
        position: absolute;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 1);

        .greySheet {
            display: block;
        }

        .anticon-edit svg {
            display: block;
    }
}
`

export const GreySheet = styled.div`
      
`

export const UserTitleCont = styled.div`
    display: flex;
    max-width: 80vw;
    -webkit-box-align: center;
    align-items: center;    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(53, 56, 64);
    /* margin-top: 12px; */
`
export const UserTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    min-height: 40px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const UserTitleSecond = styled.h1`
    font-size: 30px;
    font-weight: 600;
    min-height: 40px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px;
`

export const UserSubtitle = styled.div`
    -webkit-box-align: center;
    align-items: center;
    padding: 4px 8px;
    border: 1px solid rgb(229, 232, 235);
    border-radius: 16px;
    display: flex;
    min-height: 18px;
    margin-top: 0px;
    position: relative;
`

export const SubTitleIcon = styled.div`
    display: flex;
    cursor: pointer;
`

export const UnStyledBtn = styled.button`
    display: flex;
    margin: 0 8px;
    color: rgb(112, 122, 131);
    font-weight: 500;
    font-size: 16px;
    font-family: inherit;
    border: 0px;
    line-height: 12px;
    padding: 0px;
    background: inherit;
    appearance: button;
    cursor: pointer;

    &:hover {
        color: rgb(53, 56, 64);
    }
}
`

export const JoinData = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: rgb(112, 122, 131);
`

export const StyledIcon = styled.a`
   color:rgb(53,56,64);
  
   &:hover {
    color:rgb(53,56,64);
    }
`

export const Name = styled.h1`
    font-weight: 400;
    font-size: 34px;
    color: rgb(112, 122, 131);
    margin-bottom: 0px;
    margin-top: 12px;
`

export const ImgContainer = styled.img`
    width: 36px;
    margin-left: 5px;
    margin-bottom: 2px;
`

export const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`