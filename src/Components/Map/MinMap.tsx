/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import useMobile from '../../hooks/useMobile';

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../../Components/CustomizeComponents';
import EventItem from '../../Components/Event/EventItem';
import Pagenation from '../../Components/Pagenation';
import { useNavigate } from 'react-router';
import minMap from "../../assets/images/map/minmap.svg";
import filter from "../../assets/images/map/filter.svg";
import guide from "../../assets/images/map/guide.svg";
import hide from "../../assets/images/map/hide.svg";
import leftArrow from "../../assets/images/map/leftarrow.svg";
import filterWhite from "../../assets/images/map/filter_white.svg";
import guideWhite from "../../assets/images/map/guide_white.svg";

const GuideWidget: React.FC<{ children?: any, style?:any, mobile?:boolean }> = (props: { children?: any, style?:any, mobile?:boolean }) => {
    return <Box position="relative" style={props.style}><Cbox fontSize={props.mobile?'12px':'0.828vw'} bold>Status of each land piece</Cbox>
        <Cbox flexDirection="column" pb="10px" borderBottom="1px solid rgba(255, 255, 255, 0.2)">
            <Cbox alignItems="center">
                <Cbox bgcolor="#A281F4" borderRadius="3px" width={props.mobile?'15px':'1vw'}  height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >1x1</Cbox>
            </Cbox>
            <Cbox alignItems="center">
                <Cbox bgcolor="#D4667E" borderRadius="3px"  width={props.mobile?'15px':'1vw'} height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >3x3</Cbox>
            </Cbox>
            <Cbox alignItems="center">
                <Cbox bgcolor="#6CC7C1" borderRadius="3px"  width={props.mobile?'15px':'1vw'} height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >6x6</Cbox>
            </Cbox>
            <Cbox alignItems="center">
                <Cbox bgcolor="#A281F4" borderRadius="3px"  width={props.mobile?'15px':'1vw'} height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >12x12</Cbox>
            </Cbox>
        </Cbox>
        {props.children}
    </Box>
}

const FilterWidget: React.FC<{ children?: any, style?:any, mobile?:boolean }> = (props: { children?: any, style?:any, mobile?:boolean }) => {
    return <Box position="relative" style={props.style}><Cbox fontSize={props.mobile?'12px':'0.828vw'} bold>Status</Cbox>
        <Cbox className="map_status" overflow="auto" maxHeight="80px" pb="10px" borderBottom="1px solid rgba(255, 255, 255, 0.2)">
            <Cbox display="flex" flexDirection="column">
                <Cbox alignItems="center">
                    <Cbox mr="5px" position="relative" width={props.mobile?'22px':'1.5vw'} height={props.mobile?'15px':'1vw'} borderRadius="2px" bgcolor="#A281F4">
                        <Box position="absolute" top="0" left="0" bgcolor="white" height="100%" width="60%" borderRadius="2px"></Box>
                    </Cbox>
                    <Cbox>For sale</Cbox>
                </Cbox>
                <Cbox alignItems="center">
                    <Cbox mr="5px" position="relative" width={props.mobile?'22px':'1.5vw'} height={props.mobile?'15px':'1vw'} borderRadius="2px" bgcolor="#D4667E">
                        <Box position="absolute" top="0" left="0" bgcolor="white" height="100%" width="60%" borderRadius="2px"></Box>
                    </Cbox>
                    <Cbox>For sale</Cbox>
                </Cbox>
                <Cbox alignItems="center">
                    <Cbox mr="5px" position="relative" width={props.mobile?'22px':'1.5vw'} height={props.mobile?'15px':'1vw'} borderRadius="2px" bgcolor="#6CC7C1">
                        <Box position="absolute" top="0" left="0" bgcolor="white" height="100%" width="60%" borderRadius="2px"></Box>
                    </Cbox>
                    <Cbox>For sale</Cbox>
                </Cbox>
                <Cbox alignItems="center">
                    <Cbox mr="5px" position="relative" width={props.mobile?'22px':'1.5vw'} height={props.mobile?'15px':'1vw'} borderRadius="2px" bgcolor="#A281F4">
                        <Box position="absolute" top="0" left="0" bgcolor="white" height="100%" width="60%" borderRadius="2px"></Box>
                    </Cbox>
                    <Cbox>For sale</Cbox>
                </Cbox>
                <Cbox alignItems="center">
                    <Cbox mr="5px" position="relative" width={props.mobile?'22px':'1.5vw'} height={props.mobile?'15px':'1vw'} borderRadius="2px" bgcolor="#D4667E">
                        <Box position="absolute" top="0" left="0" bgcolor="white" height="100%" width="60%" borderRadius="2px"></Box>
                    </Cbox>
                    <Cbox>For sale</Cbox>
                </Cbox>
                <Cbox alignItems="center">
                    <Cbox mr="5px" position="relative" width={props.mobile?'22px':'1.5vw'} height={props.mobile?'15px':'1vw'} borderRadius="2px" bgcolor="#6CC7C1">
                        <Box position="absolute" top="0" left="0" bgcolor="white" height="100%" width="60%" borderRadius="2px"></Box>
                    </Cbox>
                    <Cbox>For sale</Cbox>
                </Cbox>
            </Cbox>
        </Cbox>
        <Cbox fontSize={props.mobile?'12px':'0.828vw'} bold>Size</Cbox>
        <Cbox flexDirection="column" pb="10px" borderBottom="1px solid rgba(255, 255, 255, 0.2)">
            <Cbox alignItems="center">
                <Cbox bgcolor="white" borderRadius="3px" width={props.mobile?'15px':'1vw'} height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >1x1</Cbox>
            </Cbox>
            <Cbox alignItems="center">
                <Cbox bgcolor="white" borderRadius="3px" width={props.mobile?'15px':'1vw'} height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >3x3</Cbox>
            </Cbox>
            <Cbox alignItems="center">
                <Cbox bgcolor="white" borderRadius="3px" width={props.mobile?'15px':'1vw'} height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >6x6</Cbox>
            </Cbox>
            <Cbox alignItems="center">
                <Cbox bgcolor="white" borderRadius="3px" width={props.mobile?'15px':'1vw'} height={props.mobile?'15px':'1vw'} mr="10px" ></Cbox>
                <Cbox >12x12</Cbox>
            </Cbox>
        </Cbox>
        {props.children}
    </Box>
}

