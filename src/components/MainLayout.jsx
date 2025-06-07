import "../styles/MainLayout.css";
import background from "../assets/background.jpg";
function MainLayout({ children }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="main-layout"
      >
        {children}
      </div>
    </>
  );
}
export default MainLayout;
