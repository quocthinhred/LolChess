import React from 'react'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BodyHeader from '../BodyHeader/bodyheader';


function NavBody() {
    
    const NavBody = styled.div`
        height: 310px;
        background-size: cover;
        background-position: center;
        background-image: url('/Images/header-backgroud.png');
        
    `

    const BodyUp = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 260px;
        padding: 0 calc((100vw - 1080px)/2);
    `

    const LogoText = styled.div`
        color: #f2f8fa;
        font-size: 16px;
        background: #3e6787;
        padding: 5px 10px;
    `

    const SearchForm = styled.form`
        position: relative;
        
    `

    const SearchInput = styled.input`
        width: 260px;
        height: 43px;
        border-radius: 5px;
        padding-left: 15px;
        font-size: 16px;
        border: 0;
        outline: none;
    `

    const SearchLogo = styled(FontAwesomeIcon)`
        position: absolute;
        top: 14px;
        right: 15px;
    `

    return (
        <NavBody>
            <BodyUp>
                <div>
                    <a>
                        <img src='/Images/logo-large.png' style={{ width: '210px' }} />
                    </a>
                    <LogoText>
                        <FontAwesomeIcon icon={faRectangleAd} style={{ marginRight: '5px' }} />
                        Công cụ tạo <a target='_blank' href='https://Kitudacbiet.co' style={{ color: 'rgb(255 84 93)' }}>kitudacbiet.co</a> tại Kitudacbiet.co
                    </LogoText>
                </div>
                <SearchForm>
                    <SearchInput placeholder='Tìm người chơi'/>
                    <SearchLogo icon={faMagnifyingGlass} style={{ marginRight: '5px' }} />
                </SearchForm>
            </BodyUp>
            <BodyHeader />
        </NavBody>
    )
}

export default NavBody;