const MinMap: React.FC = () => {
    const { isMobile } = useMobile()
    const [mode, setMode] = useState<string>('')

    const renderMobile = () => {
        switch(mode) {
            case 'guide':
                return renderMobileGuide()
            default:
                return renderMobileFilter()
        }
    }

    const renderMobileFilter = ()=> {
        return <Box position="relative" width="213px" bgcolor="#3F3F3F" marginLeft="100%" marginTop="calc(72px - 100vh)" style={mode==='filter'?{transform: 'translateX(-213px)', transition: 'all 0.2s'}:{transform: 'translateX(0)', transition: 'all 0.2s'}}>
                <FilterWidget mobile style={{height: 'calc(100vh - 73px)', paddingLeft: 10, paddingTop: 10}}>
                    <Box position="absolute" display="flex" flexDirection="column" left="-80px" top="100px">
                        <Box borderRadius="12px" display="flex" mb="10px" justifyContent="center" bgcolor={mode==='guide'?'#CBFA34':'#262626'} width="52px" height="46px" onClick={()=>{setMode(mode === "guide" ? "" : "guide")}} >
                            <img src={mode === 'guide' ? guide : guideWhite} alt="filter" />
                        </Box>
                        <Box borderRadius="12px" display="flex" mb="10px" justifyContent="center" bgcolor={mode==='filter'?'#CBFA34':'#262626'} width="52px" height="46px" onClick={()=>{setMode(mode === "filter" ? "" : "filter")}} >
                            <img src={mode === 'filter' ? filter : filterWhite} alt="filter" />
                        </Box>
                        <Box borderRadius="12px" display="flex" width="52px" height="92px" flexDirection="column">
                            <Box borderRadius="12px" width="100%" justifyContent="center" alignItems="center" padding="2px" bgcolor="#262626">
                                <Box style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} display="flex" bgcolor="#3F3F3F" justifyContent="center" alignItems="center" fontSize="36px" color="white">+</Box>
                            </Box>
                            <Box borderRadius="12px" width="100%" justifyContent="center" alignItems="center" padding="2px" bgcolor="#262626">
                                <Box style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }} display="flex" bgcolor="#3F3F3F" justifyContent="center" alignItems="center" fontSize="36px" color="white">-</Box>
                            </Box>
                        </Box>
                    </Box>
                </FilterWidget>
            </Box>
    }

    const renderMobileGuide = () => {
        return <Box position="relative" width="213px" bgcolor="#3F3F3F" marginLeft="100%" marginTop="calc(72px - 100vh)" style={mode==='guide'?{transform: 'translateX(-213px)', transition: 'all 0.2s'}:{transform: 'translateX(0)', transition: 'all 0.2s'}}>
        <GuideWidget mobile style={{height: 'calc(100vh - 73px)', paddingLeft: 10, paddingTop: 10}}>
            <Box position="absolute" display="flex" flexDirection="column" left="-80px" top="100px">
                        <Box borderRadius="12px" display="flex" mb="10px" justifyContent="center" bgcolor={mode==='guide'?'#CBFA34':'#262626'} width="52px" height="46px" onClick={()=>{setMode(mode === "guide" ? "" : "guide")}} >
                            <img src={mode === 'guide' ? guide : guideWhite} alt="filter" />
                        </Box>
                        <Box borderRadius="12px" display="flex" mb="10px" justifyContent="center" bgcolor={mode==='filter'?'#CBFA34':'#262626'} width="52px" height="46px" onClick={()=>{setMode(mode === "filter" ? "" : "filter")}} >
                            <img src={mode === 'filter' ? filter : filterWhite} alt="filter" />
                        </Box>
                        <Box borderRadius="12px" display="flex" width="52px" height="92px" flexDirection="column">
                            <Box borderRadius="12px" width="100%" justifyContent="center" alignItems="center" padding="2px" bgcolor="#262626">
                                <Box style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} display="flex" bgcolor="#3F3F3F" justifyContent="center" alignItems="center" fontSize="36px" color="white">+</Box>
                            </Box>
                            <Box borderRadius="12px" width="100%" justifyContent="center" alignItems="center" padding="2px" bgcolor="#262626">
                                <Box style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }} display="flex" bgcolor="#3F3F3F" justifyContent="center" alignItems="center" fontSize="36px" color="white">-</Box>
                            </Box>
                        </Box>
                    </Box>
        </GuideWidget>
        </Box>
    }

    const showMap = () => {
        return <><Box borderRadius="8px" position="absolute" display="flex" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} right="4.83vw" top="4vw" p="11px">
                <Box display="flex" p="1px" mr="10px" bgcolor="black" borderRadius="6px" width="2.484vw" flexDirection="column" justifyContent="space-between">
                    <Box bgcolor="#CBFA34" style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }} width="100%" display="flex" justifyContent="center" fontSize="20px"><b>+</b></Box>
                    <Box p="1px" position="relative" height="100%">
                        <Box position="absolute" bgcolor="#CBFA34" alignItems="center" borderRadius="6px" width="100%" height="1.242vw" top="10%" />
                    </Box>
                    <Box bgcolor="#CBFA34" style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }} width="100%" display="flex" justifyContent="center" fontSize="20px"><b>-</b></Box>
                </Box>
                <Box display="flex" mr="10" overflow="hidden" flexDirection="column" bgcolor="black" borderRadius="6px">
                    <Box borderRadius="6px" border="3px solid black"><img src={minMap} alt="" style={{ borderRadius: 6, width: "15vw", height: "15vw", objectFit: 'cover' }} /></Box>
                    <Box display="flex" borderRadius="6px" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, cursor: 'pointer' }} border="3px solid black" borderTop="none !important" justifyContent="center" height="3.864vw" bgcolor="#CBFA34">
                        <Box
                            flexDirection="column"
                            width="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            style={mode === "filter" ? { background: 'linear-gradient(270deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' } : {}}
                            onClick={() => { setMode(mode === "filter" ? "" : "filter") }}
                        >
                            <img src={filter} alt="filter" />
                            <Box color="#1E1E1E">Filters</Box>
                        </Box>
                        <Box
                            borderLeft="1px solid rgba(35, 45, 66, 0.08)"
                            borderRight="1px solid rgba(35, 45, 66, 0.08)"
                            flexDirection="column"
                            width="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            style={mode === "guide" ? { background: 'linear-gradient(270deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' } : {}}
                            onClick={() => { setMode(mode === "guide" ? "" : "guide") }}
                        >
                            <img src={guide} alt="filter" />
                            <Box color="#1E1E1E">Guide</Box>
                        </Box>
                        <Box
                            flexDirection="column"
                            width="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            style={mode === "hide" ? { background: 'linear-gradient(270deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' } : {}}
                            onClick={() => { setMode(mode === "hide" ? "" : "hide") }}
                        >
                            <img src={hide} alt="filter" />
                            <Box color="#1E1E1E">Hide</Box>
                        </Box>
                    </Box>
                </Box>
                {(mode === 'filter' || mode === 'guide') && renderSubWidget()}
            </Box>
            </>
    }

    const renderSubWidget = () => {
        return (
            <Box borderRadius="8px" width="100%" left="0" top="calc(100% - 11px)" position="absolute" style={{ background: 'linear-gradient(90deg, #CBFA34 0%, #66ACD4 100%)' }} padding="11px">
                <Cbox bgcolor="#403E3F" pa="20" flexDirection="column">
                    {mode === 'filter' ? <FilterWidget /> : <GuideWidget />}
                </Cbox>
            </Box>
            )
    }

    const hideMap = () => {
        return <Box position="absolute" p="10px" right={0} top="4vw" display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ background: 'linear-gradient(90deg, #69AED0 -24.49%, #CAF936 115.31%)', borderRadius: '10px 0px 0px 10px' }} >
                <Box display="flex" flexDirection="column" alignItems="center" onClick={() => { setMode('filter') }}>
                    <img src={leftArrow} alt="arrow" />
                    <Box fontSize="11px" color="#1E1E1E" mt="10px">leftArrow</Box>
                </Box>
            </Box>
    }

    const renderWeb = () => {
        return mode === 'hide' ? hideMap() : showMap()
    }

    return !isMobile ? renderWeb() : renderMobile();

}

            export default MinMap
