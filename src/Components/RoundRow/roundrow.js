import React from "react";
import styled from "styled-components";

function RoundRow(props) {

    const Row = styled.div`
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

    console.log(props)

    return (
        <Row>
            <NumRound>{props.data.num}</NumRound>
                <RoundImage>
                    <ListImage>
                        <Image src="https://dtcl.gg/rounds/ico-round-user@2x.png"></Image>
                        <Image src="https://dtcl.gg/rounds/ico-round-user@2x.png"></Image>
                        <Image src="https://dtcl.gg/rounds/ico-round-user@2x.png"></Image>
                        <Image src="https://dtcl.gg/rounds/ico_round_00carrousel.png"></Image>
                        <Image style={{ borderWidth: '0px' }} src="https://dtcl.gg/rounds/ico-round-user@2x.png"></Image>
                        <Image style={{ borderWidth: '0px' }}  src="https://dtcl.gg/rounds/ico-round-user@2x.png"></Image>
                        <Image style={{ borderWidth: '0px' }}  src={props.data.image}></Image>
                    </ListImage>
                    <Line></Line>
                </RoundImage>
                <RoundText>
                    <div>1-3: Người Chơi <span style={{margin: '0 10px'}}>|</span> 4: Đi Chợ <span style={{margin: '0 10px'}}>|</span> 5-6: Người Chơi</div>
                    <div style={{color: '#d2691e'}}>7: {props.data.text}</div>
                </RoundText>
        </Row>
    )
}

export default RoundRow;