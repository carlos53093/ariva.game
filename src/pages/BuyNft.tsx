/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React from 'react';
import "../assets/css/market.scss"
import Filterbar from '../Components/Market/Filterbar';
import NftContainer from '../Components/Market/NftContainer';
import useMobile from '../hooks/useMobile';
import nft1 from "../assets/images/market/nft1.svg"
import nft2 from "../assets/images/market/nft2.svg"
import arrow from "../assets/images/market/arrowdown.svg"
import cart from "../assets/images/market/cart2.svg"
import copy from "../assets/images/market/copy.svg"
import twitter from '../assets/images/footer/twitter.svg'
import twitch from '../assets/images/footer/twitch.svg'
import instagram from '../assets/images/footer/instagram.svg'
import facebook from '../assets/images/footer/facebook.svg'
import nftIcon from '../assets/images/market/nftIcon.svg'

import _ from "lodash"
import { Bold, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import nft from "../assets/images/market/nft1.svg"
import JoinNow from '../Components/Home/JoinNow';

const BuyNft: React.FC = () => {
    const { isMobile } = useMobile()

    const renderMobile = () => {
        return <Box padding="25px" display="flex" flexDirection="column">
            <NewestBtn style={{ marginLeft: 10, marginBottom: 20, width: 'fit-content' }}>Newest<img src={arrow} style={{ marginLeft: 5 }} alt="arrow" /></NewestBtn>
            <Box style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} padding="2px" borderRadius="8px" mb="40px">
                <Box padding="20px" display="flex" flexDirection="column" justifyContent="start" alignItems="flex-start" bgcolor="#201F2D" borderRadius="8px">
                    <H mode="mobile">Blue globe</H>
                    <Box width="100%" mb="20px" >
                        <Box display="flex" justifyContent="center">
                            <img src={nft} alt="nft" width='100%' />
                        </Box>

                    </Box>
                    <Box bgcolor="rgba(75, 74, 75, 0.3)" p="9px 15px" borderRadius="18px" mb="20px" display='flex' justifyContent='space-between' width={'100%'} >
                        <TextNormal>Current price</TextNormal>
                        <Bold>TextNormal</Bold>
                    </Box>
                    <Box bgcolor="rgba(75, 74, 75, 0.3)" p="9px 15px" borderRadius="18px" mb="20px" display='flex' justifyContent='space-between' width={'100%'} >
                        <TextNormal>Amount</TextNormal>
                        <Bold>4 of 200</Bold>
                    </Box>
                    <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
                        <NewestBtn>Add to cart <img src={cart} alt="" /></NewestBtn>
                        <FilterBtn>Buy now</FilterBtn>
                    </Box>
                </Box>
            </Box>
            <Box style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} padding="2px" borderRadius="8px">
                <Box padding="20px" display="flex" flexDirection="column" justifyContent="start" alignItems="flex-start" bgcolor="#201F2D" borderRadius="8px">
                    <Box display="flex" mb="20px">
                        <TextNormal style={{ marginRight: 11, display: 'inline' }}>Token ID: 8766...5440</TextNormal>
                        <img src={copy} alt="copy" style={{ marginRight: 20 }} />
                    </Box>
                    <Box bgcolor="rgba(255, 255, 255, 0.06)" borderRadius="10px" padding="10px 15px" mb="40px">
                        <TextNormal>200 Minted    |    4 for sale    |    1 Owner</TextNormal>
                    </Box>
                    <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" mb="50px" p="16px" display="flex" flexDirection="column" >
                        <Bold style={{ fontSize: 16 }}>About</Bold>
                        <TextNormal style={{ fontSize: 12 }}><b>Type:</b> Entity</TextNormal>
                        <TextNormal style={{ fontSize: 12 }}><b>Behaviors:</b> Animated decorations</TextNormal>
                        <TextNormal style={{ fontSize: 12 }}><b>Biomes:</b> None </TextNormal>
                        <Box display="flex">
                            <TextNormal style={{ fontSize: 12, marginRight: 10, padding: '5px 10px' }}><b>Tags: </b></TextNormal>
                            <WatchButton style={{ fontSize: 12,marginRight: 10, padding: '5px 10px' }}>Machine</WatchButton>
                            <WatchButton style={{ fontSize: 12,marginRight: 10, padding: '5px 10px' }}>Sci-Fi</WatchButton>
                            <WatchButton style={{ fontSize: 12,marginRight: 10, padding: '5px 10px' }}>Retro</WatchButton>
                        </Box>
                    </Box>
                    <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" mb="50px" p="16px" display="flex" flexDirection="column" >
                        <Bold style={{ fontSize: 16 }}>Description</Bold>
                        <TextNormal style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae habitasse tristique nunc sit nunc, morbi amet. Id vel consequat viverra sed et. Adipiscing nunc, massa, sodales egestas sollicitudin viverra id. Adipiscing nunc, massa, sodales egestas sollicitudin viverra id.</TextNormal>
                    </Box>
                    <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" mb="50px" p="16px" display="flex" flexDirection="column" >
                        <Bold style={{ fontSize: 18, marginBottom: 20 }}>Share</Bold>
                        <Box display="flex" alignItems="center">
                            <Box className="footer_ico_container" mr="10px"><img src={twitter} alt="twitter" /></Box>
                            <Box className="footer_ico_container" mr="10px"><img src={facebook} alt="facebook" /></Box>
                            <Box className="footer_ico_container" mr="10px"><img src={instagram} alt="instagram" /></Box>
                            <Box className="footer_ico_container" mr="10px"><img src={twitch} alt="twitch" /></Box>
                        </Box>
                    </Box>
                    <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" p="16px" display="flex" flexDirection="column"  >
                        <Bold style={{ fontSize: 18, marginBottom: 20 }}>Description</Bold>
                        <Box display="flex" alignItems="center" mb="30px">
                            <img src={nftIcon} alt="nftIcon" />
                            <Box display="flex" flexDirection="column" >
                                <Bold>@Blue</Bold>
                                <TextNormal>Created 127 NFTs</TextNormal>
                            </Box>

                        </Box>
                            <Bold style={{marginBottom: 30}}>NFTs created by @Blue</Bold>
                            <Box><WatchButton style={{marginBottom: 30}}>See more</WatchButton></Box>
                        <Box bgcolor="rgba(255, 255, 255, 0.06);" px={3} borderRadius="10px" mb="30px" display="flex" alignItems="center">
                            <img src={nft1} alt="nft" width="70" />
                            <Box display="flex" py={3} alignItems="center" flexDirection="column" width="100%" justifyContent="center"> 
                                <Bold style={{marginBottom: 10}}>Blue Things</Bold>
                                <WatchButton>900000 ARV</WatchButton>
                            </Box>
                        </Box>
                        <Box bgcolor="rgba(255, 255, 255, 0.06);" px={3} borderRadius="10px" mb="30px" display="flex" alignItems="center">
                            <img src={nft1} alt="nft" width="70" />
                            <Box display="flex" py={3} alignItems="center" flexDirection="column" width="100%" justifyContent="center"> 
                                <Bold style={{marginBottom: 10}}>Blue Things</Bold>
                                <WatchButton>900000 ARV</WatchButton>
                            </Box>
                        </Box>
                        <Box bgcolor="rgba(255, 255, 255, 0.06);" px={3} borderRadius="10px" mb="30px" display="flex" alignItems="center">
                            <img src={nft1} alt="nft" width="70" />
                            <Box display="flex" py={3} alignItems="center" flexDirection="column" width="100%" justifyContent="center"> 
                                <Bold style={{marginBottom: 10}}>Blue Things</Bold>
                                <WatchButton>900000 ARV</WatchButton>
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    }

    const renderWeb = () => {
        return <Box padding="75px 70px 70px 150px" >
            <NewestBtn style={{ marginLeft: 10 }}>Newest<img src={arrow} style={{ marginLeft: 5 }} alt="arrow" /></NewestBtn>
            <Box mt="40px" mb="70px" display="flex" justifyContent="center" alignItems="flex-start">
                <Box flex={1} p="7px" borderRadius="8px" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }}>
                    <Box p="3.9vw" display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column" bgcolor="#201F2D">
                        <H style={{ marginBottom: 27 }}>Blue globe</H>
                        <Box display="flex" justifyContent="center" width="100%">
                            <Box style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} p="2px" mb="20px" borderRadius="4px" >
                                <Box padding="11px 37px 12px 49px" bgcolor="#201F2D" >
                                    <img src={nft} alt="nft" width='100%' />
                                </Box>
                            </Box>
                        </Box>
                        <Box bgcolor="rgba(75, 74, 75, 0.3)" p="9px 15px" borderRadius="18px" mb="20px" display='flex' justifyContent='space-between' width={'100%'} >
                            <TextNormal>Current price</TextNormal>
                            <Bold>TextNormal</Bold>
                        </Box>
                        <Box bgcolor="rgba(75, 74, 75, 0.3)" p="9px 15px" borderRadius="18px" mb="20px" display='flex' justifyContent='space-between' width={'100%'} >
                            <TextNormal>Amount</TextNormal>
                            <Bold>4 of 200</Bold>
                        </Box>
                        <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
                            <NewestBtn>Add to cart <img src={cart} alt="" /></NewestBtn>
                            <FilterBtn>Buy now</FilterBtn>
                        </Box>

                    </Box>
                </Box>
                <Box flex={2} p="7px" ml="-7px" borderRadius="8px" display="flex" flexDirection="column" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }}>
                    <Box display="flex" padding="30px" alignItems="flex-start" flexDirection="column" bgcolor="#201F2D"  >
                        <Box display="flex" alignItems="center" mb="30px">
                            <TextNormal style={{ marginRight: 11 }}>Token ID: 8766...5440</TextNormal>
                            <img src={copy} alt="copy" style={{ marginRight: 20 }} />
                            <Box bgcolor="rgba(255, 255, 255, 0.06)" borderRadius="10px" padding="10px 15px">
                                <TextNormal>200 Minted    |    4 for sale    |    1 Owner</TextNormal>
                            </Box>
                        </Box>

                        <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" mb="50px" p="16px" display="flex" flexDirection="column" >
                            <Bold style={{ fontSize: 18 }}>About</Bold>
                            <TextNormal style={{ fontSize: 18 }}><b>Type:</b>Entity</TextNormal>
                            <TextNormal style={{ fontSize: 18 }}><b>Behaviors:</b>Animated decorations</TextNormal>
                            <TextNormal style={{ fontSize: 18 }}><b>Biomes:</b>None </TextNormal>
                            <Box display="flex">
                                <TextNormal style={{ fontSize: 18, marginRight: 10 }}><b>Tags: </b></TextNormal>
                                <WatchButton style={{ marginRight: 10 }}>Machine</WatchButton>
                                <WatchButton style={{ marginRight: 10 }}>Sci-Fi</WatchButton>
                                <WatchButton style={{ marginRight: 10 }}>Retro</WatchButton>
                            </Box>
                        </Box>
                        <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" mb="50px" p="16px" display="flex" flexDirection="column" >
                            <Bold style={{ fontSize: 18 }}>Description</Bold>
                            <TextNormal style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae habitasse tristique nunc sit nunc, morbi amet. Id vel consequat viverra sed et. Adipiscing nunc, massa, sodales egestas sollicitudin viverra id. Adipiscing nunc, massa, sodales egestas sollicitudin viverra id.</TextNormal>
                        </Box>
                        <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" mb="50px" p="16px" display="flex" flexDirection="column" >
                            <Bold style={{ fontSize: 18, marginBottom: 20 }}>Share</Bold>
                            <Box display="flex" alignItems="center">
                                <Box className="footer_ico_container" mr="10px"><img src={twitter} alt="twitter" /></Box>
                                <Box className="footer_ico_container" mr="10px"><img src={facebook} alt="facebook" /></Box>
                                <Box className="footer_ico_container" mr="10px"><img src={instagram} alt="instagram" /></Box>
                                <Box className="footer_ico_container" mr="10px"><img src={twitch} alt="twitch" /></Box>
                            </Box>
                        </Box>
                        <Box borderRadius="10px" width="100%" bgcolor="rgba(255, 255, 255, 0.06)" p="16px" display="flex" flexDirection="column"  >
                            <Bold style={{ fontSize: 18, marginBottom: 20 }}>Description</Bold>
                            <Box display="flex" alignItems="center" mb="30px">
                                <img src={nftIcon} alt="nftIcon" />
                                <Box display="flex" flexDirection="column" >
                                    <Bold>@Blue</Bold>
                                    <TextNormal>Created 127 NFTs</TextNormal>
                                </Box>

                            </Box>
                            <Box display="flex" justifyContent="space-between" width="100%" mb="30px">
                                <Bold>NFTs created by @Blue</Bold>
                                <WatchButton>See more</WatchButton>
                            </Box>
                            <Box bgcolor="rgba(255, 255, 255, 0.06);" px={3} borderRadius="10px" mb="30px" display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center"><img src={nft1} alt="nft" width="70" /> <Bold>Blue Things</Bold></Box>
                                <WatchButton>900000 ARV</WatchButton>
                            </Box>
                            <Box bgcolor="rgba(255, 255, 255, 0.06);" px={3} borderRadius="10px" mb="30px" display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center"><img src={nft1} alt="nft" width="70" /> <Bold>Blue Things</Bold></Box>
                                <WatchButton>900000 ARV</WatchButton>
                            </Box>
                            <Box bgcolor="rgba(255, 255, 255, 0.06);" px={3} borderRadius="10px" mb="30px" display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center"><img src={nft1} alt="nft" width="70" /> <Bold>Blue Things</Bold></Box>
                                <WatchButton>900000 ARV</WatchButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <JoinNow></JoinNow>
        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default BuyNft
