import { Box } from "@mui/material"
import react, { FC, useState } from "react"
import useMobile from "../hooks/useMobile"
import userIcon from "../assets/images/topbar/userprofile.svg"
import { Cbox } from "./CustomizeComponents"
import { useNavigate } from "react-router-dom"
import { setUserAuth } from "../actions/UserAuth"
import { useAppDispatch } from "../app/hooks"
import { logout as logoutApi } from '../apis/logout';
import useAuth from "../hooks/useAuth"

interface ProfileProps {
    userInfo: string
    onClick?: () => void;
}

const Profile: FC<ProfileProps> = (props: ProfileProps) => {
    let navigate = useNavigate();
    const { isMobile } = useMobile()
    const [openUserProfile, setOpenUserProfile] = useState(false);
    const { logout } = useAuth();
    const dispatch = useAppDispatch();
    const onClickUserProfile = () =>{   
        setOpenUserProfile(!openUserProfile);
    }

    const signout = async() => {
        console.log("aaa")
        const res = await logoutApi()
        if(res) {
            dispatch(setUserAuth(false))
            logout()
        }
    }
    const renderWeb = () =>{
        return <Box mr="20px" style={{cursor: 'pointer'}} position="relative" bgcolor="#1E1E1E" borderRadius="999px" p="0.85vw 1.24vw" pr="4vw">
            <Cbox>{props.userInfo}</Cbox>
            <Box height="100%" position="absolute" right="0" top="0" borderRadius="999px" onClick={onClickUserProfile}><img src={userIcon} alt="" style={{height: '100%'}} /></Box>
            {openUserProfile && <Box position="absolute" left="0" width="100%" top="calc(100% + 10px)" display="flex" flexDirection="column" >
                <Box display="flex">
                    <Box width="0" height="0" borderLeft="15px solid transparent" borderRight="15px solid transparent" borderBottom="25px solid #2C2C2D" ml="83%" />
                </Box>
                <Box zIndex="10" borderRadius="8px" bgcolor="#2C2C2D" display="flex" flexDirection="column" p="1.3vw">
                    <Cbox onClick={()=>{navigate('profile/profile')}} borderBottom="1px solid rgba(255, 255, 255, 0.1)" fsize="12" pa="8">Profile</Cbox>
                    <Cbox onClick={()=>{navigate('profile/referral')}} borderBottom="1px solid rgba(255, 255, 255, 0.1)" fsize="12" pa="8">Referral</Cbox>
                    <Cbox onClick={()=>{navigate('profile/setting')}} borderBottom="1px solid rgba(255, 255, 255, 0.1)" fsize="12" pa="8">Setting</Cbox>
                    <Box onClick={signout} 
                        color="#DE4C4C" p="0.55vw" fontSize="0.828vw">Log out</Box>
                </Box>
            </Box>}
        </Box>
    }

    const renderMobile = () => {
        return <Box onClick={props.onClick} width="100%" mb="40px" style={{cursor: 'pointer'}} position="relative" bgcolor="#1E1E1E" borderRadius="999px" p="1.35vw 4.24vw" pr="4vw">
            <Cbox>{props.userInfo}</Cbox>
            <Box height="100%" position="absolute" right="0" top="0" borderRadius="999px" ><img src={userIcon} alt="" style={{height: '100%'}} /></Box>
        </Box>
    }
    
    return isMobile ? renderMobile() : renderWeb()
}

export default Profile