import React from "react";
import styled from "styled-components";
import HeaderTab from "../HeaderTab/HeaderTab";

function RollTab(){

    const RollTab = styled.div`
        padding: 0 calc((100vw - 1080px)/2);
        color: #c2d4f8;
        font-size: 14px;
    `

    const HeaderRoll = styled.div`
        font-weight: 600;
        color: #fff;
        margin-top: 50px;
        font-size: 14px;
        margin-bottom: 30px;
    `

    const TableRoll = styled.div`
        width: 65%;
        margin-bottom: 150px;
    `

    const HeaderTable = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #181728cc;
        padding: 10px 35px;

    `

    const TierImg = styled.img`
        width: 20px;
        height: 20px;
        transform: translateX(10px);
    `

    const TierText = styled.div`
        margin-top: 5px;
        font-size: 9px;
        text-align: center;
    `

    const TableRow = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px 35px;
        background: #292845;
        margin-bottom: 2px;
    `

    const TableShell = styled.div`
        text-align: center;
        font-size: 11px;
        width: 40px;

        &.stt{
            color: white;
            font-size: 13px;
        }

        &.zero{
            color: #c2d4f875;
        }
    `


    const ListTab = ['Re-Roll']
    return (
        <RollTab>
            <HeaderTab listTab={ListTab}></HeaderTab>
            <HeaderRoll>TỈ LỆ ROLL</HeaderRoll>
            <TableRoll>
                <HeaderTable>
                    <div style={{color: 'white', fontSize: '16px'}}>Level</div>
                    <div>
                        <div style={{lineHeight: '23px', color: 'white'}}>1 Vàng</div>
                        <TierText>(29 tướng)</TierText>
                    </div>
                    <div>
                        <TierImg src="https://dtcl.gg/roll/tier2.png" />
                        <TierText>(22 tướng)</TierText>
                    </div>
                    <div>
                        <TierImg src="https://dtcl.gg/roll/tier3.png" />
                        <TierText>(18 tướng)</TierText>
                    </div>
                    <div>
                        <TierImg src="https://dtcl.gg/roll/tier4.png" />
                        <TierText>(12 tướng)</TierText>
                    </div>
                    <div>
                        <TierImg src="https://dtcl.gg/roll/tier5.png" />
                        <TierText>(10 tướng)</TierText>
                    </div>
                </HeaderTable>
                <TableRow>
                    <TableShell className="stt">1</TableShell>
                    <TableShell>100%</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">2</TableShell>
                    <TableShell>100%</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">3</TableShell>
                    <TableShell>75%</TableShell>
                    <TableShell>25%</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">4</TableShell>
                    <TableShell>55%</TableShell>
                    <TableShell>30%</TableShell>
                    <TableShell>15%</TableShell>
                    <TableShell className="zero">0</TableShell>
                    <TableShell className="zero">0</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">5</TableShell>
                    <TableShell>45%</TableShell>
                    <TableShell>33%</TableShell>
                    <TableShell>20%</TableShell>
                    <TableShell>2%</TableShell>
                    <TableShell className="zero">0</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">6</TableShell>
                    <TableShell>25%</TableShell>
                    <TableShell >40%</TableShell>
                    <TableShell >30%</TableShell>
                    <TableShell >5%</TableShell>
                    <TableShell className="zero">0</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">7</TableShell>
                    <TableShell>19%</TableShell>
                    <TableShell>30%</TableShell>
                    <TableShell>35%</TableShell>
                    <TableShell>15%</TableShell>
                    <TableShell>1%</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">8</TableShell>
                    <TableShell>15%</TableShell>
                    <TableShell>20%</TableShell>
                    <TableShell>35%</TableShell>
                    <TableShell>25%</TableShell>
                    <TableShell>5%</TableShell>
                </TableRow>
                <TableRow>
                    <TableShell className="stt">9</TableShell>
                    <TableShell>10%</TableShell>
                    <TableShell>15%</TableShell>
                    <TableShell>30%</TableShell>
                    <TableShell>30%</TableShell>
                    <TableShell>15%</TableShell>
                </TableRow>
            </TableRoll>
        </RollTab>
    )
}

export default RollTab;