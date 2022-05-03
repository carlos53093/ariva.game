/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box } from '@mui/material';
import React, { useState } from 'react';
import "../assets/css/market.scss"
import useMobile from '../hooks/useMobile';

import _ from "lodash"
import { Bold, Cbox, CustomButton, FilterBtn, H, NewestBtn, TextNormal, WatchButton } from '../Components/CustomizeComponents';
import { useNavigate } from 'react-router';

const Create: React.FC = () => {
    const { isMobile } = useMobile()
    const [mode, setMode] = useState('all')

    const renderMobile = () => {
        return <Box padding="25px" display="flex" flexDirection="column">
            <Cbox borderRadius="8px" style={{background: 'linear-gradient(90deg, #2A3B48 0%, #402C72 100%)'}} py="40px" px="32px" flexDirection="column" justifyContent="center" alignItems="center">
                <Cbox fontSize="26px" bold mb="20px" textAlign="center">CUSTOM CREATOR</Cbox>
                <Cbox fontSize="21px" bold mb="20px" textAlign="center">Build everything you want</Cbox>
                <Cbox fontSize="16px">
                    The experience is like building a second life! Users can customize unique characters, create new and unique items. They can use these items in the metaverse as well as sell them. 
                </Cbox>
                <br/>
                <Cbox fontSize="16px" style={{display:'block'}}>
                    They will have thousands of different options to customize their lands, and they will be able to create special areas by using the items they produce. <strong>Comming Soon</strong>
                </Cbox>
            </Cbox>
        </Box>
    }

    const renderWeb = () => {
        return <Box padding="75px 70px 70px 150px" >
            <Cbox borderRadius="8px" style={{background: 'linear-gradient(90deg, #2A3B48 0%, #402C72 100%)'}} pa="86" flexDirection="column" justifyContent="center" alignItems="center">
                <Cbox fontSize="36px" bold mb="20px" textAlign="center">CUSTOM CREATOR</Cbox>
                <Cbox fontSize="25px" bold mb="20px" textAlign="center">Build everything you want</Cbox>
                <Cbox fontSize="18px">
                    The experience is like building a second life! Users can customize unique characters, create new and unique items. They can use these items in the metaverse as well as sell them. 
                </Cbox>
                <br/>
                <Cbox fontSize="18px" style={{display:'block'}}>
                    They will have thousands of different options to customize their lands, and they will be able to create special areas by using the items they produce. <strong>Comming Soon</strong>
                </Cbox>
            </Cbox>
        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default Create
