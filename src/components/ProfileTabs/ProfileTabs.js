import React, { useState } from "react";
import { TabContainer, Tabs, TabsItem, Buttons } from "./styled";
import WalletIcon from "../../icons/walletbox.svg";
import SettingsIcon from "../../icons/settingsbox.svg";

function ProfileTabs({ setSection }) {
  const [active, setActive] = useState(1);
  return (
    <TabContainer>
      <Tabs>
        <TabsItem
          onClick={() => {
            setActive(1);
            setSection(1);
          }}
          active={active === 1 ? true : false}
        >
          Blog
        </TabsItem>
        <TabsItem
          onClick={() => {
            setActive(2);
            setSection(2);
          }}
          active={active === 2 ? true : false}
        >
          Post
        </TabsItem>
        <TabsItem
          onClick={() => {
            setActive(3);
            setSection(3);
          }}
          active={active === 3 ? true : false}
        >
          Replies
        </TabsItem>
        <TabsItem
          onClick={() => {
            setActive(4);
            setSection(4);
          }}
          active={active === 4 ? true : false}
        >
          Communities
        </TabsItem>
        <TabsItem
          onClick={() => {
            setActive(5);
            setSection(5);
          }}
          active={active === 5 ? true : false}
        >
          Notifications
        </TabsItem>
        <TabsItem
          onClick={() => {
            setActive(6);
            setSection(6);
          }}
          active={active === 6 ? true : false}
        >
          Activies
        </TabsItem>
      </Tabs>
      <Buttons>
        <button>
          <img src={WalletIcon} alt="Calendar Icon" />
          <span>Wallet</span>
        </button>
        <button>
          <img src={SettingsIcon} alt="Calendar Icon" />
          <span>Setting</span>
        </button>
      </Buttons>
    </TabContainer>
  );
}

export default ProfileTabs;
