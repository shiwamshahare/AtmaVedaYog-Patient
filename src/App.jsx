import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Patient_Dashboard/Sidebar/Sidebar";
import Dashboard from "./components/Patient_Dashboard/Dashboard/Dashboard";
import UserDashboard from "./components/Patient_Dashboard/UserDashboard";
import Profile from "./components/Patient_Dashboard/Profile/Profile";
import Bookings from "./components/Patient_Dashboard/Bookings/Bookings";
import Consents from "./components/Patient_Dashboard/Consents/Consents";
import Diets from "./components/Patient_Dashboard/Diets/Diets";
import Notifications from "./components/Patient_Dashboard/Notifications/Notifications";
import Offers from "./components/Patient_Dashboard/Offers/Offers";
import Prescriptions from "./components/Patient_Dashboard/Prescriptions/Prescriptions";
import Tests from "./components/Patient_Dashboard/Tests/Tests";
import Uploads from "./components/Patient_Dashboard/Uploads/Uploads";
import Yoga from "./components/Patient_Dashboard/Yoga/Yoga";
import Bills from "./components/Patient_Dashboard/Bills/Bills";
import Appointments from "./components/Patient_Dashboard/Appointments/Appointments";

// Lazy load components
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Servicess/Services"));
const Consultation = lazy(
  () => import("./components/Servicess/Consultation/Consultation")
);
const Packages = lazy(
  () => import("./components/Servicess/Packagess/Packages")
);
const Diagnostic_Tests = lazy(
  () => import("./components/Servicess/Diagnostic_Tests/Diagnostic_Tests")
);
const SpecialityTreatment = lazy(
  () =>
    import("./components/Servicess/Speciality_Treatment/SpecialityTreatment")
);
const Wellness_n_Yoga = lazy(
  () => import("./components/Servicess/Wellness_n_Yoga/Wellness_n_Yoga")
);
const BodyTransformation = lazy(
  () => import("./components/Servicess/BodyTransformation/BodyTransformation")
);
const Courses = lazy(() => import("./components/Courses/Courses"));
const KidsCare = lazy(() => import("./components/Servicess/KidsCare/KidsCare"));
const CriticalCare = lazy(
  () => import("./components/Servicess/CriticalCare/CriticalCare")
);
const GeriatricTreatment = lazy(
  () => import("./components/Servicess/GeriatricTreatment/GeriatricTreatment")
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* services */}
          <Route path="/services" element={<Services />}>
            <Route path="consultation" element={<Consultation />} />
            <Route path="packages" element={<Packages />} />
            <Route
              path="geriatric-treatment"
              element={<GeriatricTreatment />}
            />
            <Route path="kids-care" element={<KidsCare />} />
            <Route path="critical-care" element={<CriticalCare />} />
            <Route
              path="speciality-treatments"
              element={<SpecialityTreatment />}
            />
            <Route path="diagnostic-tests" element={<Diagnostic_Tests />} />
            <Route path="wellness-yoga" element={<Wellness_n_Yoga />} />
            <Route
              path="body-transformations"
              element={<BodyTransformation />}
            />
          </Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/user/:username/" element={<UserDashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="prescription" element={<Prescriptions />} />
            <Route path="tests" element={<Tests />} />
            <Route path="yoga" element={<Yoga />} />
            <Route path="diets" element={<Diets />} />
            <Route path="bills" element={<Bills />} />
            <Route path="uploads" element={<Uploads />} />
            <Route path="consents" element={<Consents />} />
            <Route path="offers" element={<Offers />} />
          </Route>
        </Routes>
      </Suspense>

      {/* <Footer /> */}
    </>
  );
};

export default App;
