import React from 'react'
import styled from 'styled-components'


function ScrollingText() {

    const ScrollingText = styled.div`
        margin: 0 calc((100vw - 1080px)/2);
        padding: 10px 0;
        overflow: hidden;
    `

    const ScrollText = styled.div`
        transform: translateX(100%);
        animation: my-animation 14s linear infinite;

        &:hover {
            animation-play-state: paused;
        }
    `



    return (
        <ScrollingText id='scroll-container'>
            <ScrollText id='scroll-text' style={{ color: '#c2d4f8' }}>🔥 Các đội hình gắn chữ <strong style={{ color: '#3ad0d8' }}>H</strong> ở <a href='/' style={{ color: '#f86226', textDecoration: 'none' }}>meta</a> là có hướng dẫn chơi, chọn item, def đầu game 🔥</ScrollText>
        </ScrollingText>
    )
}

export default ScrollingText;