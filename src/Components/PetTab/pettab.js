import React from "react";
import styled from "styled-components";
import HeaderTab from "../HeaderTab/HeaderTab";

function PetTab(){

    const ListTab = ['Nhóm 1','Nhóm 2','Nhóm 3','Nhóm 4','Nhóm 5','Nhóm 6','Nhóm 7','Nhóm 8','Nhóm 9']
    const PetTab = styled.div`
        padding: 0 calc((100vw - 1080px)/2);
    `

    return (
        <PetTab>
            <HeaderTab listTab={ListTab}></HeaderTab>
        </PetTab>
    )
}

export default PetTab;