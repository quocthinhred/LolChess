import React from "react";
import styled from "styled-components";
import HeaderTab from "../HeaderTab/HeaderTab";

function GoldTab(){
    const ListTab = ['Vàng'];
    
    const GoldTab = styled.div`
        padding: 0 calc((100vw - 1080px)/2);
        color: white;
        padding-bottom: 50px;
    `

    const HeaderTable = styled.div`
        font-size: 18px;
        font-weight: bold;
        margin-top: 30px;
    `

    const Table = styled.div`
        margin-top: 10px;
        width: 70%;
    `

    const TableRow = styled.div`
        padding-left: 10px;
        display: flex;
        line-height: 40px;
        background: #292845;
        margin-bottom: 2px;
    `

    const FirstRow = styled(TableRow)`
        background: #19182a;
        font-weight: bold;
    `

    const TableItem = styled.div`
        font-size: 14px;
        flex: 1;
        &.value{
            color: #c2d4f8;

        }
    `

    return(
        <GoldTab>
            <HeaderTab listTab={ListTab}></HeaderTab>
            <div>
                <HeaderTable>Thu Nhập</HeaderTable>
                <Table>
                    <FirstRow>
                        <TableItem>Tên</TableItem>
                        <TableItem>Thu Nhập (Vàng)</TableItem>
                    </FirstRow>
                    <TableRow>
                        <TableItem>Thu nhập cơ bản</TableItem>
                        <TableItem className="value">5</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Chuỗi thắng/thua (streaks)</TableItem>
                        <TableItem className="value">1-3</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>PvP Thắng</TableItem>
                        <TableItem className="value">1</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Lợi tức</TableItem>
                        <TableItem className="value">0-5</TableItem>
                    </TableRow>
                </Table>
            </div>
            <div>
                <HeaderTable>Chuỗi Thắng/Thua (Streaks)</HeaderTable>
                <Table>
                    <FirstRow>
                        <TableItem>Chuỗi Thắng/thua</TableItem>
                        <TableItem>Thu Nhập (Vàng)</TableItem>
                    </FirstRow>
                    <TableRow>
                        <TableItem>1</TableItem>
                        <TableItem className="value">-</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>2</TableItem>
                        <TableItem className="value">+1</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>3</TableItem>
                        <TableItem className="value">+1</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>4</TableItem>
                        <TableItem className="value">+2</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>5+</TableItem>
                        <TableItem className="value">+3</TableItem>
                    </TableRow>
                </Table>
            </div>
            <div>
                <HeaderTable>Lợi tức</HeaderTable>
                <Table>
                    <FirstRow>
                        <TableItem>Vàng tích trữ</TableItem>
                        <TableItem>Thu Nhập (Vàng)</TableItem>
                    </FirstRow>
                    <TableRow>
                        <TableItem>0-9</TableItem>
                        <TableItem className="value">-</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>10-19</TableItem>
                        <TableItem className="value">1</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>20-29</TableItem>
                        <TableItem className="value">2</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>30-39</TableItem>
                        <TableItem className="value">3</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>40-49</TableItem>
                        <TableItem className="value">4</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>50+</TableItem>
                        <TableItem className="value">5</TableItem>
                    </TableRow>
                </Table>
            </div>
        </GoldTab>
    )
}

export default GoldTab;