/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Cbox, CustomField, FilterBtn, NewestBtn } from "./CustomizeComponents";
import { Box } from "@mui/system";
import { FC } from "react";
import metamask from "../assets/images/login/MetaMask1.svg";
import metamask2 from "../assets/images/login/WalletConnect.svg";
import arrowleft from "../assets/images/market/arrowleft.svg";
import { setUserAuth, setUserInfo } from "../actions/UserAuth";
import { useAppDispatch } from "../app/hooks";
import useAuth from "../hooks/useAuth";
import { ConnectorNames } from "../types";
import axios from "axios";
import { getValue, setValue, USER_TOKEN } from "../app/localStorage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mb: 3, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const ImgBox: FC<{
  img: any;
  mobile?: boolean;
  style?: any;
  title: string;
  onClick?: () => void;
}> = (props: {
  img: any;
  mobile?: boolean;
  style?: any;
  title: string;
  onClick?: () => void;
}) => {
  return (
    <Cbox
      style={{
        ...props.style,
        background:
          "linear-gradient(180deg, rgba(176, 222, 28, 0.71) 0%,rgba(255, 255, 255, 0) 100%)",
        cursor: "pointer",
      }}
      width={props.mobile ? "30.76vw" : "16.7vw"}
      height={props.mobile ? "33.3vw" : "15.87vw"}
      borderRadius="8px"
      justifyContent="center"
      alignItems="center"
      p="2px"
      onClick={props.onClick}
    >
      <Box
        bgcolor="#1E1E1E"
        borderRadius="8px"
        p="21px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Cbox>
          <img
            src={props.img}
            alt=""
            style={
              props.mobile
                ? { width: "16.6vw", height: "16.6vw" }
                : { width: "9.1vw", height: "9.1vw" }
            }
          />
        </Cbox>
        <Cbox textAlign="center" fontSize={!props.mobile ? "1.1vw" : "3.07vw"}>
          {props.title}
        </Cbox>
      </Box>
    </Cbox>
  );
};

interface DialogProps {
  open: boolean;
  mobile?: boolean;
  onClose: () => void;
}

