/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import "../assets/css/market.scss"
import useMobile from '../hooks/useMobile';
import map from "../assets/images/map/map.png"

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import EventItem from '../Components/Event/EventItem';
import Pagenation from '../Components/Pagenation';
import { useNavigate } from 'react-router';
import MinMap from '../Components/Map/MinMap';
import Bid from '../Components/Map/Bid';

const Map: React.FC = () => {
    const { isMobile } = useMobile()
    const [mode, setMode] = useState('all')

    const renderMobile = () => {
        return <Box position="relative" overflow="hidden">
            <img src={map} alt="" style={{objectFit: 'cover', width: '100vh', height: 'calc(100vh - 73px)'}} />
            <MinMap></MinMap>
            <Box position="absolute" left="25px" top="25px" width="280px">
                <Bid />
            </Box>
        </Box>
    }

    const renderWeb = () => {
        return <Box padding="0 0 0 95px" position="relative" zIndex="-1">
            <img src={map} alt="" width="100%" />
            <MinMap></MinMap>
            <Box position="absolute" left="14.66vw" top="3.5vw" width="27.1vw">
                <Bid />
            </Box>
        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default Map
