import React from "react";
import styled from "styled-components";
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

import Context from "../../Context/Context";

function FilterClass() {



    const FilterClass = styled.div`
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
        background-image: ${props => `url(${props.image})`};
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
    const [classList, setClassList] = useState([])
    const [class1, setClass1] = useState()
    const filterClass = useContext(Context)


    useEffect(async() => {
        let hehe = []
        let url = 'https://dtcl.gg/api/v1/champion'
        let fetchData = async () => {
            const result = await axios.get(url, 
            ).then(function (res) {
            hehe = res.data.traits
            }).catch(function (error) {
                console.log(error);
            });
        }
        await fetchData()
        if(hehe.length > 0){
            hehe.forEach(item => {
                let name = item.trait_id.slice(5).toLowerCase()
                item.image = `https://rerollcdn.com/icons/${name}.png`
            });
            setClassList(hehe.filter(item => item.type == 'class'))
        }
    }, [])

    const handleClick = (index) =>{
        if (class1 == index) {
            setClass1()
            filterClass.FilterClass[1]()
        }
        else{
            setClass1(index)
            filterClass.FilterClass[1](classList[index].trait_id)
        }
    }

    

    return (
        <FilterClass>
            <ItemLeft>Hệ</ItemLeft>
            {classList.length > 0 ? classList.map((item, index) => (
                <Item className={index == class1 ? 'active' : ''} key={index} image={item.image} onClick={ () => handleClick(index)}></Item>
            )):<></>}
            <ItemRight onClick={()=> {setClass1(); filterClass.FilterClass[1]()}}>X</ItemRight>
        </FilterClass>
    )
}

export default FilterClass;