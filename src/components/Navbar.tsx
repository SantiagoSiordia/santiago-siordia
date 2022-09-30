import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import i18n from "../i18n";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const { t } = useTranslation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  type AvailableLanguages = "en" | "es" | "fr" | "de";

  const [language, setLanguage] = useState<AvailableLanguages>("en");

  const languageDict: Record<AvailableLanguages, string> = {
    en: "English",
    fr: "Française",
    es: "Español",
    de: "Deutsch",
  };

  const handleOnChangeLanguage = (language: AvailableLanguages) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            // @ts-expect-error
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.resume")}
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item
              className="fork-btn"
              style={{
                alignSelf: "center",
              }}
            >
              <Button
                href="https://github.com/SantiagoSiordia"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
          <Dropdown
            className="mx-4"
            style={{
              marginTop: "10px",
            }}
          >
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {languageDict[language]}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {language !== "en" && (
                <Dropdown.Item onClick={() => handleOnChangeLanguage("en")}>
                  English
                </Dropdown.Item>
              )}
              {language !== "es" && (
                <Dropdown.Item onClick={() => handleOnChangeLanguage("es")}>
                  Español
                </Dropdown.Item>
              )}
              {language !== "de" && (
                <Dropdown.Item onClick={() => handleOnChangeLanguage("de")}>
                  Deutsch
                </Dropdown.Item>
              )}
              {language !== "fr" && (
                <Dropdown.Item onClick={() => handleOnChangeLanguage("fr")}>
                  Française
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
