import React from "react";
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

import Context from "../../Context/Context";


function ListChampion() {

    const ListChampion = styled.div`
        padding: 20px;
        background-color: #292845;
        display: flex;
        flex-wrap: wrap;

    `

    const Champion = styled.div`
        position: relative;
        width: 45px;
        font-size: 11px;
        margin: 5px;
        color: #c2d4f8;
        text-align: center;

        & .detail{
            visibility: hidden;  
            opacity: 0;  
            transition: 0.3s;
        }

        &:hover .detail{
            visibility: visible;
            opacity: 90%;
            transition: all 0.5s linear;
        }
    `


    const ChampionAvatar = styled.img`
        border-radius: 50%;
        border: 2px solid #707070;
        border-color: ${props => {
            if (props.cost == 1){
                return '#707070'
            }
            else if (props.cost == 2){
                return '#11b288'
            }
            else if (props.cost == 3){
                return '#207ac7'
            }
            else if (props.cost == 4){
                return '#c03fd6'
            }
            else {
                return '#feb83a'
            }
        }};
        width: 45px;
    `

    const ChampionDetail = styled.div`
        position: absolute;
        background-color: rgba(0,0,0,.85);
        width: 300px;
        border-radius: 5px;
        text-align: left;
        padding: 0 10px;
        padding-bottom: 20px;
        top: 70px;
        right: -130px;
        z-index: 999999;
        opacity: 90%;

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 20px;
            background-color: transparent;
            top: -10px;
            right: 0;
        }
    `

    const DetailHeader = styled.div`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        background-color: rgba(0,0,0,.9);
        line-height: 40px;
        border-bottom: 1px solid rgba(255,255,255,.251);
    `

    const ChampionName = styled.div`
        font-family: roboto-bold;
        font-size: 16px;
        color: #3dd0d8;
        font-weight: bold;
    `

    const Price = styled.div`
        color: #ffb93b;
        font-size: 16px;
    `

    const ClassIcon = styled.img`
        width: 25px;
        margin-right: 5px;
        transform: translateY(7px);
    `

    const ClassName = styled.span`
        font-size: 14px;
        color: #80afdc;
    `
    const Range = styled.div`
        display: flex;
        margin-top: 20px;
        color: white;
        font-weight: bold;
        font-size: 14px;
    `

    const RangeList = styled.div`
        display: flex;
        margin-left: 10px;
        align-items: center;
        transform: translateY(2px);
    `

    const RangeItem = styled.div`
        width: 13px;
        height: 13px;
        margin-right: 3px;
        border: 1px solid #3dd0d8;

        &.fill {
            background-color: #3dd0d8;
        }
    `

    const Skill = styled.div`
        display: flex;
        margin-top: 20px;
    `

    const AvatarSkill = styled.img`
        width: 33px;
        height: 33px;
        margin-right: 10px;
    `

    const SkillName = styled.div`
        color: #80afdc;
        font-size: 12px;
        margin-bottom: 3px;
        font-weight: bold;
    `

    const SkillDescription = styled.div`
        font-size: 12px;
        padding: 15px 0;
        color: #8ab3dd;
        line-height: 16px;
    `

    const SkillEffect = styled.div`
        color: white;
        font-size: 12px;
    `

    const Recommend = styled.div`
        color: white;
        font-weight: bold;
        font-size: 14px;
        margin-top: 20px;
    `

    const Image = React.memo(function Image({ src }) {
        return <img src={src} />;
      });

    const filter = useContext(Context)

    let champions = []
    const [fullChampion, setFullChampion] = useState([]);
    const [listChampion, setListChampion] = useState([])


    useEffect(async () => {
        
        let url = 'https://dtcl.gg/api/v1/champion'
        let fetchData = async () => {
            const result = await axios.get(url, 
            ).then(function (res) {
                champions = res.data.champions
            }).catch(function (error) {
                console.log(error);
            });
        }
        await fetchData()
        champions.forEach(item => {
            if (item.champion_id == "TFT6_MercenaryChest" || item.champion_id == "TFT6_TheGoldenEgg"){
                item.image = "";
            }
            item.image = `https://dtcl.gg/champions/${item.champion_id}.png`
        });
        console.log(champions)
        setListChampion(champions)
        setFullChampion(champions)
    }, [])

    useEffect(()=>{
        if (!filter.FilterPrice[0]){
            setListChampion(fullChampion)
        }
        else {
            setListChampion(fullChampion.filter(item => item.cost == filter.FilterPrice[0]))
        }

    }, [filter.FilterPrice[0]])

    useEffect(()=>{
        
        if (!filter.FilterClass[0]){
            setListChampion(fullChampion)
        }
        else {
            setListChampion(fullChampion.filter(item => item.traits.filter(item2 => item2.trait_id == filter.FilterClass[0]).length > 0))
        }

    }, [filter.FilterClass[0]])

    useEffect(()=>{
        
        if (!filter.FilterOrigin[0]){
            setListChampion(fullChampion)
        }
        else {
            setListChampion(fullChampion.filter(item => item.traits.filter(item2 => item2.trait_id == filter.FilterOrigin[0]).length > 0))
        }

    }, [filter.FilterOrigin[0]])

    return (
        <ListChampion>
            {listChampion.map((item, index) => (
                <Champion key={item.champion_id}>
                    <ChampionAvatar cost={item.cost} src={item.image}/>
                    <span>{item.name}</span>
                    <ChampionDetail className="detail">
                        <DetailHeader>
                            <ChampionName>{item.name}</ChampionName>
                            <Price>
                                <FontAwesomeIcon icon={faCoins} />
                                <span style={{ color: 'white', marginLeft: '3px' }}>{item.cost}</span>
                            </Price>
                        </DetailHeader>
                        <div>
                            {item.traits.map((item2, index2) => (
                                <div key={item2.trait_id}>
                                    <ClassIcon src={`https://rerollcdn.com/icons/${item2.trait_id.slice(5).toLowerCase() == 'yordlelord' ? 'yordle' : item2.trait_id.slice(5).toLowerCase()}.png`} />
                                    <ClassName>{item2.name}</ClassName>
                                </div>
                            ))}
                            <Range>
                                <span>Tầm đánh: </span>
                                <RangeList>
                                    <RangeItem className={item.property.range >= 1 ? 'fill' : ''}></RangeItem>
                                    <RangeItem className={item.property.range >= 2 ? 'fill' : ''}></RangeItem>
                                    <RangeItem className={item.property.range >= 3 ? 'fill' : ''}></RangeItem>
                                    <RangeItem className={item.property.range >= 4 ? 'fill' : ''}></RangeItem>
                                    <RangeItem className={item.property.range >= 5 ? 'fill' : ''}></RangeItem>
                                </RangeList>
                            </Range>
                            <Skill>
                                <AvatarSkill src={`https://dtcl.gg/skill/${item.skill.img}`}/>
                                <div>
                                    <SkillName>{item.skill.name}</SkillName>
                                    <div style={{ fontSize: '11px', color: 'white' }}>
                                        <span>Mana: </span>
                                        <span>{item.property.mana}</span>
                                    </div>
                                </div>
                            </Skill>
                            <SkillDescription>{item.skill.description}</SkillDescription>
                            <SkillEffect>
                                {item.skill.sets.map((item3, index3) => (
                                    <span key={item3.name}>{item3.name}: {item3.description}<br /></span>
                                ))}
                            </SkillEffect>
                            <Recommend>Khuyên dùng</Recommend>
                        </div>
                    </ChampionDetail>
                </Champion>
            ))}
            
        </ListChampion>
    )
}

export default ListChampion;