/* eslint-disable jsx-a11y/alt-text */
import { Box,Tooltip, Typography } from '@mui/material';
import React from 'react';
import '../assets/css/sidebar.scss';
import {Routes} from "../Routes";
import _ from 'lodash';
import { useLocation, useNavigate } from 'react-router';
import useMobile from '../hooks/useMobile';
import logo from "../assets/images/sidebar/logo.svg"

const Sidebar: React.FC = () => {
    let navigate = useNavigate();
    const { pathname } = useLocation();
    const {isMobile} = useMobile();
    const isSelected = (url: string) => pathname === url
    const navClick = (url: string) => {
        if (url == "") return;
        navigate(url);
    }
    const renderSidebar = () => {
        
        return _.map(Routes.container, (item, id)=> {
            if(item.hidden) return null;
            return (<Box style={{cursor: 'pointer'}} onClick={() => navClick(item.path)} className= {`px-[12px] relative `} key={id}>
                    <Box className={`flex flex-row justify-center rounded-l-2xl `} >
                        <Box style={{ color: '#6F6C99', paddingLeft: 20, paddingRight: 20 }} className={`${isSelected(item.path) ? 'item_active' : 'item_inactive'}`}>
                        <Tooltip title={<Typography fontSize={20}>{item.tooltip}</Typography>} placement="right">
                            <img className="" src={item.svg} alt={item.title} style={item.path == "" ? {width: 25, maxWidth: 'unset', opacity: 0.5} : {width: 25, maxWidth: 'unset'}}/>
                        </Tooltip>
                        </Box>
                    </Box>
                    <Box className={`absolute top-0 h-full rounded-l-2xl w-[10px]`} style={isSelected(item.path)?{backgroundColor: '#CBFA34', boxShadow: '0px 0px 7px #CBFA34', right: 5, height: '120%', top: '-10%'}: {}}></Box>
                </Box>)
        })
    }
    return(
        !isMobile ? (<Box className={`h-screen fixed w-[90px] pl-[10px] pt-[23px] flex flex-col items-center`} style={{background: 'linear-gradient(180deg, rgba(111, 111, 111, 0.1) 0%, rgba(96, 96, 96, 0.1) 100%)'}}>
            <Tooltip title={<Typography fontSize={20}>Ariva Wonderland</Typography>} placement="right">
                <img src={logo} alt="logo"  style={{cursor: 'pointer', width: '60px', height: '60px', marginBottom: '40px'}} onClick={()=>navClick("/")}/>
            </Tooltip>
            {renderSidebar()}
        </Box>) : null
    );
}

export default Sidebar;
