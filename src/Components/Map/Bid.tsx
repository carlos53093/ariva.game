/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import useMobile from '../../hooks/useMobile';

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../../Components/CustomizeComponents';
import EventItem from '../../Components/Event/EventItem';
import Pagenation from '../../Components/Pagenation';
import { useNavigate } from 'react-router';
import closeIco from "../../assets/images/map/closeIco.svg"
import event1 from "../../assets/images/event/event1.svg"
import minMap from "../../assets/images/map/minmap.svg";
import copyIco from "../../assets/images/market/copy.svg"

const Bid: React.FC = () => {
    const { isMobile } = useMobile()
    const [mode, setMode] = useState('all')

    const renderMobile = () => {
        return <Box borderRadius="8px" style={{background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)'}} padding="3px">
        <Box bgcolor="#1E1E1E" borderRadius="8px" p="21px" display="flex" flexDirection="column" >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="15px">
                <Cbox fontSize="20px">Atari</Cbox>
                <img src={closeIco} alt="" />
            </Box>
            <Box style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} borderRadius="8px" mb="15px">
                <Grid container spacing={1}>
                    <Grid item xs={6}><img src={event1} style={{objectFit: 'cover', height:'215px'}} alt="event1" /></Grid>
                    <Grid item xs={6}><img src={minMap} style={{objectFit: 'cover', height:'215px'}} alt="event1" /></Grid>
                </Grid>
            </Box>
            <Cbox fontSize="14px" bold>Address</Cbox>
            <Cbox fontSize="14px" mb="10px" style={{overflowWrap: 'anywhere'}}>0xc5f823af630bc656315f50d2916572f7852e2aa1</Cbox>
            <Cbox fontSize="14px" bold>Location</Cbox>
            <Cbox fontSize="14px" mb="10px" alignItems="center">85, 164<img src={copyIco} alt="ico" style={{marginLeft: 10}} /></Cbox>
            <Cbox fontSize="14px" bold>Size</Cbox>
            <Cbox fontSize="14px" mb="10px" alignItems="center">1x1 (1 parcel)</Cbox>
            <Cbox fontSize="14px" mb="10px" bold>Buy land</Cbox>
            <Cbox mb="10px"><FilterBtn>Bid</FilterBtn></Cbox>
            <Cbox fontSize="14px">Place your bid for this piece of land.</Cbox>
        </Box>
    </Box>
    }

    const renderWeb = () => {
        return <Box borderRadius="8px" style={{background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)'}} padding="3px">
        <Box bgcolor="#1E1E1E" borderRadius="8px" p="21px" display="flex" flexDirection="column" >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="15px">
                <Cbox fsize="20">Atari</Cbox>
                <img src={closeIco} alt="" />
            </Box>
            <Box style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} borderRadius="8px" mb="15px">
                <Grid container spacing={1}>
                    <Grid item xs={6}><img src={event1} style={{objectFit: 'cover', height:'14.835vw'}} alt="event1" /></Grid>
                    <Grid item xs={6}><img src={minMap} style={{objectFit: 'cover', height:'14.835vw'}} alt="event1" /></Grid>
                </Grid>
            </Box>
            <Cbox fsize="14" bold>Address</Cbox>
            <Cbox fsize="14" mb="15px">0xc5f823af630bc656315f50d2916572f7852e2aa1</Cbox>
            <Cbox fsize="14" bold>Location</Cbox>
            <Cbox fsize="14" mb="15px" alignItems="center">85, 164<img src={copyIco} alt="ico" style={{marginLeft: 10}} /></Cbox>
            <Cbox fsize="14" bold>Size</Cbox>
            <Cbox fsize="14" mb="15px" alignItems="center">1x1 (1 parcel)</Cbox>
            <Cbox fsize="14" mb="10px" bold>Buy land</Cbox>
            <Cbox mb="20px"><FilterBtn style={{ padding: '0.52vw 3.76vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Bid</FilterBtn></Cbox>
            <Cbox fsize="14">Place your bid for this piece of land.</Cbox>
        </Box>
    </Box>;
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default Bid
