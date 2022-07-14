import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function BodyHeader() {
    
    const BodyHeader = styled.div`
        background-color: rgb(48,46,82,.5);
        height: 50px;
        padding: 0 calc((100vw - 1080px)/2);
    `

    const Navigations = styled.ul`
        list-style: none;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        color: #c2d4f8;
        font-weight: bold;
    `

    const Navigation = styled.li`

        height: 100%;

        a {
            text-decoration: none;
            color: #c2d4f8;
            height: 48px;
            padding-bottom: 10px;
            line-height: 48px;
            cursor: pointer;
        }

        &:hover a {
            border-bottom: 3px solid #3dd0d8;
            color: #3dd0d8;
            transition: all 0.3s;
        }

        &.active a {
            border-bottom: 3px solid #3dd0d8;
            color: #3dd0d8;
            transition: all 0.3s;
        }
    `
        //'Đội hình meta', 'Team builder', 'Tướng', 'Trang bị', 'Round', 'Roll', 'Hệ/Tộc', 'Vàng', 'Phím tắt', 'Linh thú', 'Cập nhật'
    const [navigations, setNavigations] = useState([
        {
            name: 'Đội hình meta',
            path: '/meta'
        },
        {
            name: 'Team builder',
            path: '/builder'
        },
        {
            name: 'Tướng',
            path: '/champion'
        },
        {
            name: 'Trang bị',
            path: '/item'
        },
        {
            name: 'Round',
            path: '/round'
        },
        {
            name: 'Roll',
            path: '/roll'
        },
        {
            name: 'Hệ/Tộc',
            path: '/trait'
        },
        {
            name: 'Vàng',
            path: '/gold'
        },
        {
            name: 'Phím tắt',
            path: '/key'
        },
        {
            name: 'Linh thú',
            path: '/pet'
        },
        {
            name: 'Cập nhật',
            path: '/update'
        },  
    ])
    const [current, setCurrent] = useState(0)


    return (
        <BodyHeader>
            <Navigations>
                { navigations.map((item, index) => (
                    <Navigation key={index} className={index == current ? 'active' : ''}>
                        <Link to={item.path} onClick={()=>{setCurrent(index)}}>{item.name}</Link>
                    </Navigation>
                )) }
            </Navigations>
        </BodyHeader>
    )
}

export default BodyHeader;