import React, { useState } from "react";
import { Nav, Brand, Menu, Body, Links, Info } from "../styles/navbar.stc";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Nav>
      <div className="wrapper row">
        <Brand href="/">Logo</Brand>
        <Menu onClick={() => setShow(!show)}>
          <div className="line"></div>
          <div className="line"></div>
        </Menu>
      </div>
      <Body show={show}>
        <Links>
          <ul>
            <li>
              01. <a href="/">Home</a>
            </li>
            <li>
              02. <a href="/contact">Contact</a>
            </li>
            <li>
              03. <a href="/about">About</a>
            </li>
            <li>
              04. <a href="/support">Support</a>
            </li>
            <li>
              05. <a href="/work">Work</a>
            </li>
            <li>
              06. <a href="/meet">Meet</a>
            </li>
          </ul>
        </Links>
        <Info className='row'>
          <p>
            Author - Md. Jamilur Rahman <br /> @github - Jamilur-rahman-470
          </p>
          <p>
              15 August 2020
          </p>
          <p>2:00 PM</p>
        </Info>
      </Body>
    </Nav>
  );
};

export default Navbar;
