import React from "react";
import styled from "styled-components";

import HeaderTab from "../HeaderTab/HeaderTab";
import RoundRow from "../RoundRow/roundrow";

function RoundTab(){

    const RoundTab = styled.div`
        padding: 0 calc((100vw - 1080px)/2);
        color: #c2d4f8;
        font-size: 14px;
    `

    const FirstRow = styled.div`
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;
        height: 80px;
        background-color: #292845;
        margin-bottom: 20px;
        margin-top: 30px;
    `

    const NumRound = styled.div`
        text-align: center;
        line-height: 80px;
        height: 80px;
        width: 20px;
        background-color: #323065;
        margin-right: 15px;
        font-size: 16px;
    `

    const RoundImage = styled.div`
        position: relative;
    `

    const RoundText = styled.div`
        margin-left: 20px;
    `

    const Image = styled.img`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 20px;
        border: 2px solid #ca9372;
    `

    const ListImage = styled.div`
        position: relative;
        z-index: 2;
    `

    const Line = styled.div`
        position: absolute;
        left: 0;
        top: 21px;
        width: calc(100% - 20px);
        height: 2px;
        background-color: #ca9372;
        z-index: 0;
    `



    const ListTab = ['Round'];

    const ListRow = [
        {
            num: '2',
            image: 'https://dtcl.gg/rounds/ico_round_02krugs.png',
            text: 'Người Đá'
        },
        {
            num: '3',
            image: 'https://dtcl.gg/rounds/ico_round_03wolves.png',
            text: 'Bãi Sói'
        },
        {
            num: '4',
            image: 'https://dtcl.gg/rounds/ico_round_04raptor.png',
            text: 'Bãi Chim'
        },
        {
            num: '5',
            image: 'https://dtcl.gg/rounds/ico_round_05dragon.png',
            text: 'Rồng'
        },
        {
            num: '6',
            image: 'https://dtcl.gg/rounds/ico_round_06Herald.png',
            text: 'Cua Kì Cục Hoặc Rồng Ngàn Tuổi'
        },
        {
            num: '7',
            image: 'https://dtcl.gg/rounds/ico_round_06elderdragon.png',
            text: 'Rồng Ngàn Tuổi'
        }
    ]

    console.log(ListRow)

    return (
        <RoundTab>
            <HeaderTab listTab={ListTab}></HeaderTab>
            <FirstRow>
                <NumRound>1</NumRound>
                <RoundImage>
                    <ListImage>
                        <Image src="https://dtcl.gg/rounds/ico_round_00carrousel.png"></Image>
                        <Image src="https://dtcl.gg/rounds/ico_round_01minions.png"></Image>
                        <Image src="https://dtcl.gg/rounds/ico_round_01minions.png"></Image>
                        <Image src="https://dtcl.gg/rounds/ico_round_01minions.png"></Image>
                        <Image style={{ borderWidth: '0px' }} src="https://dtcl.gg/rounds/1200px-WikiProject_X_icon.svg.png"></Image>
                        <Image style={{ borderWidth: '0px' }}  src="https://dtcl.gg/rounds/1200px-WikiProject_X_icon.svg.png"></Image>
                        <Image style={{ borderWidth: '0px' }}  src="https://dtcl.gg/rounds/1200px-WikiProject_X_icon.svg.png"></Image>
                    </ListImage>
                    <Line></Line>
                </RoundImage>
                <RoundText>
                    <div>1: Đi Chợ</div>
                    <div style={{color: '#d2691e'}}>2-4: Quái</div>
                </RoundText>
            </FirstRow>
            {ListRow.map((item, index) => (
                <RoundRow key={index} data={item}></RoundRow>
            ))}
        </RoundTab>
    )
}

export default RoundTab;