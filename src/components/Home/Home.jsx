import React, { Suspense, lazy } from "react";

// Lazy load components
const Landing = lazy(() => import("./Landing/Landing"));
const CoursesShowcase = lazy(() => import("../Courses/CoursesShowcase"));
const Speciality_Treatment = lazy(
  () => import("../Servicess/Speciality_Treatment/SpecialityTreatmentShowcase")
);
const PackagesShowcase = lazy(
  () => import("../Servicess/Packagess/PackagesShowcase")
);
const Offers = lazy(() => import("../Offers/Offers"));

const Home = () => {
  return (
    <main>
      {/* Suspense with a fallback loader */}
      <Suspense fallback={<div className="loader">Loading Landing...</div>}>
        <Landing />
      </Suspense>

      <Suspense
        fallback={<div className="loader">Loading Speciality Treatment...</div>}
      >
        <Speciality_Treatment />
      </Suspense>

      <Suspense
        fallback={<div className="loader">Loading Packages Showcase...</div>}
      >
        <PackagesShowcase />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Offers...</div>}>
        <Offers />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Courses...</div>}>
        <CoursesShowcase />
      </Suspense>
    </main>
  );
};

export default Home;
