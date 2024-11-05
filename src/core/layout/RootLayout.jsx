import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        {children}
      </div>
      <Footer />
    </div>
  );
}
