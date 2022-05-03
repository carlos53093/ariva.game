/* eslint-disable react/no-danger-with-children */
/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React, { FC, useState } from "react";
import useMobile from "../../hooks/useMobile";
import { H, NftButton, TextNormal, Bold, CustomButton, Cbox, CustomBtn } from "../CustomizeComponents";
import carousel1 from "../../assets/images/home/Carousel1.svg"
import drop from "../../assets/images/home/drop.svg"
import clcok from "../../assets/images/home/clcok.svg"
import playerico from "../../assets/images/home/playerico.svg"
import _ from "lodash";

interface PostCarouselItmProps {
    img: any
    title: string;
    content: string
    btnLabel: string
}

const PostCarouselItm: FC<PostCarouselItmProps> = (props: PostCarouselItmProps) => {
    const { isMobile } = useMobile()

    return <Box className="each_carousel" overflow="hidden" style={isMobile ? { borderRadius: '16px 16px 8px 8px', minWidth: '200px !important' } : {}}>
        <Box display="flex" flexDirection="column" className="carousel_img" width="100%" flex={1}>
            <img src={props.img} style={{ width: '100%', objectFit: 'cover' }} />
            <Box width="100%" className={`${isMobile ? 'mobile_carousel_text' : 'carousel_text'}`} >
                {isMobile ?
                    <Cbox mobile style={{ marginBottom: '0.89vw' }} bold fsize="18">{props.title}</Cbox>
                    :
                    <Cbox style={{ marginBottom: '0.89vw' }} bold fsize="18">{props.title}</Cbox>}
                {
                    isMobile ?
                        <Cbox mobile fsize="12" width="100%"><div dangerouslySetInnerHTML={{ __html: props.content }}></div></Cbox>
                        :
                        <Cbox fsize="16" width="100%" ><div dangerouslySetInnerHTML={{ __html: props.content }}></div></Cbox>
                }
            </Box>

            <Box width="100%">
                {
                    // isMobile ? 
                    // <CustomBtn mobile mt="15" radius="20px" pt="8" pb="8" pl="35" pr="35" color="#403E3F" bgcolor="#CBFA34" fsize="15" bold mr="18">{props.btnLabel}</CustomBtn>
                    // :
                    !isMobile && <CustomBtn mb="15" ml="25" radius="20px" pt="8" pb="8" pl="40" pr="40" color="#403E3F" bgcolor="#CBFA34" fsize="15" bold mr="18">{props.btnLabel}</CustomBtn>
                }
            </Box>
            </Box>
    </Box>
}

interface PostCarouselPorps {
    title1: string;
    title2: string;
    subTitle: string;
    items: PostCarouselItmProps[]
    btnLabel?: string
}

const PostCarousel: FC<PostCarouselPorps> = (props: PostCarouselPorps) => {
    const { isMobile } = useMobile()
    const [ cardNo, setCardNo ] = useState(0);
    const renderWeb = () => {
        return <Box className="home_carousel_container">
            <Box className="home_carousel_content" flex={2}>
                <Cbox style={{ marginBottom: '0.69vw' }} bold fsize="30" lineHeight="100%" >{props.title1}<br />{props.title2}</Cbox>
                <Cbox style={{ marginBottom: '1.5vw' }} fsize="16">{props.subTitle}</Cbox>
                {props.btnLabel && <CustomBtn mt="15" radius="20px" pt="8" pb="8" pl="40" pr="40" color="#403E3F" bgcolor="#CBFA34" fsize="15" bold mr="18">{props.btnLabel}</CustomBtn>}
            </Box>
            <Box flex={5} style={{ position: 'relative', minHeight: '22.425vw' }}>
                <Box className="carousel_flow">
                    {_.map(props.items, item => {
                        return <PostCarouselItm {...item} />
                    })}
                    <Box className="carousel_shadow"></Box>
                    {/* <Box className="carousel_playerIco" style={{padding: '1.173vw'}}><img src={playerico} /></Box> */}
                </Box>
            </Box>

        </Box>
    }

    const changeCard = () => {
        let newNo = cardNo + 1
        if (newNo >= 2) newNo -= 2;
        setCardNo(newNo);
    }

    const renderMobile = () => {
        return <Box className="mobile_home_carousel_container" pb={!props.btnLabel ? '80vw' : '95vw'}>
            <Cbox flexDirection="column" position="relative">
                <Cbox fsize="24" mobile bold style={{ marginBottom: '3.56vw' }} lineHeight="100%">{props.title1}<br />{props.title2}</Cbox>
                <Cbox mobile fsize="16" style={{ marginBottom: '1.12vw' }}>{props.subTitle}</Cbox>
                <Box className="mobile_home_carousel_flow" top={!props.btnLabel ? 'calc(100% + 4.8vw)' : '70vw'}>
                    <PostCarouselItm {...props.items[cardNo]} />
                    <Box className="carousel_playerIco" style={{padding: '4.35vw'}}><img src={playerico} onClick={()=>changeCard()}/></Box>
                </Box>
            </Cbox>


        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();
}

export default PostCarousel