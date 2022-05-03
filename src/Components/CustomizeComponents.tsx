import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const LoginBtn = styled((props: any) => <button {...props} />)`
  background: #cbfa34;
  border-radius: 20px;
  padding: 7px 43px;
  color: #403e3f;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  border: none;
`;

export const UnderlinedText = styled((props: any) => <div {...props} />)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  transform-style: preserve-3d;
  height: 28px;
  position: relative;
  color: white;
  padding-right: 26px;

  &::before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: -1px;
    background: linear-gradient(90deg, #cbfa34 0%, #66acd4 100%);
    border-radius: 6px;
    transform: translateZ(-1px);
    width: 100%;
  }
`;

export const TextNormal = styled((props: any) => <div {...props} />)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #ffffff;
`;

export const Bold = styled((props: any) => <div {...props} />)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const Line = styled((props: any) => <div {...props} />)`
  background: linear-gradient(90deg, #c20c71 0%, #66acd4 50%, #cbfa34 100%);
  height: 2px;
  width: 100%;
  margin-top: 85px;
  margin-bottom: 18px;
`;

export const H = styled((props: any) => <div {...props} />)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.mode === "mobile" ? "24px" : "36px")};
  line-height: ${(props) => (props.mode === "mobile" ? "29px" : "44px")};
  color: white;
`;

export const CustomButton = styled((props: any) => <button {...props} />)`
  background: #cbfa34;
  border-radius: 12px;
  padding: 7px 43px;
  color: #403e3f;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  border: none;
  display: flex;
  align-items: center;
`;

export const NftButton = styled((props: any) => <button {...props} />)`
  background: white;
  border-radius: 12px;
  padding: 7px 43px;
  color: #6b43cf;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  border: none;
`;

export const WatchButton = styled((props: any) => <button {...props} />)`
  background: rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  padding: 9px 43px;
  color: white;
  font-family: Montserrat;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  border: none;
  height: auto;
`;
export const FilterBtn = styled((props: any) => <button {...props} />)`
  background: #cbfa34;
  border-radius: 4px;
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
  color: #403e3f;
