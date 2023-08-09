import styled from 'styled-components';

export const StyledHeader = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    background: #fff;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.06);
    padding: 10px 30px;
    box-shadow: 0 1px 10px rgb(151 164 175 / 10%);
    gap: 50px;
`

export const StyledIcon = styled.div`
   font-size:16px;
   width:44px;
   height: 44px;
   display: flex;
   align-items:center;
   justify-content:flex-end;
`

export const PreviewAudioWrapper = styled.div`
    margin: 20px 0;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    position: relative;

    > div#waveform0 {
        flex-grow: 1;
    }
`