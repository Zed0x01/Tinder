import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className={"header"}>
      <IconButton>
        <PersonIcon fontSize={"large"} className={"header__icon"} />
      </IconButton>
      <img
          alt={"Tinder Logo"}
          className={"header__logo"}
          src={"https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"}
      />
      <IconButton>
        <ForumIcon fontSize={"large"} className={"header__icon"} />
      </IconButton>
    </div>
  );
};

export default Header;
