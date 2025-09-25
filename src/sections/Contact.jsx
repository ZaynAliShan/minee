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
          to_name: "HamnaJalil",
          from_email: formData.email,
          to_email: "HamnaJalil@gmail.com",
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
    <section className="relative flex items-center c-space"       style={{ paddingTop: "100px", paddingBottom: "100px" }} id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-white">
            Whether you need to streamline workflows, manage complex projects, 
            or bring clarity and structure to your team’s goals, I’m here to help.
          </p>
        </div>

      {/* Social Links Section */}
      <div className="flex flex-col gap-4 w-full">
        {/* Email */}
        <a
          href="mailto:HamnaJalil@gmail.com"
          className="flex items-center gap-3 underline"
        >
          <img src="/assets/logos/gmail.png" alt="Email" className="w-6 h-6" />
          <span className="text-white">hamnaJalil@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hamnabukhari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 underline"
        >
          <img src="/assets/logos/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          <span className="text-white">linkedin.com/in/hamnabukhari</span>
        </a>

          {/* Resume Download */}
          <a
            href="/assets/resume/HamnaJalilResume.pdf"
            download="HamnaJalil_Resume.pdf"
            className="flex items-center gap-3 underline"
          >
            <img src="/assets/logos/download.png" alt="Download Resume" className="w-6 h-6" />
            <span className="text-white">Download Resume</span>
          </a>

        {/* GitHub (example extra) */}
        {/* <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:underline"
        >
          <img src="/assets/logos/github.png" alt="GitHub" className="w-6 h-6" />
          <span className="text-white">github.com/yourprofile</span>
        </a> */}
      </div>
      </div>
    </section>
  );
};

export default Contact;
