"use client";
import { useState } from "react";
import EducationFormDetails from "./EducationFormDetails";
import PersonalFormDetails from "./PersonalFormDetails";
import SkillsFormDetails from "./SkillsFormDetails";
import FinalFormReview from "./FinalFormReview";
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
    dateOfJoining: "",
    dateOfComplition: "",
    skills: [],
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
      if (
        !formData.college ||
        !formData.degree ||
        !formData.dateOfJoining ||
        !formData.dateOfComplition
      ) {
        alert("Please fill all the required fields");
        return false;
      }

      if (formData.dateOfJoining >= formData.dateOfComplition) {
        alert("Date of Completion must be after Date of Joining!");
        return false;
      }
    }

    if (currentStep === 3) {
      if (formData.skills.length === 0) {
        alert("Please add at least one skill");
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!");

    if (currentStep !== 4) {
      return;
    }

    if (!validStep()) return;

    alert("FormData Submitted Successfully!");
    console.log(formData);

    submitToAPI();
  };

  const submitToAPI = async () => {
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
    { number: 4, title: "Review & Submit" },
  ];

  const nextStep = (e) => {
    if (e) e.preventDefault();

    if (validStep()) {
      if (currentStep < steps.length) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const prevStep = (e) => {
    if (e) e.preventDefault();

    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const goToStep = (stepNumber) => {
    if (stepNumber < currentStep) {
      setCurrentStep(stepNumber);
      return;
    }

    if (stepNumber > currentStep) {
      if (validStep()) {
        setCurrentStep(stepNumber);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white text-center">
          Create New Account
        </h1>
        
        {/* Steps Navigation - Desktop */}
        <div className="hidden md:flex rounded-t-3xl overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => goToStep(step.number)}
              className={`flex-1 flex items-center justify-center gap-3 py-5 px-4 transition-all duration-300 ${
                currentStep === step.number
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg"
                  : "text-gray-600 hover:bg-white/50"
              }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 text-sm rounded-full font-semibold ${
                  currentStep === step.number
                    ? "bg-white text-blue-500"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.number}
              </span>
              <span className="font-medium text-sm lg:text-base">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Steps Navigation - Mobile/Tablet */}
        <div className="md:hidden rounded-t-3xl overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="grid grid-cols-4 gap-0">
            {steps.map((step) => (
              <button
                key={step.number}
                type="button"
                onClick={() => goToStep(step.number)}
                className={`flex flex-col items-center justify-center gap-2 py-4 px-2 transition-all duration-300 ${
                  currentStep === step.number
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg"
                    : "text-gray-600 hover:bg-white/50"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm rounded-full font-semibold ${
                    currentStep === step.number
                      ? "bg-white text-blue-500"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.number}
                </span>
                <span className="font-medium text-[10px] sm:text-xs text-center leading-tight">
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-b-3xl"
        >
          <div className="border-none p-2 sm:p-4 md:p-6 w-full h-64 sm:h-80 md:h-96 overflow-y-auto">
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
            {currentStep === 4 && <FinalFormReview formData={formData} />}
          </div>
          
          <div className="flex items-center justify-between mt-4 sm:mt-6 gap-3">
            {currentStep === 1 && (
              <button
                type="button"
                className="flex items-center gap-1 sm:gap-2 text-blue-400 hover:text-blue-600 text-xs sm:text-sm font-medium cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
                <span className="hidden sm:inline">Back to Login</span>
                <span className="sm:hidden">Back</span>
              </button>
            )}
            
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-1 px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-400 hover:bg-gray-500 text-white rounded-lg cursor-pointer text-xs sm:text-sm font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
                <span>Back</span>
              </button>
            )}
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-1 px-4 sm:px-6 py-2 sm:py-2.5 bg-green-400 hover:bg-green-600 font-semibold text-white rounded-lg cursor-pointer text-xs sm:text-sm ml-auto transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-1 px-4 sm:px-6 py-2 sm:py-2.5 bg-green-400 hover:bg-green-600 font-semibold text-white rounded-lg cursor-pointer text-xs sm:text-sm ml-auto transition-colors"
              >
                <span>Submit</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiForm;