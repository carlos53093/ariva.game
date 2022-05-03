/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React from 'react';
import "../assets/css/market.scss"
import Filterbar from '../Components/Market/Filterbar';
import NftContainer from '../Components/Market/NftContainer';
import useMobile from '../hooks/useMobile';
import nft1 from "../assets/images/market/nft1.svg"
import nft2 from "../assets/images/market/nft2.svg"

import _ from "lodash"
import Pagenation from '../Components/Pagenation';
import JoinNow from '../Components/Home/JoinNow';

const Market: React.FC = () => {
    const { isMobile } = useMobile()
    const mockData = [
        {
            name: 'Blue globe',
            img: nft1,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft1,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft1,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft2,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft2,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft1,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft2,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft2,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft1,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft2,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft2,
            arv: 9000,
            balance: '123 |  200'
        },
        {
            name: 'Blue globe',
            img: nft1,
            arv: 9000,
            balance: '123 |  200'
        },
    ]
    const renderWebMarket = () => {
        return (<Box className="market" >
            <Filterbar />
            <Grid container spacing={{ lg: 2, md: 3, sm: 2 }}>
                {_.map(mockData, (each, index)=>{
                    return <Grid item lg={4} md={6} sm={12} key={index} mb={8}>
                        <NftContainer style={{width: '90%'}} name={each.name} img={each.img} arv={each.arv} balance={each.balance} />
                    </Grid>
                })}
            </Grid>
            <Box mb={10}><Pagenation /></Box>
            <JoinNow></JoinNow>
        </Box>)
    }

    const renderMobileMarket = () => {
        return (
            <Box display="flex" flexDirection="column" p="25px">
                <Filterbar />
                <Box mt="-500px">
                    {_.map(mockData, (each, index)=>{
                        return <NftContainer style={{width: '100%', marginBottom: 100}} name={each.name} img={each.img} arv={each.arv} balance={each.balance} />
                    })}
                </Box>
                <Box mb={10}><Pagenation /></Box>
                <JoinNow></JoinNow>
            </Box>
        )
    }

    return !isMobile ? renderWebMarket() : renderMobileMarket();

}

export default Market
