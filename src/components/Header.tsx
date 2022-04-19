import logo from "@/assets/images/logo_lg.png";
const Header: React.FC = () => {
  return (
    <header className="flex h-12 justify-between px-4 py-2">
      <img src={logo} alt="" />
      <div>userName</div>
    </header>
  );
};

export default Header;
