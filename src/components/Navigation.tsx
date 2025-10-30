import StaggeredMenu from "./sections/stagger-header-simple";
import { logo } from "../data";
import type { MenuItem, SocialItem } from "../data";

interface NavigationProps {
  menuItems: MenuItem[];
  socialItems: SocialItem[];
  isMobile?: boolean;
}

const Navigation = ({ menuItems, socialItems }: NavigationProps) => {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={["#472913", "#472913", "#ba9a32"]}
      logoUrl={logo}
      logoText="НАЙР энтертайнмент"
      accentColor="#ba9a32"
      isFixed={true}
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  );
};

export default Navigation;