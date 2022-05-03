/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React from 'react';
import "../assets/css/home.scss"
import TravelAround from '../Components/Home/TravelAround';
import useMobile from '../hooks/useMobile';
import nft from "../assets/images/home/NFT.svg"
import maphome from "../assets/images/home/map-home.svg"
import nft2 from "../assets/images/home/NFTs2.svg"
import nft3 from "../assets/images/home/NFTs3.svg"
import nft4 from "../assets/images/home/NFTs4.svg"
import map_mobile1 from "../assets/images/home/map-mobile1.svg"
import mobileNFTs from "../assets/images/home/mobileNFTs.png"
import NFTWidget from '../Components/Home/NFTWidget';
import EventContainer from '../Components/Home/Events';
import Signup from '../Components/Home/Signup';
import PostCarousel from '../Components/Home/PostCarousel';
import JoinNow from '../Components/Home/JoinNow';
import { Cbox, CustomBtn } from '../Components/CustomizeComponents';
import travelIn from "../assets/images/home/travelin.svg"
import Time_Travel from "../assets/images/home/Time_Travel.svg"
import Second_Life from "../assets/images/home/Second_Life.svg"
import Social_Areas from "../assets/images/home/Social_Areas.svg"
import Advertising_Branding from "../assets/images/home/advertizing.svg"
import Land_Purchase from "../assets/images/home/Land_Purchase.svg"
import Land_Customization from "../assets/images/home/Land_Customization.svg"
import Custom_Creator from "../assets/images/home/Custom_Creator.svg"
import Play2_Earn from "../assets/images/home/Play2_Earn.svg"
import Keep_Communication from "../assets/images/home/Keep_Communication.svg"
import timeTravel_carousel from "../assets/images/home/Time-Travel.png"
import secondLife from "../assets/images/home/Second-Life.png"
import AdvBrand from "../assets/images/home/Advertising.png"
import Social_Areas_carousel from "../assets/images/home/Social.png"
import timeTravel_carousel_mobile from "../assets/images/home/Time-Travel-Mobile.png"
import secondLife_mobile from "../assets/images/home/Second-Life-Mobile.png"
import AdvBrand_mobile from "../assets/images/home/Advertising-Mobile.png"
import Social_Areas_carousel_mobile from "../assets/images/home/Social-Mobile.png"
import Welcome from "../assets/images/home/welcome.webp"
import Carousel from '../Components/Home/Carousel';
import { useNavigate } from 'react-router';

