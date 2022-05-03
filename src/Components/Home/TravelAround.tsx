/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/system";
import React from "react";
import { Cbox, CustomBtn, CustomButton, H, WatchButton } from "../CustomizeComponents";
import playico from "../../assets/images/home/playico.svg"
import justin from "../../assets/images/home/heroContainer.svg"
import useMobile from "../../hooks/useMobile";
import hero from "../../assets/images/home/Character.webp"
import heroContainer from "../../assets/images/home/heroContainer.png"
import { useNavigate } from "react-router-dom";

const TravelAround = () => {
    const { isMobile } = useMobile()
    let navigate = useNavigate();
    const renderWeb = () => {
        return (
            <Cbox style={{background: 'linear-gradient(90deg, rgba(102, 172, 212, 0.1) 0%, rgba(107, 67, 207, 0.1) 100%)'}} 
                borderRadius="8px" 
                pal="64" 
                pat="51"
                par="104"
                pab="64"
                cmb='49'
                flexDirection="column"
                position="relative"
                width="calc(100% - 12vw)"
            >
                <Cbox fsize="40" color="#C9F938" bold cmb="11">Ariva Wonderland</Cbox>
                <Cbox fsize="22" bold cmb="17">Travel around the Ariva Universe</Cbox>
                <Cbox fsize="20" cmb="30">Future in the past, past in the future</Cbox>
                <Cbox>
                    <CustomBtn onClick={()=>navigate('/roadmap')} radius="20px" pt="8" pb="8" pl="30" pr="30" color="#403E3F" bgcolor="#CBFA34" fsize="15" bold mr="18">RoadMap</CustomBtn>
                    <CustomBtn radius="20px" pt="8" pb="8" pl="19" pr="19" bgcolor="rgba(255, 255, 255, 0.09)" fsize="15" alignItems="center"> 
                        <img src={playico} className="player_ico" width={12} /> Watch the trailer
                    </CustomBtn>
                </Cbox>
                <Cbox position="absolute">

                </Cbox>
                <Box className="travel_wheel_container">
                    <img src={hero} alt="justin" style={{width: '29vw', height: '29vw', position: 'relative', top: '-2.5vw'}} />
                </Box>
            </Cbox>
        )
    }

    const renderMobile = () => {
        return (
            <Cbox className="mobile_travel_around_container" mobile pat="220" par="15" pal="15" pab="37">
                <Box className="mobile_travel_wheel_container">
                    <img src={hero} alt ="hero" style={{width: '100%'}}/>
                </Box>
                <Cbox mode="mobile" lineHeight="7vw" mobile fsize="30" color="#C9F938" bold>Ariva Wonderland</Cbox>
                <Cbox mode="mobile" lineHeight="8vw" mobile fsize="16"  bold>Travel around the Ariva Universe</Cbox>
                <Cbox mode="mobile" mobile fsize="12" cmb="24">Future in the past, past in the future</Cbox>

                <Box style={{display: 'flex', justifyContent: 'center'}}>
                <CustomBtn mb="13" onClick={()=>navigate('/roadmap')} radius="20px" mobile pl="30" pr="30" pt="7" pb="7" bold color="#403E3F">Roadmap</CustomBtn>
                <CustomBtn ml="5" mb="13" radius="20px" mobile pl="30" pr="30" pt="7" pb="7" color="white" bgcolor="rgba(255, 255, 255, 0.09)">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={playico} className="player_ico" width={13} />
                        Trailers
                    </div>
                </CustomBtn>
                </Box>
            </Cbox>

            // <Box p="58.2vw 14.6vw 9.5vw 7.7vw" style={{background: 'linear-gradient(90deg, rgba(102, 172, 212, 0.1) 0%, rgba(107, 67, 207, 0.1) 100%)'}} borderRadius="8px" display="flex" flexDirection="column">
            //     <Cbox mobile fsize="40" color="#C9F938" bold cmb="11">Ariva Wonderland</Cbox>
            //     <Cbox mobile fsize="22" bold cmb="17">Travel around the Ariva Universe</Cbox>
            //     <Cbox mobile fsize="20" cmb="30">Future in the past, past in the future</Cbox>
            // </Box>
        )
    }
    return !isMobile ? renderWeb() : renderMobile();
}

export default TravelAround