`;

export const NewestBtn = styled((props: any) => <button {...props} />)`
  background: rgba(198, 198, 198, 0.21);
  border-radius: 4px;
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
`;

export const CustomBtn = styled((props: any) => <button {...props} />)`
  background: ${(props) => (props.bgcolor ? props.bgcolor : "#cbfa34")};
  border-radius: ${(props) => (props.radius ? props.radius : "4px")};
  /* padding: 9px 43px; */
  padding-left: ${(props) => {
    return `${
      props.mobile ? (props.pl * 100) / 390 : (props.pl * 100) / 1440
    }vw`;
  }};
  padding-right: ${(props) => {
    return `${
      props.mobile ? (props.pr * 100) / 390 : (props.pr * 100) / 1440
    }vw`;
  }};
  padding-top: ${(props) => {
    return `${
      props.mobile ? (props.pt * 100) / 390 : (props.pt * 100) / 1440
    }vw`;
  }};
  padding-bottom: ${(props) => {
    return `${
      props.mobile ? (props.pb * 100) / 390 : (props.pb * 100) / 1440
    }vw`;
  }};
  color: ${(props) => (props.color ? props.color : "white")};
  font-family: Montserrat;
  font-style: normal;
  font-weight: ${(props) =>
    props.bold === true
      ? "bold"
      : props.fontWeight
      ? props.fontWeight
      : "normal"};
  font-size: ${(props) => {
    return `${
      props.mobile ? (props.fsize * 100) / 390 : (props.fsize * 100) / 1440
    }vw`;
  }};
  line-height: 17px;
  border: none;
  height: auto;
  display: flex;
  align-items: center;
  margin: ${(props) => {
    return `${props.mobile ? (props.m * 100) / 390 : (props.m * 100) / 1440}vw`;
  }};
  margin-left: ${(props) => {
    return `${
      props.mobile ? (props.ml * 100) / 390 : (props.ml * 100) / 1440
    }vw`;
  }};
  margin-right: ${(props) => {
    return `${
      props.mobile ? (props.mr * 100) / 390 : (props.mr * 100) / 1440
    }vw`;
  }};
  margin-top: ${(props) => {
    return `${
      props.mobile ? (props.mt * 100) / 390 : (props.mt * 100) / 1440
    }vw`;
  }};
  margin-bottom: ${(props) => {
    return `${
      props.mobile ? (props.mb * 100) / 390 : (props.mb * 100) / 1440
    }vw`;
  }};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export const Cbox = styled((props: any) => <Box {...props} />)`
  color: ${(props) => (props.color ? props.color : "white")};
  font-family: Montserrat;
  font-style: normal;
  font-weight: ${(props) => (props.bold === true ? "bold" : "normal")};
  font-size: ${(props) => {
    return `${
      props.mobile ? (props.fsize * 100) / 390 : (props.fsize * 100) / 1440
    }vw`;
  }};
  display: flex;
  width: ${(props) => {
    return `${
      props.mobile ? (props.wc * 100) / 390 : (props.wc * 100) / 1440
    }vw`;
  }};
  height: ${(props) => {
    return `${
      props.mobile ? (props.hc * 100) / 390 : (props.hc * 100) / 1440
    }vw`;
  }};
  left: ${(props) => {
    return `${
      props.mobile ? (props.lc * 100) / 390 : (props.lc * 100) / 1440
    }vw`;
  }};
  right: ${(props) => {
    return `${
      props.mobile ? (props.rc * 100) / 390 : (props.rc * 100) / 1440
    }vw`;
  }};
  top: ${(props) => {
    return `${
      props.mobile ? (props.tc * 100) / 390 : (props.tc * 100) / 1440
    }vw`;
  }};
  bottom: ${(props) => {
    return `${
      props.mobile ? (props.bc * 100) / 390 : (props.bc * 100) / 1440
    }vw`;
  }};
  padding: ${(props) => {
    return `${
      props.mobile ? (props.pa * 100) / 390 : (props.pa * 100) / 1440
    }vw`;
  }};
  padding-top: ${(props) => {
    return `${
      props.mobile ? (props.pat * 100) / 390 : (props.pat * 100) / 1440
    }vw`;
  }};
  padding-bottom: ${(props) => {
    return `${
      props.mobile ? (props.pab * 100) / 390 : (props.pab * 100) / 1440
    }vw`;
  }};
  padding-left: ${(props) => {
    return `${
      props.mobile ? (props.pal * 100) / 390 : (props.pal * 100) / 1440
    }vw`;
  }};
  padding-right: ${(props) => {
    return `${
      props.mobile ? (props.par * 100) / 390 : (props.par * 100) / 1440
    }vw`;
  }};
  margin: ${(props) => {
    return `${
      props.mobile ? (props.cm * 100) / 390 : (props.cm * 100) / 1440
    }vw`;
  }};
  margin-left: ${(props) => {
    return `${
      props.mobile ? (props.cml * 100) / 390 : (props.cml * 100) / 1440
    }vw`;
  }};
  margin-right: ${(props) => {
    return `${
      props.mobile ? (props.cmr * 100) / 390 : (props.cmr * 100) / 1440
    }vw`;
  }};
  margin-top: ${(props) => {
    return `${
      props.mobile ? (props.cmt * 100) / 390 : (props.cmt * 100) / 1440
    }vw`;
  }};
  margin-bottom: ${(props) => {
    return `${
      props.mobile ? (props.cmb * 100) / 390 : (props.cmb * 100) / 1440
    }vw`;
  }};
`;

export function CustomField(props: {
  label: string;
  mobile?: boolean;
  style?: any;
  className?: string;
  labelColor?: string;
}) {
  return (
    <Cbox
      mb={props.mobile ? "40px" : "24px"}
      width={!props.mobile ? "auto" : "100%"}
      position="relative"
      borderRadius="12px"
      border="solid 2px white"
      style={props.style}
    >
      <input
        className={
          props.className
            ? props.className
            : !props.mobile
            ? "web_field"
            : "mobile_field"
        }
        style={
          !props.mobile
            ? { width: "26.9vw", padding: "0.48vw 0.96vw" }
            : { width: "100%", padding: "1.8vw 3.7vw" }
        }
      />
      <Cbox
        p="4px 10px"
        position="absolute"
        top="-50%"
        left="20px"
        bgcolor={props.labelColor ? props.labelColor : "#1B1B1B"}
      >
        {props.label}
      </Cbox>
    </Cbox>
  );
}
