import styled from 'styled-components';


export const AccountLinksContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 8px;
    width: 100%;
    // position: sticky;
    top: 72px;
    z-index: 40;
    left: 0px;
    height: 72px;
    margin-bottom: calc(-72px);
    transition: opacity 0.2s ease-in 0s;
    @media (min-width: 600px) {
        padding: 0px 24px;
        opacity: 1;
        border: 0px;
        height: 98px;
        margin-bottom: calc(-98px);
    }
`

export const LeftSideLinks = styled.div `
    display: flex;
    max-height: 100%;
    *, ::before, ::after {
        box-sizing: border-box;
    }
`

export const LeftLinks = styled.div `
    width: fit-content;
`

export const RightSideLinks = styled.div `
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    max-height: 100%;
    *, ::before, ::after {
        box-sizing: border-box;
    }
`

export const ActionBtnsWrapper = styled.div `
    width: fit-content;
    display: flex; 
    z-index: 2;
    // border: 1px solid rgb(229, 232, 235);
    border-radius: 10px;
   
    .ant-dropdown-trigger.ant-dropdown-link {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    transition: all 0.2s ease 0s;
`

export const ActionBtn = styled.button `
    font-size: 24px;
    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: 600;
    border: 1px solid rgb(229, 232, 235);
    padding: 12px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    appearance: button;
    cursor: pointer;
    color: rgb(112,122,131);
    &:hover {
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            z-index: 1;
            color: rgb(53, 56, 64);
    }
    
}
`

export const ActionBtnR = styled.a `
    font-size: 24px;
    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: 600;
    padding: 12px;
    border-left: none;
    border: 1px solid rgb(229, 232, 235);
    z-index: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    color: rgb(112, 122, 131);
    appearance: button;
    cursor: pointer;

    &:hover {
        box-shadow: rgb(4 17 29 / 25%) 2px 0px 7px 0px;
        z-index: 1;
        color: rgb(53, 56, 64);
    }
    transition: all 0.2s ease 0s;
}
`

export const DropDownWrapper = styled.div `
    max-height: 350px;
    overflow-y: auto;
    box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px;
    color: rgb(4, 17, 29);
    max-width: initial;
    min-width: 220px;
    border-radius: 10px;
`

export const DropDownMenu = styled.ul `
    border: none;
    border-radius: 10px 0 0 0;
    margin: 0px;
    list-style-type: none;
    li:not(:last-child) {
        border-bottom: 1px solid rgb(229, 232, 235);
    }
`

export const DropMenuBtn = styled.button `
    border: none;
    overflow: hidden;
    width: 100%;
    font-weight: 600;
    padding: 16px;
    background-color: rgb(255, 255, 255);
    color: rgb(53, 56, 64);
    text-align: left;
    display: flex;
    &:hover {
        transition: all 0.2s ease 0s;
        background-color: rgb(251, 253, 255);
        box-shadow: rgb(4 17 29 / 25%) 1px 7px 8px 7px;
    }

`

export const ImageDropCont = styled.div `
    display: flex;
    align-self: center;
    order: 2;
    margin-right: 16px;
    flex-shrink: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
`

export const DropBtnText = styled.div `
        align-self: stretch;
        flex: 1 1 auto;
        flex-flow: column;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: 16px;
        order: 3;
        overflow: hidden;
        font-size: 16px;
        align-items: flex-start;
        font-weight: 600;
        font-size: 14px;
        color: rgb(4, 17, 29);
    `
