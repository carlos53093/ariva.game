import { Box } from "@mui/system";
import React, { FC } from "react";
import nft1 from "../assets/images/home/NFTs1.svg"
import useMobile from "../hooks/useMobile";
import { Cbox, FilterBtn } from "./CustomizeComponents";

interface HammerComponentProps {
    children?: any
}

const HammerComponent: FC<HammerComponentProps> = (props: HammerComponentProps) => {
    const { isMobile } = useMobile()
    const renderWeb = () => {
        return <Box padding="0.966vw" width="fit-content" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} zIndex="-1" position="relative" borderRadius="8px" >
            <img src={nft1} alt="nft" style={{ objectFit: 'cover', width: '26.22vw', zIndex: 2 }} />
            <Box
                padding="2.07vw 3.657vw 2.07vw 31.74vw"
                borderRadius="8px"
                position="absolute"
                top="50%"
                left="-1.38vw"
                width="calc(100vw - 12.8vw)"
                style={{ background: 'linear-gradient(90deg, #2A3B48 0%, #402C72 100%)', transform: "translateY(-50%)", zIndex: -1 }}
            >
                {props.children}
            </Box>
        </Box>
    }
    const renderMobile = () => {
        return <Cbox padding="2px" borderRadius="8px" overFlow="hidden" flexDirection="column" style={{background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)'}}>
        <Cbox flex={1} >
            <img src={nft1} alt="" style={{width: '100%'}} />
        </Cbox>
        <Cbox flex={1} bgcolor="#1D2428" pa="30" mt="-30px" flexDirection="column"  >
            {props.children}
        </Cbox>
    </Cbox>
    }
    return isMobile ? renderMobile() : renderWeb()
}

export default HammerComponent;