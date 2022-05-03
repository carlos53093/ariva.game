/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React, { FC, useState } from "react";
import arrowRight from "../assets/images/market/arrowright.svg"
import arrowLeft from "../assets/images/market/arrowleft.svg"
import _ from "lodash";
import useMobile from "../hooks/useMobile";

interface PagenationProps {

}

const Pagenation: FC<PagenationProps> = (props: PagenationProps) => {
    const {isMobile} = useMobile()
    const number = !isMobile ? [1,2,3,4,5,6,7,8,9] : [1,2,3,4,];
    const [pageNum, setPageNum] = useState(1);
    return <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Box borderRadius={3} bgcolor="#3F3F3F;" display="flex" alignItems="center" mr={3} p="12px">
            <img src={arrowLeft} />
        </Box>
            {_.map(number, each=>{
                return <Box onClick={()=>{setPageNum(each)}} borderRadius={999} p="10px" mr="10px" color="white" bgcolor={pageNum===each ? '#3F3F3F' : ''}>{each}</Box>
            })}
        <Box borderRadius={3} bgcolor="#3F3F3F;" display="flex" alignItems="center" ml={2} p="12px">
            <img src={arrowRight} />
        </Box>
    </Box>
}

export default Pagenation;