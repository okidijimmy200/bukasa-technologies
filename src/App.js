import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Objectives from "./components/Objectives";
import CompanyDetails from "./components/CompanyDetails";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import CourseSection from "./components/CourseSection";

function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <Objectives />
      <CompanyDetails />
      <About />
      <Services />
      <CourseSection />
      <Footer />
    </div>
  );
}

export default App;
