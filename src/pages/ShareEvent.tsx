/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React from 'react';
import useMobile from '../hooks/useMobile';
import nft1 from "../assets/images/event/event1.svg"
import nft2 from "../assets/images/event/event2.svg"
import time from "../assets/images/event/time.svg"
import drop from "../assets/images/event/drop.svg"
import ava1 from "../assets/images/event/ava1.svg"
import ava2 from "../assets/images/event/ava2.svg"
import ava3 from "../assets/images/event/ava3.svg"
import cal from "../assets/images/event/calandar.svg"
import share from "../assets/images/event/share.svg"
import face from "../assets/images/event/face.svg"
import mg from "../assets/images/event/mg.svg"
import twitter from "../assets/images/event/twitter.svg"

import _ from "lodash"
import Pagenation from '../Components/Pagenation';
import JoinNow from '../Components/Home/JoinNow';
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import arrow from "../assets/images/market/arrowdown.svg"

const ShareEvent: React.FC = () => {
    const { isMobile } = useMobile()
    const renderWebShareEvent = () => {
        return (<Box padding="75px 70px 70px 150px">
            <NewestBtn style={{ marginLeft: 10, marginBottom: 70 }}>Newest<img src={arrow} style={{ marginLeft: 5 }} alt="arrow" /></NewestBtn>
            <Cbox padding="2.164vw 4.416vw 2.76vw 2.76vw" borderRadius="8px" flexDirection="column" style={{ background: 'linear-gradient(90deg, #2A3B48 0%, #402C72 100%)' }}>
                <Cbox ml="-3.795vw" mt="-3.795vw" mb="30px" alignItems="flex-end  ">
                    <Cbox mr="3.1vw" pa="16" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} borderRadius="8px">
                        <Cbox ><img src={nft1} style={{ width: '38vw' }} alt="" /></Cbox>
                    </Cbox>
                    <Cbox flexDirection="column">
                        <Box display="flex" alignItems="center" mb="1.1vw">
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
                                <Cbox bold fsize="18">Wonderland Party</Cbox>
                                <Cbox fsize="12">Organized by ArivaTeam</Cbox>
                            </Box>
                        </Box>
                        <Cbox marginBottom="1.1vw" alignItems="center">
                            <Cbox fsize="14" mr="4vw" alignItems="center">
                                <img src={time} alt="" style={{ marginRight: '0.7vw' }} />
                                Starts in 3 hours
                            </Cbox>
                            <Cbox fsize="14" alignItems="center">
                                <img src={drop} alt="" style={{ marginRight: '0.7vw' }} />
                                85, 164
                            </Cbox>
                        </Cbox>
                        <Cbox pa="5" mb="10px" bgcolor="rgba(255, 255, 255, 0.2)" borderRadius="4px" alignItems="center">
                            <Cbox mr="10px">Participants:</Cbox>
                            <Cbox mr="10px"><img src={ava1} alt="" /></Cbox>
                            <Cbox mr="10px"><img src={ava2} alt="" /></Cbox>
                            <Cbox mr="10px"><img src={ava3} alt="" /></Cbox>
                            <Cbox mr="10px"><img src={ava2} alt="" /></Cbox>
                            <Cbox mr="10px"><img src={ava1} alt="" /></Cbox>
                            <Cbox mr="10px"><img src={ava3} alt="" /></Cbox>
                            <Cbox mr="10px"><img src={ava1} alt="" /></Cbox>
                            <Cbox mr="10px"><FilterBtn style={{ padding: '0.22vw 0.76vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>+76</FilterBtn></Cbox>
                        </Cbox>
                        <Cbox><FilterBtn style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Check</FilterBtn></Cbox>
                    </Cbox>
                </Cbox>
                <Cbox fsize="20" bold mb="11px">Description</Cbox>
                <Cbox fsize="16" mb="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo. Amet, risus, habitant sit nisl diam, posuere. Molestie suscipit pellentesque ullamcorper neque, eget est dictum odio nulla. Tellus scelerisque arcu ultrices dui eget. Nullam turpis sed justo ullamcorper porttitor mauris.</Cbox>
                <Cbox fsize="16" mb="30px">Molestie suscipit pellentesque ullamcorper neque, eget est dictum odio nulla. Tellus scelerisque arcu ultrices dui eget. Nullam turpis sed justo ullamcorper porttitor mauris.</Cbox>
                <Cbox alignItems="center">
                    <WatchButton style={{ marginLeft: 10, alignItems: 'center', display: 'flex' }}><img src={cal} style={{ marginRight: 10 }} alt="" />Add to calendar</WatchButton>
                    <WatchButton style={{ marginLeft: 10, alignItems: 'center', display: 'flex' }}><img src={share} style={{ marginRight: 10 }} alt="" />Share the event</WatchButton>
                </Cbox>
            </Cbox>
        </Box>)
    }

    const renderMobileShareEvent = () => {
        return (
            <Box display="flex" flexDirection="column" p="25px">
                <NewestBtn style={{ marginLeft: 10, marginBottom: 20 }}>Newest<img src={arrow} style={{ marginLeft: 5 }} alt="arrow" /></NewestBtn>
                <Cbox padding="2px" borderRadius="8px" overFlow="hidden" flexDirection="column" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }}>
                    <Cbox >
                        <img src={nft1} alt="" style={{ width: '100%' }} />
                    </Cbox>
                    <Cbox bgcolor="#1D2428" p="30px" flexDirection="column"  >
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
                            <Cbox marginBottom="1.58vw" width="100%" justifyContent="space-between">
                                <Cbox fontSize="14px" mb="1vw" alignItems="center">
                                    <img src={time} alt="" style={{ marginRight: '0.7vw' }} />
                                    Starts in 3 hours
                                </Cbox>
                                <Cbox fontSize="14px" alignItems="center">
                                    <img src={drop} alt="" style={{ marginRight: '0.7vw' }} />
                                    85, 164
                                </Cbox>
                            </Cbox>
                            <Cbox p="10px" mb="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.2)" borderRadius="4px" alignItems="center">
                                <Cbox mr="10px">Participants:</Cbox>
                                <Cbox mr="10px"><img src={ava1} alt="" /></Cbox>
                                <Cbox mr="10px"><img src={ava2} alt="" /></Cbox>
                                <Cbox mr="10px"><img src={ava3} alt="" /></Cbox>
                                <Cbox mr="10px"><img src={ava2} alt="" /></Cbox>
                                <Cbox mr="10px"><img src={ava1} alt="" /></Cbox>
                                <Cbox mr="10px"><FilterBtn style={{ padding: '0.22vw 0.76vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>+76</FilterBtn></Cbox>
                            </Cbox>
                            <FilterBtn style={{ padding: '10px 30px', borderRadius: 12, fontSize: '16px', fontWeight: 'bold', width: '100%', display: 'unset' }}>Installed</FilterBtn>
                            <Cbox fontSize="18px" bold mt="30px">Description</Cbox>
                            <Cbox fontSize="16px" mt="10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo. Amet, risus, habitant sit nisl diam, posuere. Molestie suscipit pellentesque ullamcorper neque, eget est dictum odio nulla. Tellus scelerisque arcu ultrices dui eget. Nullam turpis sed justo ullamcorper porttitor mauris.</Cbox>
                            <Cbox fontSize="16px" mt="10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                            <Cbox my="30px"><WatchButton style={{ marginLeft: 10, alignItems: 'center', display: 'flex' }}><img src={cal} style={{ marginRight: 10 }} alt="" />Add to calendar</WatchButton></Cbox>
                            <Cbox mb="30px"><WatchButton style={{ marginLeft: 10, alignItems: 'center', display: 'flex' }}><img src={share} style={{ marginRight: 10 }} alt="" />Share the event</WatchButton></Cbox>
                        </Box>
                    </Cbox>
                </Cbox>
            </Box>
        )
    }

    return !isMobile ? renderWebShareEvent() : renderMobileShareEvent();

}

export default ShareEvent
