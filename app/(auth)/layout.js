import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}