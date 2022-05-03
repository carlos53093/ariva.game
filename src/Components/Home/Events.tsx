/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React, { FC } from "react";
import useMobile from "../../hooks/useMobile";
import { H, NftButton, TextNormal, Bold, Cbox } from "../CustomizeComponents";
import img1 from "../../assets/images/home/img1.svg"
import img2 from "../../assets/images/home/img2.svg"
import _ from "lodash";

interface EventItmProps {
    title1: string;
    title2: string;
    subTitle: string;
    img: any;
}

const EventItm: FC<EventItmProps> = (props: EventItmProps) => {
    return (<>
        <Box className="home_event_itm">
            <Box className="ico_container">
                <img src={props.img} style={{minWidth: '3.86vw',minHeight: '3.86vw', objectFit:'cover'}} />
                <Box className="ico-active"></Box>
            </Box>
            <Box display="flex" flexDirection="column" height="3.86vw">
                <Cbox lineHeight="1.1vw" fsize="16" bold mb="5px">{props.title1}<br />{props.title2}</Cbox>
                <Cbox lineHeight="1.1vw" width="100%" fsize="10">{props.subTitle}</Cbox>
            </Box>
        </Box>
    </>)
}

interface EventContainerProps {
    evnetProps: EventItmProps[]
    eventsName: string
}

const EventContainer: FC<EventContainerProps> = (props: EventContainerProps) => {
    const { isMobile } = useMobile()
    const renderWebLeft = () => {
        return <Cbox className="home_event_wraper" pa="25" flexDirection="column">
            <Cbox fsize="16" bold cmb="20">{props.eventsName}</Cbox>
            {_.map(props.evnetProps, each => {
                return <EventItm {...each} />
            })}

        </Cbox>
    }

    return !isMobile ? renderWebLeft() : null;
}

export default EventContainer