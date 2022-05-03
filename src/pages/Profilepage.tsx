/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useMobile from '../hooks/useMobile';
import nft1 from "../assets/images/Profilepage/nft1.svg"
import userIco from "../assets/images/profile/userprofileIco.svg"
import copy from "../assets/images/profile/copy.svg"
import link from "../assets/images/profile/link.svg"
import avaIco from "../assets/images/profile/avaIco.svg"
import cubic from "../assets/images/profile/cubic.svg"
import telIcon from "../assets/images/profile/telIcon.svg"
import twitter from '../assets/images/profile/twitter.svg'
import facebook from '../assets/images/profile/facebook.svg'

import Pagenation from '../Components/Pagenation';
import JoinNow from '../Components/Home/JoinNow';
import { Cbox, CustomField, FilterBtn } from '../Components/CustomizeComponents';
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { setUserAuth } from '../actions/UserAuth';
import { logout as logoutApi } from '../apis/logout';
import useAuth from '../hooks/useAuth';

const CustomInput = styled((props: any) => <input {...props} />)`
    background: rgba(255, 255, 255, 0.1);
    padding: 9px 43px;
    color: white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    border: none;
    height: auto;
    display: flex;
    align-items: center;
    &:focus-visible{
        outline: none;
        border: none;
    }
`;

interface ProfilepageInterface {
}

