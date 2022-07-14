import React from "react";
import styled from 'styled-components'
import { useState, createContext } from "react";

import FilterChampion from "../FilterChampion/filterchampion";
import ListChampion from "../ListChampion/listchampion";
import Provider from "../../Context/Provider"




function ChampionTab() {


    const ChampionTab = styled.div`
        padding: 0 calc((100vw - 1080px)/2);
        height: 700px;
    `

    return (
        <Provider>
                <ChampionTab>
                    <FilterChampion />
                    <ListChampion />
                </ChampionTab>
        </Provider>
    )
}

export default ChampionTab;