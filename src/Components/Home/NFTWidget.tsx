/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React, { FC } from "react";
import useMobile from "../../hooks/useMobile";
import { H, NftButton, TextNormal } from "../CustomizeComponents";

interface NFTWidgetProps {
    reverse?: boolean;
    image: any;
    title: string;
    content: string;
    btnName: string;
    style?: any
}

const NFTWidget: FC<NFTWidgetProps> = (props: NFTWidgetProps) => {
    const { isMobile } = useMobile()
    const renderWebLeft = () => {
        return <Box padding="0.966vw" width="fit-content" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} zIndex="-1" position="relative" borderRadius="8px" >
            <img src={props.image} alt="nft" style={{ objectFit: 'cover', width: '26.22vw', zIndex: 2 }} />
            <Box
                padding="2.07vw 3.657vw 2.07vw 31.74vw"
                borderRadius="8px"
                position="absolute"
                top="50%"
                left="-1.38vw"
                width="calc(100vw - 32.8vw)"
                style={{ background: 'linear-gradient(90deg, #2A3B48 0%, #402C72 100%)', transform: "translateY(-50%)", zIndex: -1 }}
            >
                <Box flex={1} className={`${props.reverse ? 'nft_content_revers' : 'nft_content'}`}>
                    <Box><H>{props.title}</H></Box>
                    <Box style={{ marginBottom: 20 }}><TextNormal>{props.content}</TextNormal></Box>
                    <NftButton>{props.btnName}</NftButton>
                </Box>
            </Box>
        </Box>

        // <Box className="nft_img" style={props.reverse ? { transform: 'translateX(120%)', marginTop: 30 } : { marginTop: 30 }}>
        //     <img src={props.image} style={{ marginLeft: 15 }} />
        //     <Box className="nft_img_wrapper"></Box>
        //     {<Box className={`${props.reverse ? 'nft_container_revers' : 'nft_container'}`}>
        //         {!props.reverse && <Box flex={1}></Box>}
        //         <Box flex={1} className={`${props.reverse ? 'nft_content_revers' : 'nft_content'}`}>
        //             <Box><H>{props.title}</H></Box>
        //             <Box style={{ marginBottom: 20 }}><TextNormal>{props.content}</TextNormal></Box>
        //             <NftButton>{props.btnName}</NftButton>
        //         </Box>
        //         {props.reverse && <Box flex={1}></Box>}
        //     </Box>}
        // </Box>
    }

    const renderMobile = () => {
        return <Box className="mobile_nft_container">
            <Box className="mobile_nft_wrapper">
                <img src={props.image} className="mobile_nft_img" />
            </Box>
            <Box className="mobile_nft_content">
                <H mode="mobile" >{props.title}</H>
                <Box style={{ marginBottom: 10 }}><TextNormal>{props.content}</TextNormal></Box>
                <Box style={{}}><NftButton>{props.btnName}</NftButton></Box>
            </Box>
        </Box>
    }

    return !isMobile ? renderWebLeft() : renderMobile();
}

export default NFTWidget