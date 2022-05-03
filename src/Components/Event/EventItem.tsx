import React, { FC } from "react";
import { Box, fontWeight } from "@mui/system";
import { Cbox, FilterBtn } from "../CustomizeComponents";
import event1 from "../../assets/images/event/event1.svg"
import event2 from "../../assets/images/event/event2.svg"
import time from "../../assets/images/event/time.svg"
import drop from "../../assets/images/event/drop.svg"
import useMobile from '../../hooks/useMobile';

interface EventItemProps{
    children?: any
    style?: any
}

const EventItem:FC<EventItemProps> = (props: EventItemProps) => {
    const { isMobile } = useMobile()

    const renderMobile = () => {
        return (<Cbox padding="2px" width="100%" mb="50px" borderRadius="8px" overFlow="hidden" flexDirection="column" style={{...props.style, background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)'}}>
        <Cbox flex={1} >
            <img src={event1} alt="" style={{width: '100%'}} />
            {/* <FilterBtn style={{position: 'absolute', left:'23px', top: '21px'}}>Live now</FilterBtn> */}
        </Cbox>
        <Cbox flex={1} bgcolor="#1D2428" padding="23px" flexDirection="column"  >
            {props.children}
        </Cbox>
    </Cbox>)
    }
    const renderWeb = () => {
        return (<Cbox padding="2px" borderRadius="8px" overFlow="hidden" flexDirection="column" style={{...props.style, background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)'}}>
        <Cbox >
            <img src={event1} alt="" style={{width: '100%'}} />
            {isMobile && <FilterBtn style={{position: 'absolute', left:'23px', top: '21px'}}>Live now</FilterBtn>}
        </Cbox>
        <Cbox bgcolor="#1D2428" pa="23" flexDirection="column"  >
            {props.children}
        </Cbox>
    </Cbox>)
    }
    return !isMobile ? renderWeb() : renderMobile();
}

export default EventItem;