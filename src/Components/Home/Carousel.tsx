/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid } from "@mui/material";
import React, { FC, useState } from "react";
import useMobile from "../../hooks/useMobile";
import { Cbox, CustomBtn } from "../CustomizeComponents";
import carousel1 from "../../assets/images/home/Carousel1.svg"
import drop from "../../assets/images/home/drop.svg"
import clcok from "../../assets/images/home/clcok.svg"
import playerico from "../../assets/images/home/playerico.svg"
import _ from "lodash";
import img1 from "../../assets/images/home/carousel/1.png"
import img2 from "../../assets/images/home/carousel/2.png"
import img3 from "../../assets/images/home/carousel/3.png"
import img4 from "../../assets/images/home/carousel/4.png"
import img5 from "../../assets/images/home/carousel/5.png"
import img6 from "../../assets/images/home/carousel/6.png"
import img7 from "../../assets/images/home/carousel/7.png"
import img8 from "../../assets/images/home/carousel/8.png"

const imgList = [img1, img2, img3, img4, img5, img6, img7, img8];

interface CarouselItmProps {
    img: any
    title: string;
    content: string
    btnLabel: string
}

interface CarouselPorps {
}

const Carousel: FC<CarouselPorps> = (props: CarouselPorps) => {
    const { isMobile } = useMobile()
    const [page, setPage] = useState(0);
    const previewPage = () => {
        if (page - 1 >= 0)
            setPage(page - 1);
    }
    const nextPage = () => {
        if (page + 1 <= 7)
            setPage(page + 1);
    }
    const renderWeb = () => {
        return <Box p="2.62vw 3.03vw 3.03vw 2.2vw" borderRadius="8px" display="flex" justifyContent="center" alignItems="center" flexDirection="column" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }}>
            <Cbox cmb="13" bold fsize="34">What’s going on in Ariva Wonderland?</Cbox>
            <Cbox fsize="16" cmb="38">See what is happening in Ariva Wonderland, a universe full of wonderful events.</Cbox>
            <Grid container columns={47} spacing={1} >
                <Grid item sm={36}>
                    <Box position="relative" height="100%" borderRadius="8px" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px">
                        <img src={imgList[page]} alt="carousel" style={{ borderRadius: 8, height: '100%', objectFit: 'cover'}} />
                        <Box onClick={nextPage} className="carousel_playerIco" style={{ padding: '1.173vw', transform: 'translateX(50%)' }}><img src={playerico} /></Box>
                        <Box onClick={previewPage} className="carousel_playerIco_reverse" style={{ padding: '1.173vw' }}><img src={playerico} /></Box>
                    </Box>
                </Grid>
                <Grid item sm={11} display="flex" justifyContent="space-between" alignItems="center" flexDirection="column">
                    <Cbox onClick={()=>setPage(Math.min(page, 5))} borderRadius="8px" overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px" >
                        <img src={imgList[Math.min(page, 5)]} alt="carousel" style={{ borderRadius: 8, objectFit: 'cover' }} />
                    </Cbox>
                    <Cbox onClick={()=>setPage(Math.min(page, 5)+1)}  borderRadius="8px" overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px" >
                        <img src={imgList[Math.min(page, 5) + 1]} alt="carousel" style={{ borderRadius: 8, objectFit: 'cover' }} />
                    </Cbox>
                    <Cbox onClick={()=>setPage(Math.min(page, 5)+2)}  borderRadius="8px" overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px" >
                        <img src={imgList[Math.min(page, 5) + 2]} alt="carousel" style={{ borderRadius: 8, objectFit: 'cover' }} />
                    </Cbox>
                </Grid>
            </Grid>
        </Box>
    }

    const renderMobile = () => {
        return <Box p="9vw 5vw 6.4vw 5vw" display="flex" borderRadius="8px" justifyContent="center" alignItems="center" flexDirection="column" style={{ background: 'linear-gradient(90deg, #1D2428 0%, #1E1C28 100%)' }}>
            <Cbox cmb="13" mobile bold fsize="24">What’s going on in Ariva Wonderland?</Cbox>
            <Cbox fsize="16" mobile cmb="16">See what is happening in Ariva Wonderland, a universe full of wonderful events.</Cbox>
            <Box mb="4.1vw" position="relative" borderRadius="8px" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px">
                <img src={imgList[page]} alt="carousel" style={{ borderRadius: 8 }} />
                <Box onClick={nextPage} className="carousel_playerIco" style={{ padding: '1.173vw', transform: 'translateX(50%)' }}><img src={playerico} /></Box>
                <Box onClick={previewPage} className="carousel_playerIco_reverse" style={{ padding: '1.173vw' }}><img src={playerico} /></Box>
            </Box>
            {/* <Grid container spacing={1}>
                <Grid item md={4} ><Box onClick={()=>setPage(Math.min(page, 5))} borderRadius="8px" overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px">
                    <img src={imgList[Math.min(page, 5)]} alt="carousel" style={{ borderRadius: 8 }} />
                </Box></Grid>
                <Grid item md={4} ><Box onClick={()=>setPage(Math.min(page, 5)+1)} borderRadius="8px" overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px">
                    <img src={imgList[Math.min(page, 5) + 1]} alt="carousel" style={{ borderRadius: 8 }} />
                </Box></Grid>
                <Grid item md={4} ><Box onClick={()=>setPage(Math.min(page, 5)+2)} borderRadius="8px" overflow="hidden" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px">
                    <img src={imgList[Math.min(page, 5) + 2]} alt="carousel" style={{ borderRadius: 8 }} />
                </Box></Grid>
            </Grid> */}
        </Box >
    }

return !isMobile ? renderWeb() : renderMobile();
}

export default Carousel