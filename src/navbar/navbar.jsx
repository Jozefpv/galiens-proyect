import React from 'react'
import "./navbar.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import { CgPill } from "react-icons/cg";
import { Link } from 'react-scroll'

function Navbar() {

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <ul className="navbarItemsContainer">
            <li className="navbarItems"><Link to="/" spy={true} smooth={true} offset={-100} duration={500}>PLAY</Link></li>
            <li className="navbarItems"><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>ABOUT</Link></li>
            <li className="navbarItemsRanking"><Link to="ranking" spy={true} smooth={true} offset={-100} duration={500}>LEADERBOARD</Link></li>
            <li className="navbarItems"><Link to="BTCNOMICS" spy={true} smooth={true} offset={-100} duration={500}>BTCNOMICS</Link></li>
          </ul>
        </div>
        <div className="rrssContainer">
          <button className="rrssButton" onClick={() => window.open("https://twitter.com/loading26749", "_blank")}>
            <FaXTwitter style={{ color: "black", fontSize: "25px" }} />
          </button>
          <button className="rrssButton" onClick={() => window.open("https://t.me/+s2-6v3DXbjk4NTY0", "_blank")}>
            <FaPaperPlane style={{ color: "black", fontSize: "25px" }} />
          </button>
          <button className="rrssButton" onClick={() => window.open("", "_blank")}>
            <CgPill style={{ color: "black", fontSize: "25px" }} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
