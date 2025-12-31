import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Ali",
          from_email: formData.email,
          to_email: "AliSanatiDev@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section className="relative c-space section-spacing px-4 sm:px-10" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <h2 className="text-heading">Contact Me</h2>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
        {/* Social Icons Section - Top on mobile, Left on desktop */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        <a href="mailto:imabhishek40@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:-rotate-35 group-hover:skew-y-20">
            <span className="absolute inset-0 border-4 border-red-500 rounded-md opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="absolute inset-0 border-4 border-red-500 rounded-md translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-40 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <span className="absolute inset-0 border-4 border-red-500 rounded-md translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <span className="absolute inset-0 border-4 border-red-500 rounded-md translate-x-3 -translate-y-3 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
            <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-red-500">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=918009615096" target="_blank" rel="noopener noreferrer" className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:-rotate-35 group-hover:skew-y-20">
            <span className="absolute inset-0 border-4 border-green-500 rounded-md opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="absolute inset-0 border-4 border-green-500 rounded-md translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-40 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <span className="absolute inset-0 border-4 border-green-500 rounded-md translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <span className="absolute inset-0 border-4 border-green-500 rounded-md translate-x-3 -translate-y-3 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
            <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-green-500">
              <i className="fab fa-whatsapp"></i>
            </span>
          </div>
        </a>
        <a href="https://www.instagram.com/imabhishek40/" target="_blank" rel="noopener noreferrer" className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:-rotate-35 group-hover:skew-y-20">
            <span className="absolute inset-0 border-4 border-pink-500 rounded-md opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="absolute inset-0 border-4 border-pink-500 rounded-md translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-40 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <span className="absolute inset-0 border-4 border-pink-500 rounded-md translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <span className="absolute inset-0 border-4 border-pink-500 rounded-md translate-x-3 -translate-y-3 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
            <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-pink-500">
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </a>
        <a href="https://t.me/aknocodes" target="_blank" rel="noopener noreferrer" className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:-rotate-35 group-hover:skew-y-20">
            <span className="absolute inset-0 border-4 border-sky-500 rounded-md opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="absolute inset-0 border-4 border-sky-500 rounded-md translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-40 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <span className="absolute inset-0 border-4 border-sky-500 rounded-md translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <span className="absolute inset-0 border-4 border-sky-500 rounded-md translate-x-3 -translate-y-3 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
            <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-sky-500">
              <i className="fab fa-telegram"></i>
            </span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-nigam/" target="_blank" rel="noopener noreferrer" className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:-rotate-35 group-hover:skew-y-20">
            <span className="absolute inset-0 border-4 border-blue-600 rounded-md opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="absolute inset-0 border-4 border-blue-600 rounded-md translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-40 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <span className="absolute inset-0 border-4 border-blue-600 rounded-md translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <span className="absolute inset-0 border-4 border-blue-600 rounded-md translate-x-3 -translate-y-3 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
            <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </div>
        </a>
        <a href="https://github.com/akncodes" target="_blank" rel="noopener noreferrer" className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:-rotate-35 group-hover:skew-y-20">
            <span className="absolute inset-0 border-4 border-white rounded-md opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="absolute inset-0 border-4 border-white rounded-md translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-40 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <span className="absolute inset-0 border-4 border-white rounded-md translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <span className="absolute inset-0 border-4 border-white rounded-md translate-x-3 -translate-y-3 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
            <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-white">
              <i className="fab fa-github"></i>
            </span>
          </div>
        </a>
          </div>
        </div>

        {/* Form Section - Bottom on mobile, Right on desktop */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <div className="flex flex-col items-center justify-center w-full p-4 sm:p-5 border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-4 sm:gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