export default function CustomizedDialogs(props: DialogProps) {
  const [open, setOpen] = React.useState(false);
  const [windowMode, setWindowMode] = React.useState("metamask");
  const dispatch = useAppDispatch();
  const { login, account } = useAuth();

  React.useEffect(() => {
    if (props.open !== open) {
      setOpen(props.open);
    }
  }, [props.open]);

  React.useEffect(()=>{
    if(!account) return;
    if(getValue(USER_TOKEN)) {
      return;
    }
    (async() => {
      console.log(account)
      try{
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, {wallet: account})
        if(!res.data.success) {
          const registerRes = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, {wallet: account})
          console.log("register data",registerRes.data)
          if (registerRes.data.success) {
            // dispatch(setUserInfo(registerRes.data.wallet));
            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, {wallet: account})
            const jwt = res.data.token
            setValue(USER_TOKEN, jwt)
            dispatch(setUserAuth(true));
            handleClose()
          } else {
            alert('something went wrong!')
          }
        } else {
          // dispatch(setUserInfo(res.data.wallet));
          const jwt = res.data.token
          setValue(USER_TOKEN, jwt)
          dispatch(setUserAuth(true));
          handleClose()
        }
      } catch(e) {
        alert('something went wrong!')
      }
    })()
  }, [account])

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  const connectWallet = async() => {
    await login(ConnectorNames.Injected)
  }

  const renderMetaPage = () => {
    return (
      <>
        {!props.mobile && (
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          />
        )}
        <DialogContent>
          <Cbox
            flexDirection="column"
            justifyContent={props.mobile ? "start" : "center"}
            alignItems={props.mobile ? "flex-start" : "center"}
          >
            {props.mobile && (
              <NewestBtn onClick={handleClose} style={{ marginBottom: "50px" }}>
                <img src={arrowleft} alt="" style={{ marginRight: 10 }} />
                Back
              </NewestBtn>
            )}
            <Cbox fontSize={props.mobile ? "9.23vw" : "2.5vw"} bold mb="10px">
              Login
            </Cbox>
            <Cbox
              textAlign="center"
              mb="24px"
              fontSize={!props.mobile ? "1.1vw" : "4.1vw"}
            >
              In order to login, you have to <br />
              connect your wallet
            </Cbox>
            <Cbox mb={props.mobile ? "30px" : "24px"}>
              <Cbox>
                <ImgBox
                  img={metamask}
                  mobile={props.mobile}
                  style={{ marginRight: "20px" }}
                  title="Using Metamask"
                  onClick={connectWallet}
                />
                <ImgBox
                  img={metamask2}
                  mobile={props.mobile}
                  title="Using WalletConnect"
                  onClick={() => login(ConnectorNames.WalletConnect)}
                />
              </Cbox>
            </Cbox>
            {/* <Cbox
              onClick={() => {
                setWindowMode("finished");
              }}
              fontSize={!props.mobile ? "1.1vw" : "4.1vw"}
              alignItems="center"
            >
              Already have an account
              <img src={next} alt="next" style={{ marginLeft: 10 }} />
            </Cbox> */}
          </Cbox>
        </DialogContent>
      </>
    );
  };

  const renderAlmostFinished = () => {
    return (
      <>
        {!props.mobile && (
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          />
        )}
        <DialogContent>
          <Cbox
            flexDirection="column"
            justifyContent={props.mobile ? "start" : "center"}
            alignItems={props.mobile ? "flex-start" : "center"}
          >
            {props.mobile && (
              <NewestBtn onClick={handleClose} style={{ marginBottom: "50px" }}>
                <img src={arrowleft} alt="" style={{ marginRight: 10 }} />
                Back
              </NewestBtn>
            )}
            <Cbox fontSize={props.mobile ? "9.23vw" : "2.5vw"} bold mb="10px">
              Almost finished
            </Cbox>
            <Cbox
              textAlign="center"
              mb="24px"
              fontSize={!props.mobile ? "1.1vw" : "4.1vw"}
            >
              Enter your email and username
            </Cbox>

            <CustomField label="Email" />
            <CustomField label="Username" />

            <FilterBtn
              onClick={() => {
                setWindowMode("login");
              }}
              fontSize={!props.mobile ? "1.1vw" : "4.1vw"}
              style={
                !props.mobile
                  ? {
                      padding: "0.62vw 2.96vw",
                      borderRadius: 12,
                      fontSize: "1.1vw",
                      fontWeight: "bold",
                    }
                  : {
                      padding: "2.3vw 11vw",
                      borderRadius: 12,
                      fontSize: "4.1vw",
                      fontWeight: "bold",
                    }
              }
            >
              Cotinue
            </FilterBtn>
          </Cbox>
        </DialogContent>
      </>
    );
  };

  const renderLogin = () => {
    return (
      <>
        {!props.mobile && (
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          />
        )}
        <DialogContent>
          <Cbox
            flexDirection="column"
            justifyContent={props.mobile ? "start" : "center"}
            alignItems={props.mobile ? "flex-start" : "center"}
          >
            {props.mobile && (
              <NewestBtn onClick={handleClose} style={{ marginBottom: "50px" }}>
                <img src={arrowleft} alt="" style={{ marginRight: 10 }} />
                Back
              </NewestBtn>
            )}
            {!props.mobile && (
              <Cbox fontSize={props.mobile ? "9.23vw" : "2.5vw"} bold mb="10px">
                Login
              </Cbox>
            )}
            <CustomField label="Email" />
            <CustomField label="Username" />
            <Cbox mb="30px" style={{ textDecoration: "underline" }}>
              I forgot my password
            </Cbox>
            <FilterBtn
              fontSize={!props.mobile ? "1.1vw" : "4.1vw"}
              style={
                !props.mobile
                  ? {
                      padding: "0.62vw 2.96vw",
                      borderRadius: 12,
                      fontSize: "1.1vw",
                      fontWeight: "bold",
                    }
                  : {
                      padding: "2.3vw 11vw",
                      borderRadius: 12,
                      fontSize: "4.1vw",
                      fontWeight: "bold",
                    }
              }
            >
              Log in
            </FilterBtn>
          </Cbox>
        </DialogContent>
      </>
    );
  };

  const dispatchRender = () => {
    switch (windowMode) {
      case "finished":
        return renderAlmostFinished();
      case "login":
        return renderLogin();
      default:
        return renderMetaPage();
    }
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      PaperProps={
        !props.mobile
          ? { sx: { width: "60vw", height: "auto", top: "2px", pb: "30px" } }
          : {
              sx: {
                top: "37px",
                width: "100%",
                height: "calc(100% - 73px)",
                p: "30px",
              },
            }
      }
      // PaperProps={{ sx: { position: "fixed", top: 10, left: 100, p: '100px' } }}
      open={open}
      fullScreen={true}
      // fullWidth={true}
    >
      {dispatchRender()}
    </BootstrapDialog>
  );
}
