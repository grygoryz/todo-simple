import React from "react";
import c from "./Header.module.scss"
import {ReactComponent as SettingsIcon} from "../../assets/icons/settings.svg"
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";

const Header = ({openEditWindow}) => {
  return (
      <div className={c.container}>
          <div><PlusIcon onClick={openEditWindow} className={c.btn}/></div>
          <div><SettingsIcon className={c.btn}/></div>
      </div>
  )
};

export default Header