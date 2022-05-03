/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, FormControl, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import "../assets/css/topbar.scss"
import shopingIco from "../assets/images/topbar/shopping-cart.svg"
import { Cbox, FilterBtn, LoginBtn } from './CustomizeComponents';
import MenuItem from '@mui/material/MenuItem';
import useMobile from '../hooks/useMobile';
import logo from "../assets/images/sidebar/logo.svg"
import logo_letter from "../assets/images/topbar/logo_letter.svg"
import bar from "../assets/images/topbar/bars.svg"
import LoginDialog from './LoginDialog';
import { getUserAuth, setUserAuth } from '../actions/UserAuth';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import { getValue, USER_TOKEN } from '../app/localStorage';

interface TopbarProps {
    isOpen: boolean
    setOpen: (open: boolean)=>void
}

const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
    const [lang, setLang] = useState('En');
    const { isMobile } = useMobile()
    const isUserAuth = useAppSelector(getUserAuth);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(()=>{
        if(getValue(USER_TOKEN))
        {
            dispatch(setUserAuth(true));
        }
    },[])

    const onChangeLang = (event: any) => {
        setLang(event.target.value);
    };

    const [openLogin, setOpenLogin] = useState(false);

    const renderWeb = () => {
        return <Box className="topbar">
            <Box display="flex">
            <Box px="10px" mr="30px" borderRadius="5px" style={{background: 'linear-gradient(90deg, rgba(102, 172, 212, 0.1) 0%, rgba(107, 67, 207, 0.1) 100%)'}} display="flex">
                <Cbox mr="5px" py="5px" fsize="15" alignItems="center" bold>#1 Land sale will start in:</Cbox>
                <Box mr="5px" borderRadius="5px" width="2vw" height="100%"alignItems="center" justifyContent="center" display="flex" fontWeight="900" bgcolor="#CBFA34" color="#403E3F" >48</Box>
                <Cbox mr="5px" alignItems="center"> : </Cbox>
                <Box mr="5px" borderRadius="5px" width="2vw" height="100%" alignItems="center" justifyContent="center" display="flex" fontWeight="900" bgcolor="#CBFA34" color="#403E3F" >12</Box>
                <Cbox mr="5px" alignItems="center"> : </Cbox>
                <Box borderRadius="5px" width="2vw" height="100%" alignItems="center" justifyContent="center" display="flex" fontWeight="900" bgcolor="#CBFA34" color="#403E3F" >14</Box>
            </Box>
            {/* <Cbox ><FilterBtn onClick={()=>navigate('play')} style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Play</FilterBtn></Cbox> */}
            </Box>
            <Box className='setting_container'>
                {
                    isUserAuth?
                    <Profile 
                        userInfo="120000 ARV  |  2 Lands"
                    />:
                    <LoginBtn onClick={()=>{setOpenLogin(true)}} style={{ marginRight: 36 }}>Login</LoginBtn>}
                {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 55 }}>
                    <Select
                        id="demo-simple-select-helper"
                        value={lang}
                        label="Age"
                        onChange={onChangeLang}
                        style={{ color: 'white', backgroundColor: '#1E1E1E' }}
                    >
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'En'}>En</MenuItem>
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'Ch'}>Ch</MenuItem>
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'Ru'}>Ru</MenuItem>
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'Fn'}>Fn</MenuItem>
                    </Select>
                </FormControl> */}
                <Box className="card_box">
                    <img src={shopingIco} />
                    <Box className="card_num">1</Box>
                </Box>
            </Box>
            <LoginDialog mobile={false} open={openLogin} onClose={()=>{setOpenLogin(false)}} />
        </Box>
    }

    const onClickBar = () => {
        props.setOpen(!props.isOpen)
    }

    const renderMobile = () => {

        return <Box className="mobile_tobar">
            <Box className='flex flex-row items-center justify-start'>
                <img src={logo} style={{ marginRight: 10 }} onClick={()=>navigate("/")}/>
            </Box>
            <Box className="mobile_setting_container">
                {/* <FormControl variant="filled" sx={{ minWidth: 55, marginRight: 25 }}>
                    <Select
                        id="demo-simple-select-helper"
                        value={lang}
                        label="Age"
                        onChange={onChangeLang}
                        style={{ color: 'white', backgroundColor: '#1E1E1E' }}
                    >
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'En'}>En</MenuItem>
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'Ch'}>Ch</MenuItem>
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'Ru'}>Ru</MenuItem>
                        <MenuItem style={{ color: 'white', backgroundColor: '#1E1E1E' }} value={'Fn'}>Fn</MenuItem>
                    </Select>
                </FormControl> */}
                <Box className="card_box" style={{ marginRight: 25 }}>
                    <img src={shopingIco} />
                    <Box className="card_num">1</Box>
                </Box>
                <Box onClick={onClickBar}><img src={bar} /></Box>
            </Box>
            <LoginDialog mobile={true} open={openLogin} onClose={()=>{setOpenLogin(false)}} />
        </Box>
    }
    return !isMobile ? renderWeb() : renderMobile()
}

export default Topbar
