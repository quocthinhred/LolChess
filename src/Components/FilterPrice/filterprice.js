import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import Context from "../../Context/Context";


function FilterPrice() {

    const FilterPrice = styled.div`
        display: flex;
        font-weight: bold;
        margin-top: 10px;
    `

    const ItemLeft = styled.div`
        width: 60px;
        background-color: #7c69e3;
        color: #fff;
        line-height: 35px;
        text-align: center;
        border-radius: 7px 0 0 7px;

        
    `

    const ItemRight = styled.div`
        border-radius: 0 7px 7px 0;
        color: #b22222;
        border: 1px solid #b22222 !important;
        transition: all .3s !important;
        cursor: pointer;
        text-align: center;
        line-height: 35px;
        font-family: roboto-medium;
        border: 1px solid #7c69e3;
        width: 35px;
        height: 35px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px;
        transition: all .3s;

        &:hover {
            background-color: #b22222;
            color: white;
        }
    `

    const Item = styled.div`
        cursor: pointer;
        text-align: center;
        color: #c2d4f8;
        line-height: 35px;
        font-family: roboto-medium;
        border: 1px solid #7c69e3;
        width: 35px;
        height: 35px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px;
        transition: all .3s;
        
        &:hover {
            background-color: #7c69e3;
        }

        &.active {
            background-color: #7c69e3;
        }
    `

    const filterPrice = useContext(Context)
    const [price, setPrice] = useState()
    const listPrice = [1,2,3,4,5]

    const handleClick = (index) => {
        if (price == index) {
            setPrice()
            filterPrice.FilterPrice[1]()
        }
        else{
            setPrice(index)
            filterPrice.FilterPrice[1](index + 1)
        }
    }
    
    

    return (
        <FilterPrice>
            <ItemLeft>Tiền</ItemLeft>
            {listPrice.map((item, index) => (
                <Item className={index == price ? 'active' : ''} key={index} onClick={() => handleClick(index)}>{item}</Item>
            ))}
            <ItemRight onClick={()=>{setPrice(); filterPrice.FilterPrice[1]()}}>X</ItemRight>
        </FilterPrice>
    )
}

export default FilterPrice;