import styled from 'styled-components';

export const ItemSummary = styled.div`
// flex: 3 0 0%;
// max-width: 43%;
width: 45%;


@media (max-width: 867px) {
    width: 100%;
}
`

export const PreviewBlock = styled.div`
border-radius: 10px;
border: 1px solid rgb(229, 232, 235);
overflow: hidden;
margin: 20px 0px;

@media (min-width: 1024px){
    margin: 20px;
}

`

export const LikesWrapper = styled.div`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    padding: 0px;
    background: inherit;
    margin-right: 20px;

    span svg {
        color: ${({ isViewed }) => isViewed ? 'rgb(0 126 251)' : 'rgb(138, 147, 155)'};
    }

    &:hover { 
        span svg {
        color: rgb(0 126 251);
    }
}
`

export const Header = styled.div`
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
display: flex;
font-weight: 500;
padding: 12px;
height: 42px;
width: 100%;
background: rgb(255, 255, 255);
`

export const BlockchainLogo = styled.div`
display: flex;
-webkit-box-align: center;
    align-items: center;
    margin-right: 4px;
`

export const MainImg = styled.img`
display: inline-flex;
-webkit-box-align: center;
align-items: center;
font-size: 100%;
font-family: inherit;
border: 0px;
padding: 0px;
background: inherit;
`

export const Img = styled.img`
height: 100%;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    object-fit: contain;
    transition: opacity 400ms ease 0s;
    opacity: 1;
`

export const Likes = styled.div`
-webkit-box-align: center;
    align-items: center;
    display: flex;
`

export const LikeButton = styled.div`
display: inline-flex;
-webkit-box-align: center;
align-items: center;
font-size: 100%;
font-family: inherit;
border: 0px;
padding: 0px;
background: inherit;
`
export const LikeNumber = styled.p`
font-weight: 600;
font-size: 12px;
margin-left: 5px;
color: rgb(112, 122, 131);
display: flex;
margin-top: unset;
margin-bottom: unset;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
`

export const PreviewMain = styled.div`
cursor: pointer;
max-height: 500px;
width: 100%;
min-height: 200px;
border-radius: inherit;
height: 100%;
box-sizing: border-box;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    display: flex;
audio {
    width: 100%;
    background: #f1f3f4;
}
img {
    object-fit: cover;
}

@media(max-width: 867px) {
    max-height: 400px;

}

`