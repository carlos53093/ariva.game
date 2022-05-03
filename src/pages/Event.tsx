/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React from 'react';
import useMobile from '../hooks/useMobile';
import time from "../assets/images/event/time.svg"
import drop from "../assets/images/event/drop.svg"

import _ from "lodash"
import Pagenation from '../Components/Pagenation';
import JoinNow from '../Components/Home/JoinNow';
import HammerComponent from '../Components/HammerComponent';
import { Cbox, FilterBtn } from '../Components/CustomizeComponents';
import leftarrow from "../assets/images/event/leftarrow.png"
import rightarrow from "../assets/images/event/rightarrow.png"
import EventItem from '../Components/Event/EventItem';
import { useNavigate } from "react-router-dom";

const Event: React.FC = () => {
    const { isMobile } = useMobile()
    let navigate = useNavigate();
    const onShareClick = () => {
        navigate("/shareevent/3")
    }
    const renderWebEvent = () => {
        return (<Box padding="3.933vw 4.83vw 6.1vw 10.35vw">
            <HammerComponent>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Box display="flex" alignItems="flex-start" mb="1.79vw">
                        <Box
                            p="0.966vw"
                            bgcolor="rgba(255, 255, 255, 0.2)"
                            color="white"
                            borderRadius="8px"
                            display="flex"
                            flexDirection="column"
                            fontSize="1.242vw"
                            mr="1.38vw"
                        >
                            <Cbox fsize="18">04</Cbox>
                            <Cbox fsize="18">Feb</Cbox>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="flex-start"
                            flexDirection="column"
                        >
                            <Cbox bold fsize="26">Wonderland Party</Cbox>
                            <Cbox fsize="16">Organized by ArivaTeam</Cbox>
                        </Box>
                    </Box>
                    <Cbox fsize="16" marginBottom="1.38vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae nisi purus, ut penatibus gravida ac. consectetur adipiscing elit.</Cbox>
                    <Cbox marginBottom="1.58vw">
                        <Cbox fsize="16" marginRight="4vw">
                            <img src={time} alt="" style={{ marginRight: '0.7vw' }} />
                            Starts in 3 hours
                        </Cbox>
                        <Cbox fsize="16">
                            <img src={drop} alt="" style={{ marginRight: '0.7vw' }} />
                            85, 164
                        </Cbox>
                    </Cbox>
                    <FilterBtn style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Check</FilterBtn>
                </Box>
                <Cbox position="absolute" top='23vw'>
                    <img src={leftarrow} style={{ width: 30, height: 30, cursor: 'pointer', marginRight: 10 }} alt="" />
                    <Box width="40px" height="7px" bgcolor="#CBFA34" borderRadius={4} marginRight="5px"></Box>
                    <Box width="14px" height="7px" bgcolor="rgba(255, 255, 255, 0.24)" borderRadius={4} marginRight="5px"></Box>
                    <Box width="14px" height="7px" bgcolor="rgba(255, 255, 255, 0.24)" borderRadius={4} marginRight="5px"></Box>
                    <Box width="14px" height="7px" bgcolor="rgba(255, 255, 255, 0.24)" borderRadius={4} marginRight="10px"></Box>
                    <img src={rightarrow} style={{ width: 30, height: 30, cursor: 'pointer' }} alt="" />
                </Cbox>
            </HammerComponent>

            <Cbox mt="100px" justifyContent="start" alignItems="flex-start" flexDirection="column" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }} mb="4.485vw" pa="30" borderRadius="8px">
                <Cbox fsize="30" bold mb="50px">Trending events</Cbox>
                <Grid container spacing={3}>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>

                </Grid>
            </Cbox>

            <Cbox flexDirection="column" justifyContent="start" alignItems="flex-start" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }} mb="4.485vw" pa="30" borderRadius="8px">
                <Cbox fsize="30" bold mb="50px">February</Cbox>
                <Grid container spacing={2}>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>

                </Grid>
            </Cbox>
            <Cbox flexDirection="column" justifyContent="start" alignItems="flex-start" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }} mb="4.485vw" pa="30" borderRadius="8px">
                <Cbox fsize="30" bold mb="50px">March</Cbox>
                <Grid container spacing={2}>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} item mb="50px">
                        <EventItem>
                            <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                            <Cbox fontSize="10px" marginBottom="1.38vw" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                            <Cbox><FilterBtn onClick={onShareClick} style={{ padding: '0.62vw 2.967vw', fontSize: '12px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>

                </Grid>
            </Cbox>
            <Box mb="90px"><JoinNow></JoinNow></Box>
        </Box>)
    }

    const renderMobileEvent = () => {
        return (
            <Box padding="25px">
                <HammerComponent>
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <Box display="flex" alignItems="flex-start" mb="1.79vw">
                            <Box
                                p="0.966vw"
                                bgcolor="rgba(255, 255, 255, 0.2)"
                                color="white"
                                borderRadius="8px"
                                display="flex"
                                flexDirection="column"
                                fontSize="1.242vw"
                                mr="1.38vw"
                            >
                                <Cbox fontSize="18px">04</Cbox>
                                <Cbox fontSize="18px">Feb</Cbox>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="flex-start"
                                flexDirection="column"
                            >
                                <Cbox bold fontSize="18px">Wonderland Party</Cbox>
                                <Cbox fontSize="12px">Organized by ArivaTeam</Cbox>
                            </Box>
                        </Box>
                        <Cbox fontSize="17px" marginBottom="1.38vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae nisi purus, ut penatibus gravida ac. consectetur adipiscing elit.</Cbox>
                        <Cbox marginBottom="1.58vw" flexDirection="column">
                            <Cbox fontSize="14px" mb="1vw" alignItems="center">
                                <img src={time} alt="" style={{ marginRight: '0.7vw' }} />
                                Starts in 3 hours
                            </Cbox>
                            <Cbox fontSize="14px" alignItems="center">
                                <img src={drop} alt="" style={{ marginRight: '0.7vw' }} />
                                85, 164
                            </Cbox>
                        </Cbox>
                        <FilterBtn style={{ padding: '5px 30px', borderRadius: 12, fontSize: '16px', fontWeight: 'bold' }}>Check</FilterBtn>
                    </Box>
                    <img src={leftarrow} style={{ width: 30, height: 30, cursor: 'pointer', marginRight: 10, position: 'absolute', left: 10 }} alt="" />

                    <img src={rightarrow} style={{ width: 30, height: 30, cursor: 'pointer', position: 'absolute', right: 10 }} alt="" />
                </HammerComponent>
                <Cbox justifyContent="center" width="100%" mt="30px">
                    <Box width="40px" height="7px" bgcolor="#CBFA34" borderRadius={4} marginRight="5px"></Box>
                    <Box width="14px" height="7px" bgcolor="rgba(255, 255, 255, 0.24)" borderRadius={4} marginRight="5px"></Box>
                    <Box width="14px" height="7px" bgcolor="rgba(255, 255, 255, 0.24)" borderRadius={4} marginRight="5px"></Box>
                    <Box width="14px" height="7px" bgcolor="rgba(255, 255, 255, 0.24)" borderRadius={4} marginRight="10px"></Box>
                </Cbox>
                <Cbox mt="100px" justifyContent="start" alignItems="flex-start" flexDirection="column" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }} mb="4.485vw" padding="30px" borderRadius="8px">
                    <Cbox fontSize="30px" bold mb="50px">Trending events</Cbox>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                </Cbox>

                <Cbox flexDirection="column" justifyContent="start" alignItems="flex-start" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }} mb="4.485vw" p="30px" borderRadius="8px">
                    <Cbox fontSize="30px" bold mb="50px">February</Cbox>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                </Cbox>
                <Cbox flexDirection="column" justifyContent="start" alignItems="flex-start" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }} mb="4.485vw" p="30px" borderRadius="8px">
                    <Cbox fontSize="30" bold mb="50px">March</Cbox>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                    <EventItem>
                        <Cbox fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                        <Cbox fontSize="10px"><img src={time} width={6} alt="" />January 28, 2022  </Cbox>
                        <Cbox fontSize="10px" marginBottom="20px" ><img src={drop} width={6} alt="" />85, 156  </Cbox>
                        <Cbox><FilterBtn style={{ padding: '10px 43px', fontSize: '16px', fontWeight: 600, display: 'unset' }} >Go to event</FilterBtn></Cbox>
                    </EventItem>
                </Cbox>
                <JoinNow></JoinNow>
            </Box>
        )
    }

    return !isMobile ? renderWebEvent() : renderMobileEvent();

}

export default Event
