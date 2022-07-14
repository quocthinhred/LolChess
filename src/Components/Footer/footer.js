import React from "react";
import styled from "styled-components";



function Footer() {

    const Footer = styled.div`
        width: 100%;
        padding: 30px 0;
        background-color: #13121e;
        font-family: roboto-regular;
        color: #949494;
        line-height: 19px;
        padding: 50px calc((100vw - 1080px)/2);
    `

    const Copyright = styled.div`
        color: #6d6c6c;
        margin-top: 10px;
        line-height: 14px;
        font-size: 11px;
    `

    const Advertisement = styled.div`
        font-family: roboto-regular;
        color: #aeaeae;
        font-size: 15px;
    `


    return (
        <Footer>
            <Advertisement>Liên hệ quảng cáo: lmssplus.com@gmail.com</Advertisement>
            <Copyright>Copyright 2020 dtcl.gg. All rights reserved. Dtcl.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</Copyright>
        </Footer>
    )
}

export default Footer;