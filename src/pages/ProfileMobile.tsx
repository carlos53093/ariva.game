/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import "../assets/css/market.scss"
import useMobile from '../hooks/useMobile';
import arrow from "../assets/images/market/arrowleft.svg"

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import { useNavigate } from 'react-router';

const ProfileMobile: React.FC = () => {
    const { isMobile } = useMobile()
    let navigate = useNavigate();


    const renderMobile = () => {
        return <Box padding="25px" display="flex" flexDirection="column">
            <Box><NewestBtn style={{ marginBottom: 30 }}><img src={arrow} style={{ marginRight: 5 }} alt="arrow" />Back</NewestBtn></Box>
            <Cbox fontSize="3.8vw" mb="3vw" onClick={()=>navigate('/profile/profile')}>Profile</Cbox>
            <Cbox fontSize="3.8vw" mb="3vw" onClick={()=>navigate('/profile/referral')}>Referral</Cbox>
            <Cbox fontSize="3.8vw" mb="3vw" onClick={()=>navigate('/profile/setting')}>Setting</Cbox>
            <Box color="#DE4C4C" p="0.55vw" fontSize="3.8vw">Logout</Box>
        </Box>
    }

    return !isMobile ? null : renderMobile();

}

export default ProfileMobile
