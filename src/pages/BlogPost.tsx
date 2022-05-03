/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import "../assets/css/market.scss"
import Filterbar from '../Components/Market/Filterbar';
import NftContainer from '../Components/Market/NftContainer';
import useMobile from '../hooks/useMobile';
import event1 from "../assets/images/event/event1.svg"
import nft2 from "../assets/images/market/nft2.svg"
import arrow from "../assets/images/market/arrowleft.svg"
import cart from "../assets/images/market/cart2.svg"
import copy from "../assets/images/market/copy.svg"
import twitter from '../assets/images/event/twitter.svg'
import tg from '../assets/images/event/tg.svg'
import hat from '../assets/images/event/hat.svg'
import facebook from '../assets/images/event/facebook.svg'
import post from '../assets/images/event/post1.svg'
import post2 from '../assets/images/event/post2.svg'
import postMobile from '../assets/images/event/postmobile.svg'

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import nft from "../assets/images/market/nft1.svg"
import JoinNow from '../Components/Home/JoinNow';
import EventItem from '../Components/Event/EventItem';
import Pagenation from '../Components/Pagenation';
import { useNavigate } from 'react-router-dom';

const BlogPost: React.FC = () => {
    const { isMobile } = useMobile()
    let navigate = useNavigate();

    const onClickRead = () => {
        navigate("/blogPost/3")
    }
    const renderMobile = () => {
        return <Box padding="25px" display="flex" flexDirection="column">
            <Box><NewestBtn style={{ marginBottom: 30 }}><img src={arrow} style={{ marginRight: 5 }} alt="arrow" />Back</NewestBtn></Box>
            <Cbox borderTopRadius="8px" overflow="hidden">
                <img src={postMobile} alt="post" style={{ objectFit: 'cover' }} width="100%" />
            </Cbox>
            <Box style={{ background: `linear-gradient(90deg, #1D2328 0%, #1E1C28 100%)`, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} mt="-20px" mb="50px" p="14px">
                <Cbox p="28px" flexDirection="column">
                    <Cbox fontSize="20px" bold>Wonderland just introduced a new app for creating new <br /> games in Ariva wonderland</Cbox>
                    <Cbox fontSize="14px" >News  |  July 24, 2022</Cbox>
                </Cbox>
                <Box width="100%" bgcolor="rgba(53, 52, 91, 0.38)" borderRadius="20px" height="2px" mb="24px"></Box>
                <Cbox flexDirection="column">
                    <Cbox fontSize="16px" mb="10px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                    </Cbox>
                    <Cbox fontSize="16px" mb="20px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                    </Cbox>
                    <Cbox fontSize="24px" bold mb="10px">Odio Mauris Sed</Cbox>
                    <Cbox fontSize="16px" mb="10px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                    </Cbox>
                    <Cbox fontSize="16px" mb="20px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                    </Cbox>
                    <img src={post2} alt="post2" style={{ width: '100%', objectFit: 'cover' }} />
                    <Cbox mb="20px" fontSize="17px" bgcolor="#26293B" width="100%" justifyContent="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Cbox>
                    <Cbox fontSize="24px" bold mb="10px">Lorem Ipsum</Cbox>
                    <Cbox fontSize="16px" mb="10px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                    </Cbox>
                    <Cbox fontSize="16px" mb="20px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                    </Cbox>
                    <Cbox fontSize="24px" bold mb="10px">Mauris Sed</Cbox>
                    <Cbox fontSize="16px" mb="10px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                    </Cbox>
                    <Cbox fontSize="16px" mb="20px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                    </Cbox>
                </Cbox>
            </Box>
            <Cbox style={{ background: `linear-gradient(90deg, #1D2328 0%, #1E1C28 100%)` }} borderRadius="8px" pa="31" flexDirection="column">
                <Cbox fontSize="24px" bold mb="20px">Related articles</Cbox>
                <EventItem>
                    <Cbox mb="10px" fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                    <Cbox mb="10px" fontSize="16px" >News  |  July 24, 2022</Cbox>
                    <Cbox mb="10px" fontSize="16px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                    <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                </EventItem>
                <EventItem>
                    <Cbox mb="10px" fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                    <Cbox mb="10px" fontSize="16px" >News  |  July 24, 2022</Cbox>
                    <Cbox mb="10px" fontSize="16px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                    <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                </EventItem>
                <EventItem>
                    <Cbox mb="10px" fontSize="18px" bold>Lorem ipsum dolor sit amet.</Cbox>
                    <Cbox mb="10px" fontSize="16px" >News  |  July 24, 2022</Cbox>
                    <Cbox mb="10px" fontSize="16px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                    <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                </EventItem>
            </Cbox>
        </Box>
    }

    const renderWeb = () => {
        return <Box padding="75px 70px 70px 150px" flexDirection="column">
            <NewestBtn style={{ marginRight: 10, marginBottom: 30 }}><img src={arrow} style={{ marginLeft: 5 }} alt="arrow" />Back</NewestBtn>
            <Cbox borderTopRadius="8px" overflow="hidden">
                <img src={post} alt="post" width="100%" />
            </Cbox>
            <Box style={{ background: `linear-gradient(90deg, #1D2328 0%, #1E1C28 100%)`, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} mb="50px" p="28px">
                <Cbox pa="28" flexDirection="column">
                    <Cbox fsize="26" bold>Wonderland just introduced a new app for creating new <br /> games in Ariva wonderland</Cbox>
                    <Cbox fsize="16" >News  |  July 24, 2022</Cbox>
                </Cbox>
                <Box width="100%" bgcolor="rgba(53, 52, 91, 0.38)" borderRadius="20px" height="2px" mb="24px"></Box>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={2} sm={0}>
                        <Cbox flexDirection="column">
                            <Cbox mb="14px" flexDirection="column" pa="23" borderRadius="20px" bgcolor="#26293B">
                                <Cbox fsize="16">1- Lorem dolor</Cbox>
                                <Cbox fsize="16">2- Odio mauris sed</Cbox>
                                <Cbox fsize="16">3- Lorem ipsum</Cbox>
                                <Cbox fsize="16">4- Mauris</Cbox>
                                <Cbox fsize="16">5- Tortor eget</Cbox>
                            </Cbox>
                            <Cbox px="10px" py="3px" borderRadius="20px" bgcolor="#26293B">
                                <Cbox bold fsize="15" mr="0.7vw">Share</Cbox>
                                <Cbox bold fsize="15" mr="0.7vw"><img width={13} src={twitter} alt="" /></Cbox>
                                <Cbox bold fsize="15" mr="0.7vw"><img width={13} src={facebook} alt="" /></Cbox>
                                <Cbox bold fsize="15" mr="0.7vw"><img width={13} src={hat} alt="" /></Cbox>
                                <Cbox bold fsize="15" mr="0.7vw"><img width={13} src={tg} alt="" /></Cbox>
                            </Cbox>
                        </Cbox>
                    </Grid>
                    <Grid item lg={10} md={10} sm={12}>
                        <Cbox flexDirection="column">
                            <Cbox fsize="16" mb="10px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                            </Cbox>
                            <Cbox fsize="16" mb="20px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                            </Cbox>
                            <Cbox fsize="24" bold mb="10px">Odio Mauris Sed</Cbox>
                            <Cbox fsize="16" mb="10px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                            </Cbox>
                            <Cbox fsize="16" mb="20px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                            </Cbox>
                            <img src={post2} alt="post2" style={{ width: '47.12vw' }} />
                            <Cbox mb="20px" fsize="17" bgcolor="#26293B" width="100%" justifyContent="center" style={{ width: '47.12vw' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Cbox>
                            <Cbox fsize="24" bold mb="10px">Lorem Ipsum</Cbox>
                            <Cbox fsize="16" mb="10px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                            </Cbox>
                            <Cbox fsize="16" mb="20px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                            </Cbox>
                            <Cbox fsize="24" bold mb="10px">Mauris Sed</Cbox>
                            <Cbox fsize="16" mb="10px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a, mauris. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue.
                            </Cbox>
                            <Cbox fsize="16" mb="20px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vestibulum cras neque, rhoncus vulputate condimentum. Aliquam enim facilisis a. Et tempor, et felis odio mauris sed. Tortor eget nunc diam in diam scelerisque duis vitae diam. Nibh eget pulvinar feugiat est sed. Magna sodales leo amet, et, platea tellus dictum. Morbi tortor urna, eleifend sit congue elit ac. Amet convallis volutpat nulla aenean urna augue eleifend.
                            </Cbox>
                        </Cbox>
                    </Grid>
                </Grid>
            </Box>
            <Cbox style={{ background: `linear-gradient(90deg, #1D2328 0%, #1E1C28 100%)` }} borderRadius="8px" pa="31" flexDirection="column">
                <Cbox fsize="24" bold mb="20px">Related articles</Cbox>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={4} sm={4}>
                        <EventItem>
                            <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                            <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                            <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                        <EventItem>
                            <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                            <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                            <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                        <EventItem>
                            <Cbox mb="10px" fsize="18" bold>Lorem ipsum dolor sit amet.</Cbox>
                            <Cbox mb="10px" fsize="16" >News  |  July 24, 2022</Cbox>
                            <Cbox mb="10px" fsize="16" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus, proin volutpat, faucibus leo.</Cbox>
                            <Cbox><FilterBtn onClick={onClickRead} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Read</FilterBtn></Cbox>
                        </EventItem>
                    </Grid>
                </Grid>
            </Cbox>
        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default BlogPost