const Profilepage: React.FC<ProfilepageInterface> = (props: ProfilepageInterface) => {
    const { isMobile } = useMobile()
    const [page, setPage] = useState("profile")
    const { pagename } = useParams();
    let navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        console.log(page)
        if (pagename !== page) {
            setPage(pagename || "profile")
        }
    }, [pagename])

    const dispatch = useAppDispatch();

    const signout = async() => {
        const res = await logoutApi()
        if(res) {
            dispatch(setUserAuth(false))
            logout()
        }
    }

    const renderPagesByMode = () => {
        switch (page) {
            case 'referral':
                return renderReferralpage()
            case 'setting':
                return renderSettingpage()
            case 'profile':
            default:
                return renderProfilepage()
        }
    }
    const renderWeb = () => {
        return (<Box padding="75px 70px 70px 150px" flex="flex" >
            <Box overflow="hidden" display="flex" bgcolor="rgba(120, 120, 120, 0.1)" borderRadius="8px" width="100%">
                <Box flex={1} bgcolor="rgba(255, 255, 255, 0.06)" width="100%" display="flex" pt="1.5vw" pr="1.1vw" flexDirection="column" position="relative">
                    <Cbox bgcolor={page === 'profile' ? "rgba(255, 255, 255, 0.06)" : ""} position="relative" onClick={() => { navigate('/profile/profile') }} mb="10px" display='flex' fsize="15" width="100%" pl="2.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
                        Profile
                        {page === 'profile' && <Box position="absolute" left="-2%" top="0" height="100%" width="7.9%" borderRadius="10px" boxShadow="0px 0px 8px #CBFA34" bgcolor="#CBFA34" />}
                    </Cbox>
                    <Cbox bgcolor={page === 'referral' ? "rgba(255, 255, 255, 0.06)" : ""} position="relative" onClick={() => { navigate('/profile/referral') }} mb="10px" display='flex' fsize="15" width="100%" pl="2.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
                        Referral
                        {page === 'referral' && <Box position="absolute" left="-2%" top="0" height="100%" width="7.9%" borderRadius="10px" boxShadow="0px 0px 8px #CBFA34" bgcolor="#CBFA34" />}
                    </Cbox>
                    <Cbox bgcolor={page === 'setting' ? "rgba(255, 255, 255, 0.06)" : ""} position="relative" onClick={() => { navigate('/profile/setting') }} mb="10px" display='flex' fsize="15" width="100%" pl="2.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
                        Setting
                        {page === 'setting' && <Box position="absolute" left="-2%" top="0" height="100%" width="7.9%" borderRadius="10px" boxShadow="0px 0px 8px #CBFA34" bgcolor="#CBFA34" />}
                    </Cbox>
                    <Box color="#DE4C4C" pb="0.55vw" display='flex' fontSize="1vw" width="100%" pl="2.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }} onClick={signout}>Log out</Box>
                </Box>
                <Box flex={4} padding="2.8vw 3.1vw 3.45vw 3.45vw" display="flex" flexDirection={"column"}>
                    {renderPagesByMode()}
                </Box>
            </Box>
        </Box>)
    }

    const renderMobile = () => {
        return (
            <Box padding="25px" display="flex" flexDirection="column">
                <Box overflow="hidden" flexDirection="column" display="flex" bgcolor="rgba(120, 120, 120, 0.1)" borderRadius="8px" width="100%">
                    <Box flex={1} bgcolor="rgba(255, 255, 255, 0.06)" width="100%" display="flex" pt="3.5vw" pb="3.5vw" pr="5.1vw" flexDirection="column" position="relative">
                        <Cbox bgcolor={page === 'profile' ? "rgba(255, 255, 255, 0.06)" : ""} position="relative" onClick={() => { navigate('/profile/profile') }} mb="10px" display='flex' fontSize="15px" width="100%" py="1.5vw" pl="10.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
                            Profile
                            {page === 'profile' && <Box position="absolute" left="-2%" top="0" height="100%" width="4.5%" borderRadius="10px" boxShadow="0px 0px 8px #CBFA34" bgcolor="#CBFA34" />}
                        </Cbox>
                        <Cbox bgcolor={page === 'referral' ? "rgba(255, 255, 255, 0.06)" : ""} position="relative" onClick={() => { navigate('/profile/referral') }} mb="10px" display='flex' fontSize="15px" width="100%" py="1.5vw" pl="10.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
                            Referral
                            {page === 'referral' && <Box position="absolute" left="-2%" top="0" height="100%" width="4.5%" borderRadius="10px" boxShadow="0px 0px 8px #CBFA34" bgcolor="#CBFA34" />}
                        </Cbox>
                        <Cbox bgcolor={page === 'setting' ? "rgba(255, 255, 255, 0.06)" : ""} position="relative" onClick={() => { navigate('/profile/setting') }} mb="10px" display='flex' fontSize="15px" width="100%" py="1.5vw" pl="10.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
                            Setting
                            {page === 'setting' && <Box position="absolute" left="-2%" top="0" height="100%" width="4.5%" borderRadius="10px" boxShadow="0px 0px 8px #CBFA34" bgcolor="#CBFA34" />}
                        </Cbox>
                        <Box color="#DE4C4C" pb="0.55vw" display='flex' fontSize="15px" width="100%" pl="10.277vw" style={{ borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }} onClick={signout}>Log out</Box>
                    </Box>
                    <Box flex={4} padding="2.8vw 3.1vw 3.45vw 3.45vw" display="flex" flexDirection={"column"}>
                        {renderPagesByMode()}
                    </Box>
                </Box>
            </Box>
        )
    }

    const renderProfilepage = () => {
        return isMobile ?
            <>
                <Box ml="3.45vw" mt="5vw" mb="8.1vw" bgcolor="#2C2C2C" display="flex" borderRadius="20px" flexDirection="column" p="1.8vw 3.45vw 1.8vw 15.1vw" position="relative">
                    <Cbox fontSize="28px" bold>Username</Cbox>
                    <Cbox fontSize="12px">@username</Cbox>
                    <Box position="absolute" left="-3.45vw" top="0">
                        <img src={userIco} alt="" style={{ width: '80%', height: '80%' }} />
                    </Box>
                </Box>
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} p="3px" borderRadius="8px">
                    <Cbox style={{ background: 'linear-gradient(270deg, rgba(29, 34, 40, 0.9) 0%, #2F2F2F 100%)' }} p="4vw" flexDirection="column" borderRadius="6px">
                        <Cbox mb="8.725vw" display="flex" justifyContent="flex-start" alignItems="flex-start">
                            <img src={avaIco} alt="avaIco" />
                            <Cbox ml="10px" flexDirection="column">
                                <Cbox fontSize="20px" bold>120000 ARV</Cbox>
                                <Cbox fontSize="14px">60.0612 USD</Cbox>
                            </Cbox>
                        </Cbox>
                        <Cbox mb="8.725vw" display="flex" alignItems="flex-start">
                            <img src={cubic} alt="avaIco" />
                            <Cbox ml="10px" flexDirection="column">
                                <Cbox fontSize="20px" bold>2 Lands</Cbox>
                                <Cbox fontSize="14px">450.0 USD</Cbox>
                            </Cbox>
                        </Cbox>
                        <Box display="flex" borderRadius="4px" overflow="hidden">
                            <CustomInput style={{ width: '80%' }} value="https://www.ariva.wonderland/login/?r=B4W~2XvdMuep7q7yGzxu7o" />
                            <Box display="flex">
                                <img width="100%" src={copy} alt="copy" />
                                <img width="100%" src={link} alt="link" />
                            </Box>
                        </Box>
                    </Cbox>
                </Box>
            </>
            :
            <>
                <Box ml="3.45vw" mb="3.1vw" bgcolor="#2C2C2C" display="flex" width="fit-content" borderRadius="20px" flexDirection="column" p="1.8vw 3.45vw 1.8vw 5.1vw" position="relative">
                    <Cbox fsize="28" bold>Username</Cbox>
                    <Cbox fsize="12">@username</Cbox>
                    <Box position="absolute" left="-3.45vw" top="0">
                        <img src={userIco} alt="" style={{ width: '100%', height: '100%' }} />
                    </Box>
                </Box>
                <Cbox fsize="18" mb="1.5vw" bold>My Wallet</Cbox>
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} p="3px" borderRadius="8px">
                    <Cbox style={{ background: 'linear-gradient(270deg, rgba(29, 34, 40, 0.9) 0%, #2F2F2F 100%)' }} pa="25" flexDirection="column" borderRadius="6px">
                        <Cbox mb="1.725vw" display="flex" justifyContent="flex-start" alignItems="flex-start">
                            <img src={avaIco} alt="avaIco" />
                            <Cbox ml="10px" flexDirection="column">
                                <Cbox fsize="20" bold>120000 ARV</Cbox>
                                <Cbox fsize="14">60.0612 USD</Cbox>
                            </Cbox>
                        </Cbox>
                        <Cbox mb="1.725vw" display="flex" alignItems="flex-start">
                            <img src={cubic} alt="avaIco" />
                            <Cbox ml="10px" flexDirection="column">
                                <Cbox fsize="20" bold>2 Lands</Cbox>
                                <Cbox fsize="14">450.0 USD</Cbox>
                            </Cbox>
                        </Cbox>
                        <Box display="flex" borderRadius="4px" overflow="hidden">
                            <CustomInput style={{ width: '80%' }} value="https://www.ariva.wonderland/login/?r=B4W~2XvdMuep7q7yGzxu7o" />
                            <Box display="flex">
                                <img width="100%" src={copy} alt="copy" />
                                <img width="100%" src={link} alt="link" />
                            </Box>
                        </Box>
                    </Cbox>
                </Box>
            </>
    }
    const renderReferralpage = () => {
        return isMobile ?
            <>
                <Box style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox style={{ background: '#2C2C2C' }} p="6.67vw" flexDirection="column" borderRadius="6px">
                        <Cbox fontSize="28px" bold>
                            Earn by refering a friend
                        </Cbox>
                        <Cbox fontSize="12px">
                            Share your unique referral link with your friend. When the friend buys something in Ariva Wonderland, you'll get a percentage of the sale!
                        </Cbox>
                    </Cbox>
                </Box>
                <Box overflow="hidden" borderRadius="8px">
                    <Cbox width="90%" style={{ background: 'linear-gradient(270deg, rgba(29, 34, 40, 0) 0%, #2F2F2F 100%)' }} mb="3px" p="6.4vw" flexDirection="column">
                        <Cbox fontSize="20px" bold mb="10px" >Share the referral link</Cbox>

                        <Box display="flex" mb="20px" borderRadius="4px" overflow="hidden" width="70%">
                            <CustomInput style={{ width: '100%' }} value="https://www.ariva.wonderland/login/?r=B4W~2XvdMuep7q7yGzxu7o" />
                            <Box display="flex">
                                <img style={{ height: '110%', objectFit: 'cover' }} src={copy} alt="copy" />
                            </Box>
                        </Box>
                        <Cbox fontSize="14px" pb="30px">Link Duration: 40 Days</Cbox>
                        <Cbox fontSize="20px" bold mb="20px" >Share on social media</Cbox>
                        <Cbox>
                            <img src={twitter} alt="" style={{ marginRight: 10 }} />
                            <img src={facebook} alt="" style={{ marginRight: 10 }} />
                            <img src={telIcon} alt="" style={{ marginRight: 10 }} />
                        </Cbox>
                    </Cbox>
                    <Cbox flexDirection="column" width="90%" style={{ background: 'linear-gradient(270deg, rgba(29, 34, 40, 0) 0%, #2F2F2F 100%)' }} p="6.4vw">
                        <Cbox fontSize="15px"><b>Total referred</b>: 0</Cbox>
                        <Cbox fontSize="15px"><b>Total earned</b>: 0 ARV</Cbox>
                    </Cbox>
                </Box>

            </>
            :
            <>
                <Box style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox style={{ background: '#2C2C2C' }} pa="25" flexDirection="column" borderRadius="6px">
                        <Cbox fsize="28" bold>
                            Earn by refering a friend
                        </Cbox>
                        <Cbox fsize="12">
                            Share your unique referral link with your friend. When the friend buys something in Ariva Wonderland, you'll get a percentage of the sale!
                        </Cbox>
                    </Cbox>
                </Box>
                <Box overflow="hidden" borderRadius="8px">
                    <Cbox width="90%" style={{ background: 'linear-gradient(270deg, rgba(29, 34, 40, 0) 0%, #2F2F2F 100%)' }} mb="3px" pa="25" flexDirection="column">
                        <Cbox justifyContent="space-between" width="70%">
                            <Cbox fsize="20" bold mb="10px" >Share the referral link</Cbox>
                            <Cbox fsize="14">Link Duration: 40 Days</Cbox>
                        </Cbox>
                        <Box display="flex" mb="20px" borderRadius="4px" overflow="hidden" width="70%">
                            <CustomInput style={{ width: '100%' }} value="https://www.ariva.wonderland/login/?r=B4W~2XvdMuep7q7yGzxu7o" />
                            <Box display="flex">
                                <img style={{ height: '100%' }} src={copy} alt="copy" />
                            </Box>
                        </Box>
                        <Cbox fsize="20" bold mb="10px" >Share on social media</Cbox>
                        <Cbox>
                            <img src={twitter} alt="" style={{ marginRight: 10 }} />
                            <img src={facebook} alt="" style={{ marginRight: 10 }} />
                            <img src={telIcon} alt="" style={{ marginRight: 10 }} />
                        </Cbox>
                    </Cbox>
                    <Cbox width="90%" style={{ background: 'linear-gradient(270deg, rgba(29, 34, 40, 0) 0%, #2F2F2F 100%)' }} pa="25">
                        <Cbox flex={1} fsize="15"><b>Total referred</b>: 0</Cbox>
                        <Cbox flex={1} fsize="15"><b>Total earned</b>: 0 ARV</Cbox>
                    </Cbox>
                </Box>
            </>
    }
    const renderSettingpage = () => {
        return isMobile ?
            <>
                <Box style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox style={{ background: '#2C2C2C' }} p="6.4vw" flexDirection="column" borderRadius="6px">
                        <Cbox fontSize="28px" bold mb="40px">
                            General Setting
                        </Cbox>
                        <CustomField label="Email" style={{ marginBottom: 40 }} className="web_field_gray" labelColor='#2C2C2C' />
                        <CustomField label="New email" className="web_field_gray" labelColor='#2C2C2C' />
                        <Cbox fontSize="18px" mb="40px">Your personal information</Cbox>
                        <CustomField label="Username" style={{ marginBottom: '50px !important' }} className="web_field_gray" labelColor='#2C2C2C' />
                        <Cbox
                            mb={"50px"}
                            mt="30px"
                            width={!isMobile ? "auto" : "100%"}
                            position="relative"
                            borderRadius="12px"
                            border="solid 2px white"
                        >
                            <textarea
                                className={!isMobile ? "web_field_gray" : "mobile_field_gray"}
                                style={
                                    !isMobile
                                        ? { width: "26.9vw", padding: "0.48vw 0.96vw", height: "144px" }
                                        : { width: "100%", padding: "1.8vw 3.7vw", height: "144px" }

                                }
                            />
                            <Cbox
                                p="4px 10px"
                                position="absolute"
                                top="-20px"
                                left="20px"
                                bgcolor="#2C2C2C"
                            >
                                Description
                            </Cbox>
                        </Cbox>
                        <Cbox><FilterBtn style={{ padding: '3.62vw 6.96vw', borderRadius: 12, fontSize: '14px', fontWeight: 'bold' }}>Save setting</FilterBtn></Cbox>
                    </Cbox>
                </Box>
                <Box style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox style={{ background: '#2C2C2C' }} p="6.4vw" flexDirection="column" borderRadius="6px">
                        <Cbox fontSize="28px" bold mb="40px">
                            Security
                        </Cbox>
                        <CustomField label="Current password" style={{ marginBottom: '50px' }} className="web_field_gray" labelColor='#2C2C2C' />
                        <CustomField label="New password" style={{ marginBottom: '50px' }} className="web_field_gray" labelColor='#2C2C2C' />
                        <CustomField label="Repeat password" className="web_field_gray" labelColor='#2C2C2C' />

                        <Cbox><FilterBtn style={{ padding: '3.62vw 6.96vw', borderRadius: 12, fontSize: '14px', fontWeight: 'bold' }}>Change password</FilterBtn></Cbox>
                    </Cbox>
                </Box>
            </>
            :
            <>
                <Box style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox style={{ background: '#2C2C2C' }} pa="25" flexDirection="column" borderRadius="6px">
                        <Cbox fsize="28" bold mb="40px">
                            General Setting
                        </Cbox>
                        <Cbox mb="60px">
                            <CustomField label="Email" style={{ marginRight: 30 }} className="web_field_gray" labelColor='#2C2C2C' />
                            <CustomField label="New email" className="web_field_gray" labelColor='#2C2C2C' />
                        </Cbox>
                        <Cbox fsize="18" mb="40px">Your personal information</Cbox>
                        <Cbox mb="40px"><CustomField label="Username" style={{ marginBottom: '40px !important' }} className="web_field_gray" labelColor='#2C2C2C' /></Cbox>
                        <Cbox
                            mb={"50px"}
                            width={!isMobile ? "auto" : "100%"}
                            position="relative"
                            borderRadius="12px"
                            border="solid 2px white"
                        >
                            <textarea
                                className={!isMobile ? "web_field_gray" : "mobile_field_gray"}
                                style={
                                    !isMobile
                                        ? { width: "26.9vw", padding: "0.48vw 0.96vw", height: "144px" }
                                        : { width: "100%", padding: "1.8vw 3.7vw", height: "144px" }

                                }
                            />
                            <Cbox
                                p="4px 10px"
                                position="absolute"
                                top="-20px"
                                left="20px"
                                bgcolor="#2C2C2C"
                            >
                                Description
                            </Cbox>
                        </Cbox>
                        <Cbox><FilterBtn style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Save setting</FilterBtn></Cbox>
                    </Cbox>
                </Box>
                <Box style={{ background: 'linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px">
                    <Cbox style={{ background: '#2C2C2C' }} pa="25" flexDirection="column" borderRadius="6px">
                        <Cbox fsize="28" bold mb="40px">
                            Security
                        </Cbox>
                        <Cbox mb="40px"><CustomField label="Current password" style={{ marginBottom: '40px !important' }} className="web_field_gray" labelColor='#2C2C2C' /></Cbox>
                        <Cbox mb="60px">
                            <CustomField label="New password" style={{ marginRight: 30 }} className="web_field_gray" labelColor='#2C2C2C' />
                            <CustomField label="Repeat password" className="web_field_gray" labelColor='#2C2C2C' />
                        </Cbox>

                        <Cbox><FilterBtn style={{ padding: '0.62vw 2.96vw', borderRadius: 12, fontSize: '1.1vw', fontWeight: 'bold' }}>Change password</FilterBtn></Cbox>
                    </Cbox>
                </Box>
            </>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default Profilepage
