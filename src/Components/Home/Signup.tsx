/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React, { FC } from "react";
import useMobile from "../../hooks/useMobile";
import { H, NftButton, TextNormal, Bold, CustomButton, Cbox, CustomBtn } from "../CustomizeComponents";
import envelop from "../../assets/images/home/envelop.svg"

const Signup = () => {
    const { isMobile } = useMobile()
    const renderWeb = () => {
        return <Box className="home_signup_wraper">
            <Cbox style={{marginBottom: '2.07vw'}} bold fsize="22">Get the latest updates</Cbox>
            <Cbox style={{marginBottom: '3.45vw'}} fsize="16">You can join our email list to receive the latest updates on Ariva Metaverse project.</Cbox>
            <Box className="signup_field_container">
                <input className="signup_field" style={{padding: '0.5vw 1vw'}} />
                <Box className="signup_field_label">Email</Box>
            </Box>
            <Box className="evelop_signup_label" p="1.1vw">
                <img src={envelop} alt="env" style={{width: '1.7vw'}} />
            </Box>
            <CustomBtn radius="20px" pt="8" pb="8" pl="40" pr="40" mt="10" color="#403E3F" bgcolor="#CBFA34" fsize="15" bold mr="18">Sign Up</CustomBtn>
            {/* <CustomButton style={{width: '100%', marginTop: '3.45vw'}}>Sign Up</CustomButton> */}
        </Box>
    }

    const renderMobile = () => {
        return <Box width="100%" padding="13.3vw 3.8vw 7.95vw 3.8vw" display="flex" flexDirection="column" position="relative" bgcolor="rgba(120, 120, 120, 0.1)" borderRadius="8px">
            <Cbox mobile style={{marginBottom: '4.87vw'}} bold fsize="22">Get the latest updates</Cbox>
            <Cbox mobile style={{marginBottom: '4.5vw'}} fsize="16">You can join our email list to receive the latest updates on Ariva Metaverse project.</Cbox>
            <Box className="signup_field_container" style={{marginBottom: '7.7vw'}}>
                <input className="signup_field" style={{padding: '1.8vw 3.6vw'}} />
                <Box className="signup_field_label">Email</Box>
            </Box>
            <Box className="evelop_signup_label" p="4.1vw">
                <img src={envelop} alt="env" style={{width: '6.4vw'}} />
            </Box>
            <CustomBtn mobile width="100%" alignItems="center" justifyContent="center" radius="20px" pt="8" pb="8" mt="10" color="#403E3F" bgcolor="#CBFA34" fsize="15" bold >Sign Up</CustomBtn>
            {/* <CustomButton style={{width: '100%', marginTop: '3.45vw'}}>Sign Up</CustomButton> */}
        </Box>
    }

    return isMobile? renderMobile() : renderWeb();
}

export default Signup