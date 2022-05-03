/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import "../assets/css/market.scss"
import useMobile from '../hooks/useMobile';
import play from "../assets/images/play/play1.svg"
import windows from "../assets/images/play/winmark.svg"
import macos from "../assets/images/play/applemark.svg"
import { getUserAuth } from '../actions/UserAuth';
import { useAppSelector } from '../app/hooks';

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import EventItem from '../Components/Event/EventItem';
import Pagenation from '../Components/Pagenation';
import { useNavigate } from 'react-router';

const Play: React.FC = () => {
    const { isMobile } = useMobile()
    const isUserAuth = useAppSelector(getUserAuth);

    let navigate = useNavigate();

    const onClickRead = () => {
    }

    const renderMobile = () => {
        return <Box padding="25px" display="flex" flexDirection="column">
            <Cbox borderRadius="8px" style={{ background: '#1D2328' }} pa="51" flexDirection="column" justifyContent="start" alignItems="flex-start">
                <Cbox fontSize="36px" bold> Travel around <br />the Ariva universe</Cbox>
                <Cbox fontSize="20px" mb="20px"> Future in the past, past in the future</Cbox>
                <Cbox width="92%" mb="50px">Start your journey in Ariva metaverse. The tourism industry is not limited to anything and we believe in a limitless world. You don't get time to travel in the real world? No problem, Ariva team already created a new world where you can enjoy your time and traveling while sitting on your couch. This is part of our goal to make traveling and tourism accessible to everyone and this is a great step toward our goal. </Cbox>

                <Box overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox overflow="hidden" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <img src={play} alt="p" style={{ width: '100%' }} />
                        <Cbox p="2vw 3.2vw" flexDirection="column" justifycontent="center" alignItems="center">
                            <Cbox fontSize="31px" bold>Explore Ariva Wonderland </Cbox>
                            <Cbox fontSize="14px">You can enjoy exploring the big world of Ariva Wonderland, full of events and stunning places. The world and events are constantly evolving and being updated. </Cbox>
                        </Cbox>
                    </Cbox>
                </Box>

                <Box overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox overflow="hidden" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <img src={play} alt="p" />
                        <Cbox p="2vw 3.2vw" flexDirection="column" justifycontent="center" alignItems="center">
                            <Cbox fontSize="31px" bold>Explore Ariva Wonderland </Cbox>
                            <Cbox fontSize="14px">You can enjoy exploring the big world of Ariva Wonderland, full of events and stunning places. The world and events are constantly evolving and being updated. </Cbox>
                        </Cbox>
                    </Cbox>
                </Box>

                <Box overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox overflow="hidden" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <img src={play} alt="p" />
                        <Cbox p="2vw 3.2vw" flexDirection="column" justifycontent="center" alignItems="center">
                            <Cbox fontSize="31px" bold>Explore Ariva Wonderland </Cbox>
                            <Cbox fontSize="14px">You can enjoy exploring the big world of Ariva Wonderland, full of events and stunning places. The world and events are constantly evolving and being updated. </Cbox>
                        </Cbox>
                    </Cbox>
                </Box>

                <Cbox fontSize="36px" bold>Road map</Cbox>
                <Cbox width="60%" mb="10px" fontSize="14px" >Check out our road map to see what was done far now and what will be come in future in Ariva Wonderland.</Cbox>
                <Cbox mb="60px"><FilterBtn  onClick={()=>navigate('/roadmap')} style={{ padding: '2.62vw 5.96vw', borderRadius: 12, fontSize: '14px', fontWeight: 'bold' }}>Road map</FilterBtn></Cbox>
                <Cbox fontSize="36px" bold>Download</Cbox>
                <Cbox width="60%" mb="10px" fontSize="14px" >For playing the game first you have to create an account or if you have an account already, just log in and enjoy the game.</Cbox>
                {isUserAuth ?
                    <Cbox mt="30px" mb="60px" flexDirection="column">
                        <FilterBtn style={{ padding: '2.62vw 5.96vw', marginBottom: 30, borderRadius: 12, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={windows} alt="win" style={{ marginRight: 5 }} />
                            Windows
                        </FilterBtn>
                        <FilterBtn style={{ padding: '2.62vw 5.96vw', borderRadius: 12, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={macos} alt="win" style={{ marginRight: 5 }} />
                            MacOS
                        </FilterBtn>
                    </Cbox>
                    :
                    <Cbox mt="30px" mb="60px"><FilterBtn style={{ padding: '2.62vw 5.96vw', borderRadius: 12, fontSize: '14px', fontWeight: 'bold' }}>Login</FilterBtn></Cbox>
                }
            </Cbox>
        </Box>
    }

    const renderWeb = () => {
        return <Box padding="75px 70px 70px 150px" >
            <Cbox borderRadius="8px" style={{ background: '#1D2328' }} pa="51" flexDirection="column" justifyContent="start" alignItems="flex-start">
                <Cbox fsize="36" bold> Travel around <br />the Ariva universe</Cbox>
                <Cbox fsize="20" mb="20px"> Future in the past, past in the future</Cbox>
                <Cbox width="92%" mb="50px">Start your journey in Ariva metaverse. The tourism industry is not limited to anything and we believe in a limitless world. You don't get time to travel in the real world? No problem, Ariva team already created a new world where you can enjoy your time and traveling while sitting on your couch. This is part of our goal to make traveling and tourism accessible to everyone and this is a great step toward our goal. </Cbox>
                <Grid container mb="30px" spacing={3}>
                    <Grid item sm={4}>
                        <Box overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                            <Cbox overflow="hidden" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                                <img src={play} alt="p" style={{ width: '100%' }} />
                                <Cbox p="2vw 3.2vw" flexDirection="column" justifycontent="center" alignItems="center">
                                    <Cbox fsize="31" bold>Explore Ariva Wonderland </Cbox>
                                    <Cbox fsize="14">You can enjoy exploring the big world of Ariva Wonderland, full of events and stunning places. The world and events are constantly evolving and being updated. </Cbox>
                                </Cbox>
                            </Cbox>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                            <Cbox overflow="hidden" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                                <img src={play} alt="p" />
                                <Cbox p="2vw 3.2vw" flexDirection="column" justifycontent="center" alignItems="center">
                                    <Cbox fsize="31" bold>Explore Ariva Wonderland </Cbox>
                                    <Cbox fsize="14">You can enjoy exploring the big world of Ariva Wonderland, full of events and stunning places. The world and events are constantly evolving and being updated. </Cbox>
                                </Cbox>
                            </Cbox>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                            <Cbox overflow="hidden" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                                <img src={play} alt="p" />
                                <Cbox p="2vw 3.2vw" flexDirection="column" justifycontent="center" alignItems="center">
                                    <Cbox fsize="31" bold>Explore Ariva Wonderland </Cbox>
                                    <Cbox fsize="14">You can enjoy exploring the big world of Ariva Wonderland, full of events and stunning places. The world and events are constantly evolving and being updated. </Cbox>
                                </Cbox>
                            </Cbox>
                        </Box>
                    </Grid>
                </Grid>
                <Cbox fsize="36" bold>Road map</Cbox>
                <Cbox width="60%" mb="10px" fsize="14" >Check out our road map to see what was done far now and what will be come in future in Ariva Wonderland.</Cbox>
                <Cbox mb="60px"><FilterBtn onClick={()=>navigate('/roadmap')} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Road map</FilterBtn></Cbox>
                <Cbox fsize="36" bold>Download</Cbox>
                <Cbox width="60%" mb="10px" fsize="14" >For playing the game first you have to create an account or if you have an account already, just log in and enjoy the game.</Cbox>
                {isUserAuth ?
                    <Cbox mb="60px">
                        <FilterBtn style={{ padding: '0.62vw 2.96vw', marginRight: 10, borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={windows} alt="win" style={{ marginRight: 5 }} />
                            Windows
                        </FilterBtn>
                        <FilterBtn style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={macos} alt="win" style={{ marginRight: 5 }} />
                            MacOS
                        </FilterBtn>
                    </Cbox>
                    :
                    <Cbox mb="60px"><FilterBtn style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Login</FilterBtn></Cbox>
                }
            </Cbox>
        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default Play
