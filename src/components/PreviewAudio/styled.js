import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 40px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 10px;
    color: #40a9ff;
`

export const PlayPauseButton = styled.div`
    margin-right: ${({btnMarRight}) => btnMarRight ? btnMarRight : '10px'};
    font-size: 38px;
    color: #40a9ff;
    display: flex;
    align-items: center;
    cursor: pointer;
`
