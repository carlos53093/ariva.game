/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/system";
import React, { FC, useState } from "react";
import useMobile from "../../hooks/useMobile";
import { Bold, CustomButton, FilterBtn, H, NewestBtn, TextNormal } from "../CustomizeComponents";
import filterIcon from "../../assets/images/market/filter.svg"

import cart from "../../assets/images/market/cart.svg"
import _ from "lodash"
import { useNavigate } from "react-router-dom";

interface NftContainerProps {
    style?: any
    name: string
    img: any
    arv: number
    balance: string
}

const NftContainer: FC<NftContainerProps> = (props: NftContainerProps) => {
    let navigate = useNavigate();
    return <Box className="nft_container_nft" style={{ ...props.style }} m="auto" onClick={() => navigate("/marketbuy/3")}>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={2} >
            <Bold>{props.name}</Bold>
            <CustomButton style={{ fontSize: 12 }}>Add cart <img src={cart} alt="cart" /> </CustomButton>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" >
            <NewestBtn style={{ fontSize: 15 }}>{props.balance}</NewestBtn>
            <NewestBtn style={{ fontSize: 14 }}>{props.arv} ARV </NewestBtn>
        </Box>
        <Box className="nft_img_container">
            <Box className="nft_img_wrapper_nft">
                <img src={props.img} width="100%" />
            </Box>
        </Box>
    </Box>
}

export default NftContainer;
