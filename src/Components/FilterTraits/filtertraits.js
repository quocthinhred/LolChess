import React from "react";
import styled from "styled-components";
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

import Context from "../../Context/Context";


function FilterTraits() {


    const FilterTraits = styled.div`
        display: flex;
        font-weight: bold;
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


    const filterOrigin = useContext(Context)
    const [originList, setOriginList] = useState([])
    const [trait, setTrait] = useState()


    useEffect(async () => {
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
                if (name == 'yordlelord'){
                    name = 'yordle'
                }
                item.image = `https://rerollcdn.com/icons/${name}.png`
            });
            setOriginList(hehe.filter(item => item.type == 'origin'))
        }
    }, [])

    
    const handleClick = (index) =>{
        if (trait == index) {
            setTrait()
            filterOrigin.FilterOrigin[1]()
        }
        else{
            setTrait(index)
            filterOrigin.FilterOrigin[1](originList[index].trait_id)
        }
    }


    return (
        <FilterTraits>
            <ItemLeft>Tộc</ItemLeft>
            {originList.length > 0 ? originList.map((item, index) => (
                <Item className={index == trait ? 'active' : ''} key={index} image={item.image} onClick={ () => handleClick(index)}></Item>
            )) : <></>}
            <ItemRight onClick={()=>{setTrait(); filterOrigin.FilterOrigin[1]()}}>X</ItemRight>
        </FilterTraits>
    )
}

export default FilterTraits;