const Home: React.FC = () => {
    const { isMobile } = useMobile()
    let navigate = useNavigate();

    const mock1 = {
        eventsName: "Wonderland",
        evnetProps: [
            {
                title1: "Travel in",
                title2: "Metaverse",
                subTitle: "Break The Borders",
                img: travelIn
            },
            {
                title1: "Time",
                title2: "Travel",
                subTitle: "Future & Past",
                img: Time_Travel
            },
            {
                title1: "Second",
                title2: "Life",
                subTitle: "Marriage, Job, Trade",
                img: Second_Life
            },
            {
                title1: "Social",
                title2: "Areas",
                subTitle: "Cinema, concert",
                img: Social_Areas
            },
            {
                title1: "Advertising",
                title2: "Branding",
                subTitle: "Branding Areas & Billboards",
                img: Advertising_Branding
            },
        ]
    }

    const mock2 = {
        eventsName: "Future events ",
        evnetProps: [
            {
                title1: "Land",
                title2: "Purchase",
                subTitle: "Users' Land Acquisition",
                img: Land_Purchase
            },
            {
                title1: "Land",
                title2: "Customization",
                subTitle: "Take the Power",
                img: Land_Customization
            },
            {
                title1: "Custom",
                title2: "Creator",
                subTitle: "Build Everything You Want",
                img: Custom_Creator
            },
            {
                title1: "Play2",
                title2: "Earn",
                subTitle: "Earn by Play Time and More",
                img: Play2_Earn
            },
            {
                title1: "Keep",
                title2: "Communication",
                subTitle: "Voice, Text, Virtual",
                img: Keep_Communication
            },
        ]
    }

    const carouselMock1 = {
        title1: "More in",
        title2: "Ariva Universe",
        subTitle: "Discover the events on Ariva universe and participate in them.",
        items: [
            {
                img: timeTravel_carousel,
                title: "Time Travel",
                content: "Have you ever wondered how the pyramids were built? Or perhaps, you've often thought of how our world will look in 2050?  Wonderland has the ability to travel across time.",
                btnLabel: "Read More"
            },
            {
                img: secondLife,
                title: "Second Life",
                content: "Traveling, working, theater, taking the stage, visiting museums, are some of the tons of actions users can perform in the mainland of Ariva Wonderland - second life.",
                btnLabel: "Read More"
            },
        ]
    }

    const carouselMockMobile1 = {
        title1: "More in",
        title2: "Ariva Universe",
        subTitle: "Discover the events on Ariva universe and participate in them.",
        items: [
            {
                img: timeTravel_carousel_mobile,
                title: "Time Travel",
                content: "Have you ever wondered how the pyramids were built? Or perhaps, you've often thought of how our world will look in 2050?  Wonderland has the ability to travel across time.",
                btnLabel: "Read More"
            },
            {
                img: secondLife_mobile,
                title: "Second Life",
                content: "Traveling, working, theater, taking the stage, visiting museums, are some of the tons of actions users can perform in the mainland of Ariva Wonderland - second life.",
                btnLabel: "Read More"
            },
        ]
    }

    const carouselMock2 = {
        title1: "More than",
        title2: "Real Life",
        subTitle: "Travel-based end-to-end life with a virtual focus to experience the best.",
        items: [
            {
                img: AdvBrand,
                title: "Advertising & Branding",
                content: "Build brand awareness or broadcast your business (or product or campaign) to an audience composed of Gen Z's.",
                btnLabel: "Read"
            },
            {
                img: Social_Areas_carousel,
                title: "Social Areas",
                content: "Attending a concert is available on the mainland, going to the cinema, even participating in a training program and much more. ",
                btnLabel: "Read"
            },
        ]
    }

    const carouselMockMobile2 = {
        title1: "More than",
        title2: "Real Life",
        subTitle: "Travel-based end-to-end life with a virtual focus to experience the best.",
        items: [
            {
                img: AdvBrand_mobile,
                title: "Advertising & Branding",
                content: "Build brand awareness or broadcast your business (or product or campaign) to an audience composed of Gen Z's.",
                btnLabel: "Read"
            },
            {
                img: Social_Areas_carousel_mobile,
                title: "Social Areas",
                content: "Attending a concert is available on the mainland, going to the cinema, even participating in a training program and much more. ",
                btnLabel: "Read"
            },
        ]
    }
    const renderWebHome = () => {
        return (<Box className="home" >
            {/* <Grid container spacing={3}> */}
            <Box display="flex" width="100%" justifyContent="space-between" alignItems="flex-start">
                <Box width="62.5vw" marginRight="1.863vw">
                    <Box className="home_grid">
                        <TravelAround />
                        <Cbox borderRadius="10px" cmb="27" position="relative" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="14" width="66.67%" zIndex="-1">
                            <img src={Welcome} alt="nft" style={{height: '25.668vw', objectFit: 'cover'}} />
                            {/* <img src={nft} alt="nft" style={{ width: '37.8vw' }} /> */}
                            <Cbox
                                position="absolute"
                                top="50%"
                                left="50%"
                                width="100%"
                                maxWidth="44.1vw"
                                pat="34"
                                par="44"
                                pab="43"
                                pal="45"
                                flexDirection="column"
                                zIndex={0}
                                style={{ transform: 'translate(0%, -50%)', background: 'linear-gradient(90deg, rgba(42, 59, 70, 0.88) 0%, rgba(64, 44, 114, 0.92) 100%)' }}
                            >
                                <Cbox fsize="30" bold cmb="7">Welcome to the Future</Cbox>
                                <Cbox fsize="14">Ariva is changing the future of tourism. Ariva Wonderland aims to bring the dynamics of life and the pinnacle of entertainment around a unique travel experience.</Cbox>
                                <br/>
                                <Cbox fsize="14">
                                    Ariva pushes the limits regarding what is possible thanks to the utilization of virtual reality within the crypto and DeFi space. Through it, users shall be able to virtually travel to amazing attractions from the comfort of their own homes.
                                </Cbox>
                                <br/>
                                <Cbox fsize="14">
                                    Don't lose the opportunity to experience a new kind of tourism.
                                </Cbox>
                            </Cbox>
                        </Cbox>
                        <Cbox
                            style={{ background: 'linear-gradient(90deg, #2A3B47 0%, #402C72 100%' }}
                            borderRadius="8px"
                            pat="28"
                            pal="29"
                            pab="40"
                            width="100%"
                            flexDirection="column"
                            position='relative'
                            cmb="97"
                        >
                            <Cbox flexDirection="column" width="45%">
                                <Cbox fsize="36" bold>Map</Cbox>
                                <Cbox lineHeight="1.3vw" fsize="14" cmb="20">There are many areas to travel in Ariva Wonderland, 7 galaxies and 7 craters in each, thousands of customized lands in 49 different space areas. They are all connected to the mainland, bringing it to a total of 160,000 parcels. </Cbox>
                                <Cbox><CustomBtn onClick={() => navigate('/map')} fsize="16" fontWeight="600" pt="6" pb="6" pl="40" pr="40" radius="12px" bgcolor="white" color="#6B43CF">See the map</CustomBtn></Cbox>
                                <Cbox borderRadius="10px" position="absolute" right="2.7vw" top="-3vw" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="14" height="25vw" width="25vw" zIndex=" -1">
                                </Cbox>
                                <img src={maphome} alt="" style={{ position: 'absolute', right: '3.75vw', top: '-2vw', width: '23vw', height: '23vw', objectFit: 'cover' }} />
                            </Cbox>
                        </Cbox>

                        <Cbox
                            style={{ background: 'linear-gradient(90deg, #2A3B47 0%, #402C72 100%' }}
                            borderRadius="8px"
                            pat="28"
                            par="29"
                            pab="40"
                            width="100%"
                            flexDirection="column"
                            position='relative'
                            alignItems="flex-end"
                        >
                            <Cbox flexDirection="column" width="45%" >
                                <Cbox fsize="36" bold>NFTs</Cbox>
                                <Cbox lineHeight="1.3vw" fsize="14" cmb="20">Ariva Wonderland is an immersive experience for its users, you can claim your ownership of land pieces, personalize your avatars, assets, and anything else in Ariva Universe with a secure way using (Non-Fungible Tokens) NFTs. </Cbox>
                                <Cbox><CustomBtn  onClick={() => navigate('/market')} fsize="16" fontWeight="600" pt="6" pb="6" pl="40" pr="40" radius="12px" bgcolor="white" color="#6B43CF">Market</CustomBtn></Cbox>
                                <Cbox borderRadius="10px" position="absolute" left="2vw" top="-3vw" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="14" height="25vw" width="25vw" zIndex=" -1">
                                </Cbox>
                                <img src={nft2} alt="" style={{ position: 'absolute', left: '3vw', top: '-2vw', width: '23vw', height: '23vw', objectFit: 'cover' }} />
                            </Cbox>
                        </Cbox>
                    </Box>
                </Box>
                <Box width="19vw">
                    <Box className="home_event_grid">
                        <EventContainer evnetProps={mock1.evnetProps} eventsName={mock1.eventsName} />
                        <EventContainer evnetProps={mock2.evnetProps} eventsName={mock2.eventsName} />
                        <Signup />
                    </Box>
                </Box>
                {/* </Grid> */}
            </Box>
            <PostCarousel {...carouselMock1}></PostCarousel>
            <JoinNow/>
            <Box mt="4.27vw"><Carousel /></Box>
            <PostCarousel {...carouselMock2}></PostCarousel>
        </Box>)
    }

    const renderMobileHome = () => {
        return (
            <Box className="mobile_home">
                <TravelAround />
                <Cbox flexDirection="column" cmt="50" borderRadius="10px" overflow="hidden">
                    <Cbox mobile style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="14" justifyContent="center" alignItems="center">
                        <img src={Welcome} alt="nft" style={{ width: '83vw' }} />
                    </Cbox>
                    <Cbox
                        width="100%"
                        pat="34"
                        par="20"
                        pab="43"
                        pal="20"
                        flexDirection="column"
                        mobile
                        zIndex={0}
                        style={{ background: 'linear-gradient(90deg, rgba(42, 59, 70, 0.88) 0%, rgba(64, 44, 114, 0.92) 100%)' }}
                    >
                        <Cbox mobile fsize="24" bold cmb="7">Welcome to the Future</Cbox>
                        <Cbox mobile fsize="16">
                            Ariva is changing the future of tourism. Ariva Wonderland aims to bring the dynamics of life and the pinnacle of entertainment around a unique travel experience.
                        </Cbox>
                        <br/>
                        <Cbox mobile fsize="16">
                            Ariva pushes the limits regarding what is possible thanks to the utilization of virtual reality within the crypto and DeFi space. Through it, users shall be able to virtually travel to amazing attractions from the comfort of their own homes.
                        </Cbox>
                        <br/>
                        <Cbox mobile fsize="16">
                            Don't lose the opportunity to experience a new kind of tourism.
                        </Cbox>
                    </Cbox>
                </Cbox>
                <Cbox flexDirection="column" cmt="100" borderRadius="10px" overflow="hidden">
                    <Cbox mobile style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="14" justifyContent="center" alignItems="center">
                        <img src={map_mobile1} alt="nft" style={{ width: '83vw' }} />
                    </Cbox>
                    <Cbox
                        width="100%"
                        pat="34"
                        par="20"
                        pab="43"
                        pal="20"
                        flexDirection="column"
                        mobile
                        zIndex={0}
                        style={{ background: 'linear-gradient(90deg, rgba(42, 59, 70, 0.88) 0%, rgba(64, 44, 114, 0.92) 100%)' }}
                    >
                        <Cbox mobile fsize="24" bold cmb="7">Map</Cbox>
                        <Cbox mobile fsize="16" cmb="20">There are many areas to travel in Ariva Wonderland, 7 galaxies and 7 craters in each, thousands of customized lands in 49 different space areas. They are all connected to the mainland, bringing it to a total of 160,000 parcels.
                        </Cbox>
                        <Cbox><CustomBtn mobile fsize="16" onClick={() => navigate('/map')} fontWeight="600" pt="12" pb="12" pl="20" pr="20" radius="12px" bgcolor="white" color="#6B43CF">See the map</CustomBtn></Cbox>
                    </Cbox>
                </Cbox>

                <Cbox flexDirection="column" cmt="100" borderRadius="10px" overflow="hidden">
                    <Cbox mobile style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} pa="14" justifyContent="center" alignItems="center">
                        <img src={mobileNFTs} alt="nft" style={{ width: '83vw' }} />
                    </Cbox>
                    <Cbox
                        width="100%"
                        pat="34"
                        par="20"
                        pab="43"
                        pal="20"
                        flexDirection="column"
                        mobile
                        zIndex={0}
                        style={{ background: 'linear-gradient(90deg, rgba(42, 59, 70, 0.88) 0%, rgba(64, 44, 114, 0.92) 100%)' }}
                    >
                        <Cbox mobile fsize="24" bold cmb="7">NFTs</Cbox>
                        <Cbox mobile fsize="16" cmb="20">Ariva Wonderland is an immersive experience for its users, you can claim your ownership of land pieces, personalize your avatars, assets, and anything else in Ariva Universe with a secure way using (Non-Fungible Tokens) NFTs.
                        </Cbox>
                        <Cbox><CustomBtn mobile fsize="16"  onClick={() => navigate('/market')} fontWeight="600" pt="12" pb="12" pl="20" pr="20" radius="12px" bgcolor="white" color="#6B43CF">Market</CustomBtn></Cbox>
                    </Cbox>
                </Cbox>
                <div style={{ marginTop: '8.2vw', marginBottom: 20, width: '100%' }}><Signup /></div>
                <PostCarousel {...carouselMockMobile1}></PostCarousel>
                <JoinNow/>
                <Carousel />
                <PostCarousel {...carouselMockMobile2}></PostCarousel>
            </Box>
        )
    }

    return !isMobile ? renderWebHome() : renderMobileHome();

}

export default Home
