import logo from "@/assets/images/logo.png";
const Header: React.FC = () => {
  return (
    <header className="flex justify-between">
      <img src={logo} alt="" />
      <div>userName</div>
    </header>
  );
};

export default Header;
