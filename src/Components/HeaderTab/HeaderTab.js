import React from "react";
import styled from "styled-components";
import { useState } from "react";

function HeaderTab(props){

    const TabHeader = styled.div`
        display: flex;
        border: solid #7c69e3;
        border-width: 0 0 5px 0;
    `

    const TabItem = styled.div`
        color: #c2d4f8;
        font-weight: bold;
        line-height: 40px;
        padding: 0 25px;
        border-radius: 8px 8px 0 0;
        border: 2px solid #7c69e3;
        text-align: center;
        font-family: roboto-medium;
        font-size: 14px;
        cursor: pointer;
        transition: all .3s;
        flex: 1;
        gap: 2px;
        max-width: 130px;

        

        &.active {
            background-color: #7c69e3;
            color: white;
        }

        &:hover{
            background-color: #7267b1;
            color: white;
        }
    `

        const [tab, setTab] = useState(0)

    return(
        <TabHeader>
            {props.listTab.map((item, index) => (
                <TabItem onClick={()=> {setTab(index)}} className={tab == index ? 'active':''} key={index}>{item}</TabItem>
            ))}
        </TabHeader>
    )
}

export default HeaderTab;   