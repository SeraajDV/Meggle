import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import logo from "../assets/logo.png";
import Search from '../components/Search';

function Home() {
  return (
    <div className="Home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/mail">Mail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img src={logo} alt="Meggle" />
        <div className="home__inputContainer">
            <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
