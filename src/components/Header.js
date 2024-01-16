import { RingLoader } from "react-spinners";

function Header() {
  return (
    <header className="app-header">
      <RingLoader color="#FF9843" size={100} />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
