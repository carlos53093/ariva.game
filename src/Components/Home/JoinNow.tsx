/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React, { FC, useState } from "react";
import useMobile from "../../hooks/useMobile";
import { H, CustomBtn, TextNormal, Bold, CustomButton, Cbox } from "../CustomizeComponents";
import join from "../../assets/images/home/join.svg"
import joinmobile from "../../assets/images/home/joinmobile.jpg"
import JoinCommunityDialog from "../JoinCommunityDialog";

const JoinNow = () => {
    const { isMobile } = useMobile()
    const [open, setOpen] = useState(false)
    const renderWeb = () => {
        return <Box className="home_joinNow_container">
            {/* <Box className="joinnow_bg"></Box> */}
            <Box width="100%" position="relative">
                <Box width="100%" height="100%" position="absolute" left="0" top="0" style={{background: 'linear-gradient(270deg, #3c2f35 20.43%, rgba(131, 14, 79, 0) 92.71%)'}}></Box>
                <img src={join} style={{flex: 2, width: '53.337vw', height: '23.218vw', objectFit: 'cover'}} />
            </Box>
            <Box className="join_content">
                <Cbox fsize="38" bold lineHeight="100%" cmb="10" >Join our <br/> community</Cbox>
                <Cbox fsize="16"  cmb="20">Be a part of our amazing community and enjoy a new world to discover.</Cbox>
                <CustomButton onClick={()=>setOpen(true)} style={{fontSize: '1vw', padding: '0.483vw 2.96vw'}}>Join now</CustomButton>
            </Box>
            <JoinCommunityDialog open={open} onClose={()=>{setOpen(false)}} />
        </Box>
    }

    const renderMobile = () => {
        return <Box className="mobile_home_join_container">
            <img className="mobile_home_join_img" src={joinmobile} />
            <Box className="mobile_home_join_content">
                <Box className="mobile_home_join_text">
                <Cbox mobile fsize="24" bold>Join our <br/> community</Cbox>
                <Cbox mobile fsize="16" cmb="16">Be a part of our amazing community and enjoy a new world to discover.</Cbox>
                <CustomBtn onClick={()=>setOpen(true)}  mobile fsize="16" fontWeight="600" pt="5" pb="5" pl="30" pr="30" radius="12px" color="#403E3F">Join now</CustomBtn>
                </Box>
            </Box>
            <JoinCommunityDialog mobile open={open} onClose={()=>{setOpen(false)}} />
        </Box>
    }

    return isMobile ? renderMobile() : renderWeb();
}

export default JoinNow