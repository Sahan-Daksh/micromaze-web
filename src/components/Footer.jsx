import "../styles/components/Footer.css";
import {
  Footer,
  FooterCopyright,
  FooterLinkGroup,
  FooterLink,
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
    <Footer container className="footer bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Copyright Section */}
        <FooterCopyright
          href="#"
          by="MicroMaze™"
          year={2024}
          className="mb-4 text-center"
        />

        {/* Social Media Icons Section */}
        <FooterLinkGroup className="flex space-x-6">
          <FooterLink href="#" className="social-icon">
            <BsFacebook size={24} />
          </FooterLink>
          <FooterLink href="#" className="social-icon">
            <BsGithub size={24} />
          </FooterLink>
          <FooterLink href="#" className="social-icon">
            <BsInstagram size={24} />
          </FooterLink>
          <FooterLink href="#" className="social-icon">
            <BsTwitter size={24} />
          </FooterLink>
          <FooterLink href="#" className="social-icon">
            <BsDribbble size={24} />
          </FooterLink>
        </FooterLinkGroup>
      </div>
    </Footer>
  );
};

export default FooterExport;
