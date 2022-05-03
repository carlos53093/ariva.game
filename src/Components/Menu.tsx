/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/menu.scss"
import searchIco from "../assets/images/topbar/search_ico.svg"
import useMobile from "../hooks/useMobile";
import { LoginBtn } from "./CustomizeComponents";
import {Routes} from "../Routes";
import _ from 'lodash';
import { useAppSelector } from '../app/hooks';
import { getUserAuth } from "../actions/UserAuth";
import Profile from './Profile';
import LoginDialog from "./LoginDialog";

interface MenuItemProps {
    isActive: boolean
    property: {
        title: string
        path: string
        Component?: any
        hidden?: boolean
        svg: any
    }
    onClick: ()=>void
}

const MenuItem: FC<MenuItemProps> = (props: MenuItemProps) => {
    return <Box onClick={props.onClick} className={`menu_item ${props.isActive ? 'isActive' : ''}`}>
        <img src={props.property.svg} alt={props.property.title} style={props.property.path == "" ? {marginRight: 28, opacity: 0.5} : { marginRight: 28 }} />
        <Box style={{textTransform: 'capitalize'}} color={props.isActive ? '#CBFA34' : props.property.path == "" ? '#494D50' : 'white'}>{props.property.title}</Box>
        {props.isActive && <Box className="menu_active_show" />}
    </Box>
}

interface MenuProps {
    open: boolean;
    onClose: ()=>void;
}

const Menu: FC<MenuProps> = (props: MenuProps) => {
    const isUserAuth = useAppSelector(getUserAuth);

    useEffect(()=>{
        if(open !== props.open) {
            setOpen(props.open)
        }
    }, [props.open])
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const { pathname } = useLocation();
    const { isMobile } = useMobile();
    let navigate = useNavigate();
    const isSelected = (url: string) => pathname === url
    const onClickItem = (url: string) => () => {
        if(url == "") return;
        navigate(url);
        setOpen(false);
        props.onClose();
    }
    return isMobile ? (<Box className="menu" style={open ? {height: 'calc(100vh - 75px)'} : {height: 0}}>
        <Box className="flex flex-row" justifyContent="space-between" width="100%" style={{marginBottom: 40}}>
            {/* <Box className='search' width="100%">
                <input className="search_field" placeholder='Search something...' />
                <Box className="search_ico">
                    <img src={searchIco} alt="search" />
                </Box>
            </Box> */}
            {isUserAuth ?
                <LoginBtn style={{ marginLeft: 20, padding: '9px 22px !important' }}>Play</LoginBtn>
                :
                <LoginBtn onClick={()=>{setOpenLogin(true)}} style={{ marginLeft: 20, padding: '9px 22px !important' }}>Login</LoginBtn>
            }
        </Box>
            {isUserAuth && <Profile onClick={()=>navigate('/profileMobile')} userInfo="120000 ARV  |  2 Lands"/>}
        <Box className="menu_item_wraper">
            {_.map(Routes.container, (item, id)=> {
                if(item.hidden) return;
                return <MenuItem key={id} isActive={isSelected(item.path)} property={item} onClick={onClickItem(item.path)} />
            })}
        </Box>
        <LoginDialog mobile={true} open={openLogin} onClose={()=>{setOpenLogin(false)}} />
    </Box>) : null
}

export default Menu;