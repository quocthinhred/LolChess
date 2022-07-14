import React from "react";
import styled from "styled-components";
import HeaderTab from "../HeaderTab/HeaderTab";

function KeyTab(){

    const KeyBoardImg = styled.img`
        width: 70%;
        margin-top: 50px;
    `

    const KeyTab = styled.div`
        padding: 0 calc((100vw - 1080px)/2);
        color: #c2d4f8;
        font-size: 13px;
    `

    const Key = styled.div`
        background: #ffc528;
        padding: 5px;
        min-width: 35px;
        color: black;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        width: fit-content;
        margin-right: 15px;
    `

    const RedKey = styled(Key)`
        color: white;
        background: #ed6767;
    `

    const GreenKey = styled(Key)`
        color: white;
        background: #84ae0c;
    `

    const Row = styled.div`
        display: flex;
        margin: 20px 0;
    `

    const Table = styled.div`
        display: flex;
        background: #292845;
        width: 70%;
        justify-content: space-between;
        padding: 0 30px;
    `

    const Description = styled.div`
        max-width: 200px;
    `

    const Header = styled.div`
        font-size: 18px;
        color: white;
        font-weight: bold;
        text-align: center;
        background: #19182a;
        line-height: 50px;
        width: 70%;
    `

    const Guide = styled.div`
        margin-top: 50px;
    `


    const ListTab = ['Phím tắt'];

    return (
        <KeyTab>
            <HeaderTab listTab={ListTab}></HeaderTab>
            <KeyBoardImg src="/Images/keyboard.png" />
            <Guide>
                <Header>Phím Tắt</Header>
                <Table>
                    <div>
                        <Row>
                            <Key>W</Key>
                            <Description>Đưa tướng từ hàng chờ vào bàn đấu hoặc ngược lại</Description>
                        </Row>
                        <Row>
                            <Key>E</Key>
                            <Description>Bán tướng</Description>
                        </Row>
                        <Row>
                            <Key>D</Key>
                            <Description>Xoay tướng</Description>
                        </Row>
                        <Row>
                            <Key>F</Key>
                            <Description>Mua kinh nghiệm</Description>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <RedKey>1</RedKey>
                            <RedKey>Q</RedKey>
                            <Description>Xem đội hình khác (Theo chiều kim đồng hồ).</Description>
                        </Row>
                        <Row>
                            <RedKey>3</RedKey>
                            <RedKey>R</RedKey>
                            <Description>Xem đội hình khác (Ngược chiều kim đồng hồ).</Description>
                        </Row>  
                        <Row>
                            <GreenKey>2</GreenKey>
                            <GreenKey>Space</GreenKey>
                            <Description>Quay về đội hình mình.</Description>
                        </Row>
                    </div>
                </Table>
            </Guide>
        </KeyTab>
    )
}

export default KeyTab;