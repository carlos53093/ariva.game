/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Cbox } from "./CustomizeComponents";
import { Box } from "@mui/system";
import { FC } from "react";
import close from "../assets/images/home/close.svg"
import Instagram from "../assets/images/home/link/Instagram.svg"
import Twitter from "../assets/images/home/link/Twitter.svg"
import Telegram from "../assets/images/home/link/Telegram.svg"
import Facebook from "../assets/images/home/link/Facebook.svg"
import Discord from "../assets/images/home/link/Discord.svg"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface DialogProps {
  open: boolean;
  mobile?: boolean;
  onClose: () => void;
}

export default function JoinCommunityDialog(props: DialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.open !== open) {
      setOpen(props.open);
    }
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  const dispatchRender = () => {
    switch (props.mobile) {
      case true:
        return renderMobile();
      default:
        return renderWeb();
    }
  };

  const renderWeb = () => {
    return (
      <Cbox borderRadius="8px" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px">
        <Cbox width="100%" position="relative" overflow="hidden" borderRadius="8px" style={{ background: '#1E1E1E' }} flexDirection="column" pat="50" pal="58" pab="64">
          <Cbox position="absolute" right="0" top="0" className="join_community_bg" zIndex="1" height="100%" width="50%"></Cbox>
          <Cbox zIndex="3" onClick={handleClose} pa="12" right="0" top="0" position="absolute" style={{ background: 'linear-gradient(133.24deg, rgba(203, 250, 52, 0.62) -15.55%, #80BBD5 93.32%)' }} borderRadius="0px 8px">
            <img src={close} alt="close" />
          </Cbox>
          <Cbox fsize="28" bold>Follow us on social media</Cbox>
          <Cbox cmb="13" fsize="14">Stay tuned with us to get the last updates about Ariva Wonderland.</Cbox>
          <Cbox cmb="28">
            <Cbox cmr="8"><a href="https://www.instagram.com/ArivaWonderland/" target="_blank"><img src={Instagram} style={{ width: '4.55vw' }} alt="" /></a></Cbox>
            <Cbox cmr="8"><a href="https://twitter.com/ArivaWonderland" target="_blank"><img src={Twitter} style={{ width: '4.55vw' }} alt="" /></a></Cbox>
            <Cbox cmr="8"><a href="https://t.me/ariva_arv" target="_blank"><img src={Telegram} style={{ width: '4.55vw' }} alt="" /></a></Cbox>
            <Cbox cmr="8"><a href="https://discord.gg/nnFn8HgPhv" target="_blank"><img src={Discord} style={{ width: '4.55vw' }} alt="" /></a></Cbox>
            <Cbox cmr="8"><a href="https://www.facebook.com/ArivaWonderland/" target="_blank"><img src={Facebook} style={{ width: '4.55vw' }} alt="" /></a></Cbox>
          </Cbox>
          <Cbox fsize="14">Also you can follow Ariva project on</Cbox> 
          <Cbox fsize="14">
            <u style={{paddingRight: 5}}><a href="https://www.instagram.com/arivacoin/" target="_blank">Instagram,</a></u>
            <u style={{paddingRight: 5}}><a href="https://www.facebook.com/arivadigital" target="_blank">Facebook,</a></u> 
            <u style={{paddingRight: 5}}><a href="https://twitter.com/ArivaCoin">Twitter</a></u> <span style={{paddingRight: 5}}>or</span> 
            <u style={{paddingRight: 5}}><a href="https://www.reddit.com/r/ArivaCoin">Reddit</a></u>
          </Cbox>
        </Cbox>
      </Cbox>
    );
  }

  const renderMobile = () => {
    return (
      <Cbox borderRadius="8px" style={{ background: 'linear-gradient(180deg, rgba(202, 249, 54, 1) 0%, rgba(104, 174, 209, 0) 100%)' }} p="2px">
        <Cbox width="100%" mobile position="relative" overflow="hidden" borderRadius="8px" style={{ background: '#1E1E1E' }} flexDirection="column" pt="41px" pl="51px" pb="43px">
          <Cbox pa="12" right="0" top="0" position="absolute" style={{ background: 'linear-gradient(133.24deg, rgba(203, 250, 52, 0.62) -15.55%, #80BBD5 93.32%)' }} borderRadius="0px 8px">
            <img src={close} alt="close" />
          </Cbox>
          <Cbox mobile fontSize="28px" bold pr="137px" lineHeight="110%" mb="10px">Follow us on social media</Cbox>
          <Cbox mobile mb="13px" fontSize="14px" pr="103px" lineHeight="110%">Stay tuned with us to get the last updates about Ariva Wonderland.</Cbox>
          <Cbox mobile mb="28px">
            <Cbox mobile cmr="8"><a href="https://www.instagram.com/ArivaWonderland/" target="_blank"><img src={Instagram} style={{ width: '42px' }} alt="" /></a></Cbox>
            <Cbox mobile cmr="8"><a href="https://twitter.com/ArivaWonderland" target="_blank"><img src={Twitter} style={{ width: '42px' }} alt="" /></a></Cbox>
            <Cbox mobile cmr="8"><a href="https://t.me/ariva_arv" target="_blank"><img src={Telegram} style={{ width: '42px' }} alt="" /></a></Cbox>
            <Cbox mobile cmr="8"><a href="https://discord.gg/nnFn8HgPhv" target="_blank"><img src={Discord} style={{ width: '42px' }} alt="" /></a></Cbox>
            <Cbox mobile cmr="8"><a href="https://www.facebook.com/ArivaWonderland/" target="_blank"><img src={Facebook} style={{ width: '42px' }} alt="" /></a></Cbox>
          </Cbox>
          <Box fontSize="14px" lineHeight="110%" pr="60px">Also you can follow Ariva project on
            <u style={{paddingRight: 5, paddingLeft: 5}}><a href="https://www.instagram.com/arivacoin/" target="_blank">Instagram,</a></u>
            <u style={{paddingRight: 5}}><a href="https://www.facebook.com/arivadigital" target="_blank">Facebook,</a></u> 
            <u style={{paddingRight: 5}}><a href="https://twitter.com/ArivaCoin" target="_blank">Twitter</a></u> <span style={{paddingRight: 5}}>or</span> 
            <u style={{paddingRight: 5}}><a href="https://twitter.com/ArivaCoin" target="_blank">Reddit</a></u>
          </Box>
        </Cbox>
      </Cbox>
    );
  }

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      sx={{ backgroundColor: '#505050ad' }}
      PaperProps={
        !props.mobile
          ? { sx: { width: "75vw", height: 'auto', top: '-10%', borderRadius: '8px' } }
          : {
            sx: {
              width: "338px", height: 'auto', borderRadius: '8px', top: '-150px'
            },
          }
      }
      open={open}
      fullScreen={true}
    >
      {dispatchRender()}
    </BootstrapDialog>
  );
}
