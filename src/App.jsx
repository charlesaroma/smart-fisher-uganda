// App: Main Application
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Hero from "./pages/1.Home/hero";
import System from "./pages/2.System/system";
import Solutions from "./pages/3.Solutions/solutions";
import About from "./pages/4.About/about";
import Partners from "./pages/5.Partners/partners";
import Contact from "./pages/6.Contact/contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* App: Navigation */}
        <Navbar />

        {/* App: Main Content */}
        <main>
          <Hero />
          <System />
          <Solutions />
          <About />
          <Partners />
          <Contact />
        </main>

        {/* App: Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
