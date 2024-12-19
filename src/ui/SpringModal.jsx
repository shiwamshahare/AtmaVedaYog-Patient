import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import LoginSignUpForm from "../components/Forms/LoginSignUpForm";
import BookAppointment from "../components/Forms/Appontment/BookAppointment";
import DirectorsProfile from "../components/About/Directors/Profile/DirectorsProfile";
import PropTypes from "prop-types";

const SpringModal = ({ isOpen, setIsOpen, type }) => {
  // Function to render appropriate form based on the type
  const renderForm = () => {
    switch (type) {
      case "login":
        return <LoginSignUpForm setIsOpen={setIsOpen} />;
      case "appointment":
        return <BookAppointment setIsOpen={setIsOpen} />;
      case "directors":
        return <DirectorsProfile setIsOpen={setIsOpen} />;
      default:
        return <div>Form not found</div>;
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)} // Close modal when clicking outside
          className="bg-slate-900/20 backdrop-blur fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer lg:p-10"
          aria-labelledby="modal-title" // Accessibility improvement
          role="dialog"
          aria-hidden={!isOpen}
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            className="bg-white lg:p-6 rounded-lg w-11/12 max-w-max shadow-xl cursor-default relative overflow-hidden border border-zinc-500"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-0 rounded-bl-xl p-2 text-xl text-white bg-zinc-500 z-[999]"
              aria-label="Close Modal" // Accessibility for close button
            >
              <FaXmark />
            </button>
            {type && <div className="relative z-10">{renderForm()}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.getElementById("modal-root"));
};

// Prop validation
SpringModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["login", "appointment", "directors"]).isRequired,
};

export default SpringModal;
