"use client";
import { useState } from "react";
import EducationFormDetails from "./EducationFormDetails";
import PersonalFormDetails from "./PersonalFormDetails";
import SkillsFormDetails from "./SkillsFormDetails";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    college: "",
    degree: "",
    year: "",
    skills: "",
    experience: "",
  });

  const validStep = () => {
    if (currentStep === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.dob
      ) {
        alert("Please fill the required fields");
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email id!");
        return false;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        alert("Please enter a valid phone number!");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!formData.college || !formData.degree || !formData.year) {
        alert("Please fill all the required fields");
        return false;
      }

      const yearRegex = /^(19|20)\d{2}$/;
      if (!yearRegex.test(formData.year)) {
        alert("Please enter a year!");
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validStep()) return false;
    alert("FormData Submitted Successfully!");
    console.log(formData);

    try {
      const API = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API}/api/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error:" + data.message);
      }
    } catch (error) {
      console.log("Api Error:", error);
      alert("Server Error!");
    }
  };

  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Educational Details" },
    { number: 3, title: "Skills Details" },
  ];

  const nextStep = () => {
    if (validStep()) {
      if (currentStep < 3){
        setCurrentStep(currentStep + 1);
      } 
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const goToStep = (stepNumber) => {
    if(stepNumber < currentStep){
      setCurrentStep(stepNumber);
      return;
    }

    if(stepNumber > currentStep){
      if(validStep()){
        setCurrentStep(stepNumber);
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-10 text-white">
          Create New Account
        </h1>
        <div className="flex bg-gradient-to-r from-blue-50 to-purple-50">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => goToStep(step.number)}
              className={`flex-1 flex items-center justify-center gap-3 py-6 px-4 transition-all duration-300 ${
                currentStep === step.number
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg"
                  : "text-gray-400 hover:bg-white/50"
              } ${index === 0 ? "rounded-tr-3xl" : ""} ${
                index === steps.length - 1 ? "rounded-tl-3xl" : ""
              }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold ${
                  currentStep === step.number
                    ? "bg-white text-blue-500"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.number}
              </span>
              <span className="font-medium hidden sm:inline">{step.title}</span>
            </button>
          ))}
        </div>

        <div className="bg-white w-5xl shadow-lg p-8">
          <div className="border border-none p-6 w-full h-96 overflow-y-auto">
            {currentStep === 1 && (
              <PersonalFormDetails
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {currentStep === 2 && (
              <EducationFormDetails
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {currentStep === 3 && (
              <SkillsFormDetails
                formData={formData}
                handleChange={handleChange}
              />
            )}
          </div>
          <div className="flex items-center justify-between mt-5">
            {currentStep === 1 && (
              <div className="flex items-center ">
                <button
                  type="button"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-600 text-sm font-medium cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
                  Back to Login
                </button>
              </div>
            )}
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
                Back
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center px-6 py-2.5 bg-green-400 hover:bg-green-600 font-semibold text-white rounded-lg cursor-pointer"
              >
                Next
                <ChevronRight className="w-4 h-4 stroke-[1.5]" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center px-6 py-2.5 bg-green-400 hover:bg-green-600 font-semibold text-white rounded-lg cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default MultiForm;
