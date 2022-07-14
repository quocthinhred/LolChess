import React from 'react'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faYoutubeSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function Header(){

    const Header = styled.header`
        display: flex;
        justify-content: space-between;
        height: 47px;
        width: 100vw;
        background-color: #1e1d32;
        color: #cdcdcd;
        font-size: 12px;
        padding: 0 calc((100vw - 1080px)/2);
    `;

    const HeaderLeft = styled.div`
        display: flex;
        justify-content: space-around;
        gap: 15px;
        line-height: 47px;
    `

    const HeaderRight = styled.div`
        display: flex;
        font-size: 13px;
        justify-content: space-around;
        line-height: 47px;
        gap: 15px;
        font-weight: bold;
    `

    const IconRight = styled.img`
        margin: auto 5px auto 0;
        transform: translateY(3px);
        width: 16px;
        height: 16px;
    `

    const ItemLeft = styled.div`
        background: ${props => props.active ? "#161523" : "transparent"};
        padding: 0 10px;
        cursor: pointer;
    `

    const ItemRight = styled.div`
        
    `

    const Social = styled.div`
        display: flex;
        gap: 5px;
        align-self: center;
    `

    const Exclamation = styled.div`
        .exclamation-text {
            display: none;
            text-decoration: underline;
        }

        &:hover .exclamation-text {
            display: inline-block !important;
        }
    `

    return (
            <Header>
                <HeaderLeft>
                    <ItemLeft>
                        <IconRight src='/Images/lol-icon.png' />
                        Liên Minh Huyền Thoại
                    </ItemLeft>
                    <ItemLeft active>
                        <IconRight src='/Images/tft-icon.png' style={{ transform: 'translateY(4px)' }}/>
                        Đấu Trường Chân Lý
                    </ItemLeft>
                </HeaderLeft>
                <HeaderRight>
                        <div>Đăng Nhập</div>
                        <div>Đăng Ký</div>
                        <Social>
                            <FontAwesomeIcon icon={faFacebookSquare} />
                            <FontAwesomeIcon icon={faYoutubeSquare} />
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </Social>
                        <Exclamation style={{ color: '#a63838' }}>
                            <FontAwesomeIcon icon={faCircleExclamation} style={{ marginRight: '5px' }}/>
                            <span className='exclamation-text'>Báo Lỗi</span>
                        </Exclamation>
                </HeaderRight>
            </Header>
    )
}


export default Header;