/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React from 'react';
import _ from 'lodash';
import "../assets/css/footer.scss";
import useMobile from '../hooks/useMobile';
import { Line, TextNormal, UnderlinedText } from './CustomizeComponents';
import twitter from '../assets/images/footer/twitter.svg'
import twitch from '../assets/images/footer/twitch.svg'
import instagram from '../assets/images/footer/instagram.svg'
import facebook from '../assets/images/footer/facebook.svg'
import logo from "../assets/images/sidebar/logo.svg"
import { useNavigate } from 'react-router';

const Footer: React.FC = () => {
    const { isMobile } = useMobile()
    let navigate = useNavigate();

    const renderWeb = () => {
        return (
            <Box className="footer">
                <Grid container spacing={4}>
                    <Grid item md={3} className="flex items-start justify-start" flexDirection={'column'}>
                        <UnderlinedText style={{ marginBottom: 13 }}>Ariva</UnderlinedText>
                        <TextNormal><a href='https://ariva.digital/' target="_blank">Ariva.Digital</a></TextNormal>
                        <TextNormal><a href='https://ariva.finance/' target="_blank">Ariva.Finance</a></TextNormal>
                        <TextNormal><a href='https://ariva.world/' target="_blank">Ariva.World</a></TextNormal>
                        <TextNormal><a href='https://linktr.ee/arivadigital' target="_blank">Linktree</a></TextNormal>
                    </Grid>
                    <Grid item md={4} className="flex items-start justify-start" flexDirection={'column'}>
                        <UnderlinedText style={{ marginBottom: 13 }}>Wonderland</UnderlinedText>
                        <TextNormal style={{cursor: 'pointer'}} onClick={()=>navigate('/roadmap')}>Road Map</TextNormal>
                        <TextNormal style={{cursor: 'pointer'}} >ETH Explorer</TextNormal>
                        <TextNormal style={{cursor: 'pointer'}} >BSC Explorer</TextNormal>
                    </Grid>
                    <Grid item md={5} className="flex flex-col items-start justify-start" flexDirection={'column'}>
                        <Box display={'flex'} flexDirection="row" justifyContent={'center'} alignItems="center" style={{ marginBottom: 20 }} >
                            <img src={logo} alt="logo" style={{ marginRight: 10 }} />
                            <TextNormal style={{ fontSize: 35 }}>Ariva Wonderland</TextNormal>
                        </Box>
                        <TextNormal style={{ marginBottom: 20 }}>Ariva is changing the futrue of tourism. </TextNormal>
                        <Box className="flex flex-row items-start justify-start">
                            <Box className="footer_ico_container"><a href="https://twitter.com/ArivaWonderland" target="_blank"><img src={twitter} alt="twitter" /></a></Box>
                            <Box className="footer_ico_container"><a href="https://www.facebook.com/ArivaWonderland/" target="_blank"><img src={facebook} alt="facebook" /></a></Box>
                            <Box className="footer_ico_container"><a href="https://www.instagram.com/ArivaWonderland/" target="_blank"><img src={instagram} alt="instagram" /></a></Box>
                            <Box className="footer_ico_container"><a href="https://discord.gg/nnFn8HgPhv" target="_blank"><img src={twitch} alt="twitch" /></a></Box>
                        </Box>
                    </Grid>
                </Grid>
                <Line />
                <Box display="flex" justifyContent="space-between" alignItems="center" className="w-full">
                    <Box display="flex" justifyContent="start">
                        <Box style={{ marginRight: 30 }}><TextNormal style={{ fontSize: 12 }}>© Ariva Wonderland 2022</TextNormal></Box>
                        {/* <Box style={{ marginRight: 30 }}><TextNormal style={{ fontSize: 12 }}>Help</TextNormal></Box> */}
                        {/* <Box style={{ marginRight: 30 }}><TextNormal style={{ fontSize: 12 }}>Privacy </TextNormal></Box> */}
                        <Box style={{ marginRight: 30 }}><TextNormal style={{ fontSize: 12 }}><a target="_blank">Terms of use</a></TextNormal> </Box>
                    </Box>
                    <Box><TextNormal style={{ fontSize: 12 }}>Version 1.0.0</TextNormal></Box>
                </Box>
            </Box>
        )
    }

    const renderMobile = () => {
        return (<Box className="mobile_footer" display="flex" justifyContent="start" alignItems="flex-start" flexDirection="column" >
            <UnderlinedText style={{ marginBottom: 13 }}>Ariva</UnderlinedText>
            <TextNormal><a href='https://ariva.digital/' target="_blank">Ariva.Digital</a></TextNormal>
            <TextNormal><a href='https://ariva.finance/' target="_blank">Ariva.Finance</a></TextNormal>
            <TextNormal><a href='https://ariva.world/' target="_blank">Ariva.World</a></TextNormal>
            <TextNormal><a href='https://linktr.ee/arivadigital' target="_blank">Linktree</a></TextNormal>
            <UnderlinedText style={{ marginBottom: 13, marginTop: 15 }}>Wonderland</UnderlinedText>
            <TextNormal style={{cursor: 'pointer'}} onClick={()=>navigate('/roadmap')}>Road Map</TextNormal>
            <TextNormal style={{cursor: 'pointer'}} >ETH Explorer</TextNormal>
            <TextNormal style={{cursor: 'pointer'}} >BSC Explorer</TextNormal>
            <Box display={'flex'} flexDirection="row" justifyContent={'center'} alignItems="center" style={{ marginTop: 30, marginBottom: 20 }} >
                <img src={logo} alt="logo" style={{ marginRight: 10 }} />
                <TextNormal style={{ fontSize: 22 }}>Ariva Wonderland</TextNormal>
            </Box>
            <TextNormal style={{ marginBottom: 20 }}>Ariva is changing the futrue of tourism. </TextNormal>
            <Box className="flex flex-row items-start justify-start">
                <Box className="footer_ico_container"><a href="https://twitter.com/ArivaWonderland" target="_blank"><img src={twitter} alt="twitter" /></a></Box>
                <Box className="footer_ico_container"><a href="https://www.facebook.com/ArivaWonderland/" target="_blank"><img src={facebook} alt="facebook" /></a></Box>
                <Box className="footer_ico_container"><a href="https://www.instagram.com/ArivaWonderland/" target="_blank"><img src={instagram} alt="instagram" /></a></Box>
                <Box className="footer_ico_container"><img src={twitch} alt="twitch" /></Box>
            </Box>
            <Line />
            <Box display="flex" justifyContent="space-between" alignItems="start" className="w-full">
                <Box display="flex" justifyContent="start" flexDirection="column">
                    <Box style={{ marginRight: 15 }}><TextNormal style={{ fontSize: 11 }}>© Ariva Wonderland 2022</TextNormal></Box>
                </Box>
                <Box display="flex" justifyContent="start" flexDirection="column">
                    <Box><TextNormal style={{ fontSize: 11, marginBottom: '10px'}}>Version 1.0.0</TextNormal></Box>
                    {/* <Box style={{ marginRight: 15 }}><TextNormal style={{ fontSize: 11 }}>Help</TextNormal></Box> */}
                    {/* <Box style={{ marginRight: 15 }}><TextNormal style={{ fontSize: 11 }}>Privacy </TextNormal></Box> */}
                    <Box style={{ marginRight: 15 }}><TextNormal style={{ fontSize: 11 }}><a target="_blank">Terms of use</a></TextNormal> </Box>
                </Box>
                
            </Box>
        </Box>)
    }

    return window.location.pathname === '/map' && isMobile ? null :( !isMobile ? renderWeb() : renderMobile())

}

export default Footer
