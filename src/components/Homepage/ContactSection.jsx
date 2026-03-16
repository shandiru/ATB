import React, { useState } from "react";
import { FiSend, FiPhone, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {

  const businessHours = [
    { day: "Mon - Fri", time: "7 AM – 6 PM" },
    { day: "Saturday", time: "7:30 AM – 3 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "447934201943";
    const text = `*New Website Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.number}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    try {
      window.open(whatsappURL, "_blank");
      setStatusMessage("Opening WhatsApp...");
      setStatusType("success");
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      setStatusMessage("Failed to open WhatsApp. Please try again.");
      setStatusType("error");
    }

    setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 5000);
  };

  return (
    <section id="contact" className="bg-white scroll-m-10 text-[#0F216B] px-6 md:px-12 lg:px-24 py-20 border-t border-[#1E3A8A]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div>
            <p className="uppercase text-[#969695] text-sm tracking-widest mb-2">
              // Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[#1E3A8A]">
              Get in Touch
            </h2>

            <p className="text-[#0F216B]/80 max-w-md leading-relaxed">
              No delays, no vague replies — we respond within 24 hours to
              schedule your personalised discovery call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

            {/* Email */}
            <div className="border border-[#1E3A8A]/20 rounded-2xl p-1">
              <div className="h-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 rounded-2xl p-5 hover:border-[#969695] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#969695] rounded-lg text-[#0F216B]">
                    <FiSend size={18} />
                  </div>

                  <h3 className="font-semibold text-[#1E3A8A]">
                    Chat with us
                  </h3>
                </div>

                <a
                  href="mailto:atbmotorengineers@gmail.com"
                  className="text-[#0F216B] hover:text-[#1E3A8A] text-sm truncate"
                >
                  atbmotorengineers@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="border border-[#1E3A8A]/20 rounded-2xl p-1">
              <div className="h-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 rounded-2xl p-5 hover:border-[#969695] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#969695] rounded-lg text-[#0F216B]">
                    <FiPhone size={18} />
                  </div>

                  <h3 className="font-semibold text-[#1E3A8A]">
                    Call Us
                  </h3>
                </div>

                <a
                  href="tel:+441332224229"
                  className="text-[#0F216B] hover:text-[#1E3A8A] text-sm"
                >
                  01332 224229
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="sm:col-span-2 border border-[#1E3A8A]/20 rounded-2xl p-1">
              <div className="bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 rounded-2xl p-5 hover:border-[#969695] transition-all">

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#969695] rounded-lg text-[#0F216B]">
                    <FiClock size={18} />
                  </div>

                  <h3 className="font-semibold text-[#1E3A8A]">
                    Opening Hours
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {businessHours.map((item, idx) => (
                    <div key={idx} className="flex flex-col border-l border-[#1E3A8A]/30 pl-3">

                      <span className="text-[#0F216B]/70 text-[10px] uppercase tracking-wider font-bold">
                        {item.day}
                      </span>

                      <span className={`font-medium ${item.time === "Closed" ? "text-red-600" : "text-[#1E3A8A]"}`}>
                        {item.time}
                      </span>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="border border-[#1E3A8A]/20 rounded-2xl p-2 shadow-[0_0_25px_rgba(30,58,138,0.08)]">
          <div className="bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 rounded-2xl p-8">

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div>
                <label className="block text-xs text-[#1E3A8A] mb-2 font-bold tracking-tight">
                  NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-white border border-[#1E3A8A]/30 rounded-lg px-4 py-3 text-sm text-[#0F216B] focus:outline-none focus:border-[#969695]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#1E3A8A] mb-2 font-bold tracking-tight">
                  EMAIL
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white border border-[#1E3A8A]/30 rounded-lg px-4 py-3 text-sm text-[#0F216B] focus:outline-none focus:border-[#969695]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#1E3A8A] mb-2 font-bold tracking-tight">
                  NUMBER
                </label>

                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  required
                  className="w-full bg-white border border-[#1E3A8A]/30 rounded-lg px-4 py-3 text-sm text-[#0F216B] focus:outline-none focus:border-[#969695]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#1E3A8A] mb-2 font-bold tracking-tight">
                  MESSAGE
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  required
                  className="w-full bg-white border border-[#1E3A8A]/30 rounded-lg px-4 py-3 text-sm text-[#0F216B] focus:outline-none focus:border-[#969695]"
                ></textarea>
              </div>

              {statusMessage && (
                <p className={`text-sm font-medium ${statusType === "success" ? "text-green-600" : "text-red-600"} text-center`}>
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#1E3A8A] hover:bg-[#0F216B] text-white py-3 rounded-lg transition text-sm font-medium flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18} />
                Send via WhatsApp
              </button>

              <p className="text-[10px] text-center text-[#0F216B]/70 leading-tight px-4">
                By submitting this form, you agree to us processing your details to respond to your enquiry in line with our Privacy Policy.
              </p>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}