import React from "react";

import { Router } from "@root/routes";
import BackButton from "@components/Buttons/BackButton";
import "./Header.scss";

interface HeaderProps {
  backLink?: string;
  title?: string;
}

const Header = ({ backLink, title }: HeaderProps) => {
  return (
    <header className="header">
      {backLink && (
        <BackButton
          onClick={() => Router.pushRoute(backLink)}
          className="header__back-button"
        />
      )}
      {title ? (
        <h4 className="header__title header__title-text">
          {title}
        </h4>
      ) : (
        <img
          alt="nav bar logo"
          className="header__title header__logo"
          src="../../static/navbar-logo.png"
        />
      )}
    </header>
  );
};

export default Header;
