/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/system";
import React, { FC, useState } from "react";
import useMobile from "../../hooks/useMobile";
import { Bold, FilterBtn, H, NewestBtn, TextNormal } from "../CustomizeComponents";
import filterIcon from "../../assets/images/market/filter.svg"
import arrow from "../../assets/images/market/arrowdown.svg"
import arrowleft from "../../assets/images/market/arrowleft.svg"
import _ from "lodash"

interface CollectionProps {
    style?: any
}

const Collection: FC<CollectionProps> = (props: CollectionProps) => {
    const mockData = {
        title: 'NFT Collection',
        items: ['Snoop Dogg', 'Smurf', 'Atari', 'Care bear', 'Atari', 'Atari', 'Atari', 'Atari', 'Atari', 'Atari']
    }
    return <Box className="collection" style={{ ...props.style }}>
        <Bold style={{marginBottom: 10}}>NFT Collection</Bold>
        <Box className="collection_container">
            {
                _.map(mockData.items, (item, id) => {
                    return <Box className="collection_itm" key={id}>
                        <Box className="collection_itm_block" />
                        <TextNormal style={{ fontSize: 12 }}>{item}</TextNormal>
                    </Box>
                })
            }

        </Box>
    </Box>
}

const Filterbar: FC = () => {
    const { isMobile } = useMobile()
    const [openFilter, setOpenFilter] = useState(false);
    const [openMobileFilter, setOpenMobileFilter] = useState(false)
    const onClickFilter = () => {
        setOpenFilter(!openFilter)
    }
    const onClickMobileFilter = () =>{
        setOpenMobileFilter(!openMobileFilter)
    }
    const renderWeb = () => {
        return <Box className="market_filter_wrapper">
            <Box className="market_filter_container">
                <Box className="market_filter_in">
                    <Box style={{ height: 240 }}></Box>
                    <Box className="market_filter_option">
                        <TextNormal style={{ textAlign: 'center', fontSize: 16 }}>NFTs for sale  |  1254 results</TextNormal>
                        <Box className="market_filter_option_btns">
                            <FilterBtn onClick={onClickFilter} style={{ marginLeft: 10 }}>Filters<img src={filterIcon} style={{ marginLeft: 5 }} /></FilterBtn>
                            <NewestBtn style={{ marginLeft: 10 }}>Newest<img src={arrow} style={{ marginLeft: 5 }} /></NewestBtn>
                            <TextNormal style={{ textAlign: 'center', fontSize: 16 }}>Sort by</TextNormal>
                        </Box>
                    </Box>
                </Box>
                <Box className="market_filter_mark_container">
                    <Box className="market_filter_mark_content">
                        <H style={{ textAlign: 'center' }}>NFT Market of Ariva Wonderland</H>
                        <TextNormal style={{ textAlign: 'center', fontSize: 16 }}>Here you can find and buy all the assets that you want for your adventure in <b>Ariva Wonderland</b></TextNormal>
                    </Box>
                </Box>
            </Box>

            {/* slider widget */}
            <Box className="market_sort" style={openFilter ? { display: 'block' } : { display: 'none' }}>
                <Box className="market_sort_main">
                    <Box className="market_sort_mid">
                        <Box className="market_sort_container">
                            <Collection style={{ marginRight: 10 }} />
                            <Collection style={{ marginRight: 10 }} />
                            <Collection style={{ marginRight: 10 }} />
                            <Collection style={{ marginRight: 10 }} />
                            <Collection style={{ marginRight: 10 }} />
                        </Box>
                    </Box>
                    <Box className="market_shadow"></Box>
                </Box>
            </Box>
        </Box>
    }

    const renderMobileMarket = () => {
        return <Box className="mobile_market_filter_container" display="flex" flexDirection="column">
            <Box className="mobile_market_filter_mark_container">
                <Box className="mobile_market_filter_mark_content">
                    <H mode="mobile" style={{ textAlign: 'center' }}>NFT Market of Ariva Wonderland</H>
                    <TextNormal style={{ textAlign: 'center', fontSize: 14 }}>Here you can find and buy all the assets that you want for your adventure in <b>Ariva Wonderland</b></TextNormal>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ padding: '16px 40px', background: '#2A2D37', marginTop: -5 }}>
                <TextNormal style={{ textAlign: 'center', fontSize: 16, marginBottom: 10 }}>NFTs for sale  |  1254 results</TextNormal>
                <Box className="market_filter_option_btns">
                    <FilterBtn style={{ marginLeft: 10 }}>Filters<img src={filterIcon} style={{ marginLeft: 5 }} /></FilterBtn>
                    <NewestBtn style={{ marginLeft: 10 }}>Newest<img src={arrow} style={{ marginLeft: 5 }} /></NewestBtn>
                    <TextNormal style={{ textAlign: 'center', fontSize: 16 }}>Sort by</TextNormal>
                </Box>
            </Box>
        </Box>
    }

    const renderMobileFilter = () => {
        return <Box className="mobile_market_filter">
            <NewestBtn onClick={()=>setOpenMobileFilter(false)}><img src={arrowleft} style={{ marginRight: 10 }} />Back</NewestBtn>
            <Box className="mobile_market_filter_container">
                <Collection style={{ marginTop: 10 }} />
                <Collection style={{ marginTop: 10 }} />
                <Collection style={{ marginTop: 10 }} />
                <Collection style={{ marginTop: 10 }} />
            </Box>

        </Box>
    }

    const renderMobile = () => {
        return !openMobileFilter ? renderMobileMarket() : renderMobileFilter()
    }

    return !isMobile ? renderWeb() : renderMobile()
}

export default Filterbar;