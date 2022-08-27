import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpIcon from "@mui/icons-material/Help";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          alt="test image"
          src="https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/293605373_5482333775122038_3053823897547301568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKlDykIp1pjvdNIcZvIBbJrWrpzDk70DStaunMOTvQNPUDFtcy6l5oJkPx7o0DemCdKqKmpytKVo6oEe5V1jHY&_nc_ohc=epmd1-3dvJwAX9A7X4b&tn=qDiW-WIA7rYp5rcl&_nc_ht=scontent.fcrk2-2.fna&oh=00_AT_yxF6iODC3zoaIsSVYFW1VHm0cRTDz8UPe-K1rYsnslw&oe=630EFA78"
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search in +Ultra's Channel" />
      </HeaderSearch>

      <HeaderRight>
        <HelpIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin: 5px 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #412f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
