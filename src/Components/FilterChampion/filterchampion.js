import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import FilterPrice from "../FilterPrice/filterprice";
import FilterTraits from "../FilterTraits/filtertraits";
import FilterClass from "../FilterClass/filterclass";


function FilterChampion() {

    const FilterChampion = styled.div`
        background-color: #2d2b56;
        padding: 20px 70px;
        display: flex;
    `

    const SearchInput = styled.input`
        height: 35px;
        width: 270px;
        border: 1px solid #7c69e3;
        border-radius: 7px;
        padding: 10px;
        background-color: transparent;
        color: #c2d4f8;
        font-size: 15px;
    `

    const SearchLogo = styled(FontAwesomeIcon)`
        position: absolute;
        color: #c1d3f7;
        top: 10px;
        left: 240px;
    `

    const FilterLeft = styled.div`
        margin-right: 50px;
    `

    const FilterRight = styled.div`
        
    `

    return (
        <FilterChampion>
            <FilterLeft>
                <div style={{ position: 'relative' }}>
                    <SearchInput placeholder="Tìm tướng" />
                    <SearchLogo icon={faMagnifyingGlass} />
                </div>
                <FilterPrice />
            </FilterLeft>
            <FilterRight>
                <FilterTraits />
                <FilterClass />
            </FilterRight>
        </FilterChampion>
    )
}

export default FilterChampion;