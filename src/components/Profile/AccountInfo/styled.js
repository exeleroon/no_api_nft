import styled from 'styled-components';

export const AccWrapper = styled.div`
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0px auto;
    *, ::before, ::after {
        box-sizing: border-box;
    }
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
    /* cursor: pointer; */
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
        img {
            height: 100%;
            object-fit: contain;
            transition: opacity 400ms ease 0s;
            width: 100%;
        }
`

export const UserTitleCont = styled.div`
    display: flex;
    /* margin-top: 12px; */
    max-width: 80vw;
    -webkit-box-align: center;
    align-items: center;    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(53, 56, 64);
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

export const UserTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    min-height: 40px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    gap: 10px;
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

export const Name = styled.h1`
    font-weight: 400;
    font-size: 34px;
    margin-bottom: 0px;
    color: rgb(112, 122, 131);
    margin-top: 12px;
`

export const ImgContainer = styled.img`
    width: 36px;
    margin-left: 5px;
    margin-bottom: 2px;
`

export const LikesWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 5px;
    font-size: ${({ isLarge }) => isLarge ? '25px' : '19px'};
    color: ${({ isViewed }) => isViewed ? 'rgb(0 126 251)' : 'rgb(138, 147, 155)'};

    @media (max-width: 767px) {
        font-size: ${({ isLarge }) => isLarge = '19px'};
    }
   
        &:hover {
        color: #353840; 
    }


    &:hover { 
        span svg {
        color: rgb(0 126 251);
    }
}
`


export const LikesCount = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: rgb(112, 122, 131);
    margin-left: 5px;
    height: 20px;
    margin-bottom: 0;
`