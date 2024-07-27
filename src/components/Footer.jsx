import "../styles/components/Footer.css";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterExport = () => {
  return (
    <Footer container>
      <FooterCopyright href="#" by=" MicroMaze™" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="#">
          <BsFacebook />
        </FooterLink>
        <FooterLink href="#">
          <BsGithub />
        </FooterLink>
        <FooterLink href="#">
          <BsInstagram />
        </FooterLink>
        <FooterLink href="#">
          <BsTwitter />
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default FooterExport;
