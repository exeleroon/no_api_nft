import Image from 'next/image';
import styled from 'styled-components';

export const FeaturedItemWrapper = styled.div`
    background-color: #fff;
    border-radius: 10px;
    z-index: 2;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 10px 0px;
    overflow: hidden;
    transition: box-shadow 0.3s ease-in 0s;
    width: fit-content;
    margin: 0 auto;
    
    :hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 50px 0px;
    }
`

export const FeaturedItemImage = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 550px;

    @media (max-width: 767px) {
        height: 300px;
    }
`

export const FeaturedItemDecription = styled.div`
    width: 100%;
    font-weight: 600;
    padding: 16px;
    color: rgb(53, 56, 64);
    text-align: left;
`

export const ItemPreloader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 400px;

    @media (max-width: 767px) {
        height: 350px;
        width: 300px;
    }

`