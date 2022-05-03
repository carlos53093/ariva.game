/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import "../assets/css/market.scss"
import useMobile from '../hooks/useMobile';
import event1 from "../assets/images/event/event1.svg"

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import EventItem from '../Components/Event/EventItem';
import Pagenation from '../Components/Pagenation';
import { useNavigate } from 'react-router';

const Blog: React.FC = () => {
    const { isMobile } = useMobile()
    const [mode, setMode] = useState('all')
    let navigate = useNavigate();

    const onClickRead = () => {
        navigate("/blogPost/3")
    }

    const renderMobile = () => {
        return <Box padding="25px" display="flex" flexDirection="column">
            <Cbox mb="3.243vw" borderRadius="8px" overflower="hidden" padding="1px" style={{ background: 'linear-gradient(90deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }}>
                <Cbox borderRadius="8px" width="100%" justifyContent="space-between" alignItems="center" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }}>
                    <Cbox fontSize="14px" flex={1} justifyContent="center" borderRadius="8px" p="10px" bgcolor={mode === 'all' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'all' ? '#1E1E1E !important' : ''} onClick={() => { setMode('all') }}>All</Cbox>
                    <Cbox fontSize="14px" flex={1} justifyContent="center" borderRadius="8px" p="10px" bgcolor={mode === 'news' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'news' ? '#1E1E1E !important' : ''} onClick={() => { setMode('news') }}>News</Cbox>
                    <Cbox fontSize="14px" flex={1} justifyContent="center" borderRadius="8px" p="10px" bgcolor={mode === 'events' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'events' ? '#1E1E1E !important' : ''} onClick={() => { setMode('events') }}>Events</Cbox>
                    <Cbox fontSize="14px" flex={1} justifyContent="center" borderRadius="8px" p="10px" bgcolor={mode === 'tech' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'tech' ? '#1E1E1E !important' : ''} onClick={() => { setMode('tech') }}>Technology</Cbox>
                </Cbox>
            </Cbox>
            <Cbox borderRadius="8px" style={{ background: 'linear-gradient(90deg, #2A3B48 0%, #402C72 100%)' }} mb="45px" flexDirection="column">
                <Cbox flex={1} style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="16" borderRadius="8px" >
                    <img src={event1} alt="" style={{ width: '100%', objectFit: 'cover' }} />
                </Cbox>
                <Cbox flex={1} padding="2.415vw 7.314vw 2.346vw 2.629vw" flexDirection="column">
                    <Cbox mb="10px" fontSize="26px" bold>Wonderland just introduced a new app for creating new games in Ariva wonderland</Cbox>
                    <Cbox mb="10px" fontSize="16px">News  |  July 24, 2022</Cbox>
                    <Cbox mb="30px" fontSize="16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo. Amet, risus, habitant sit nisl diam, posuere.</Cbox>
                    <Cbox mb="20px"><FilterBtn onClick={onClickRead} style={{ padding: '10px 45px', borderRadius: 12, fontSize: '16px', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                </Cbox>
            </Cbox>
            <EventItem>
                <Cbox mb="10px" fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                <Cbox mb="10px" fontSize="16px" >News  |  July 24, 2022</Cbox>
                <Cbox mb="10px" fontSize="16px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '10px 45px', borderRadius: 12, fontSize: '16px', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
            </EventItem>
            <EventItem>
                <Cbox mb="10px" fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                <Cbox mb="10px" fontSize="16px" >News  |  July 24, 2022</Cbox>
                <Cbox mb="10px" fontSize="16px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '10px 45px', borderRadius: 12, fontSize: '16px', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
            </EventItem>
            <EventItem>
                <Cbox mb="10px" fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                <Cbox mb="10px" fontSize="16px" >News  |  July 24, 2022</Cbox>
                <Cbox mb="10px" fontSize="16px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '10px 45px', borderRadius: 12, fontSize: '16px', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
            </EventItem>
            <EventItem>
                <Cbox mb="10px" fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                <Cbox mb="10px" fontSize="16px" >News  |  July 24, 2022</Cbox>
                <Cbox mb="10px" fontSize="16px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '10px 45px', borderRadius: 12, fontSize: '16px', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
            </EventItem>
            <Pagenation />
        </Box>
    }

    const renderWeb = () => {
        return <Box padding="75px 70px 70px 150px" >
            <Cbox mb="3.243vw" borderRadius="8px" overflower="hidden" padding="1px" style={{ background: 'linear-gradient(90deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }}>
                <Cbox borderRadius="8px" width="100%" justifyContent="space-between" alignItems="center" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }}>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10" bgcolor={mode === 'all' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'all' ? '#1E1E1E !important' : ''} onClick={() => { setMode('all') }}>All</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10" bgcolor={mode === 'news' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'news' ? '#1E1E1E !important' : ''} onClick={() => { setMode('news') }}>News</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10" bgcolor={mode === 'events' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'events' ? '#1E1E1E !important' : ''} onClick={() => { setMode('events') }}>Events</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10" bgcolor={mode === 'tech' ? '#CBFA34' : ''} bold={mode === 'all' ? 'true' : 'false'} color={mode === 'tech' ? '#1E1E1E !important' : ''} onClick={() => { setMode('tech') }}>Technology</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10">News</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10">Events</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10">Technology</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10">News</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10">News</Cbox>
                    <Cbox fsize="14" flex={1} justifyContent="center" borderRadius="8px" pa="10">Technology</Cbox>
                </Cbox>
            </Cbox>
            <Cbox borderRadius="8px" style={{ background: 'linear-gradient(90deg, #1D2328 0%, #1E1C28 100%)' }} mb="45px">
                <Cbox style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="16" borderRadius="8px" >
                    <img src={event1} alt="" style={{ width: '26.29vw', objectFit: 'cover' }} />
                </Cbox>
                <Cbox padding="2.415vw 7.314vw 2.346vw 2.629vw" flexDirection="column">
                    <Cbox mb="1vw" fsize="26" bold>Wonderland just introduced a new app for creating new games in Ariva wonderland</Cbox>
                    <Cbox mb="1vw" fsize="16">News  |  July 24, 2022</Cbox>
                    <Cbox mb="1vw" fsize="16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo. Amet, risus, habitant sit nisl diam, posuere.</Cbox>
                    <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                </Cbox>
            </Cbox>
            <Grid container spacing={3} mb="45px">
                <Grid item lg={4} md={6} sm={6}>
                    <EventItem>
                        <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                        <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                        <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                    </EventItem>
                </Grid>
                <Grid item lg={4} md={6} sm={6}>
                    <EventItem>
                        <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                        <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                        <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                    </EventItem>
                </Grid>
                <Grid item lg={4} md={6} sm={6}>
                    <EventItem>
                        <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                        <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                        <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                    </EventItem>
                </Grid>
                <Grid item lg={4} md={6} sm={6}>
                    <EventItem>
                        <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                        <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                        <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                    </EventItem>
                </Grid>
                <Grid item lg={4} md={6} sm={6}>
                    <EventItem>
                        <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                        <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                        <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                    </EventItem>
                </Grid>
                <Grid item lg={4} md={6} sm={6}>
                    <EventItem>
                        <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                        <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                        <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                    </EventItem>
                </Grid>
            </Grid>
            <Pagenation />
        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default Blog
