"use client";
import { useState } from "react";
import EducationFormDetails from "./EducationFormDetails";
import PersonalFormDetails from "./PersonalFormDetails";
import SkillsFormDetails from "./SkillsFormDetails";

const MultiForm = () => {
  const [step, setStep] = useState(1);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(formData.email)){
      alert("Please enter a valid email id!");
      return false;
    }

    const phoneRegex =  /^[0-9]{10}$/;
    if(!phoneRegex.test(formData.phone)){
      alert("Please enter a valid phone number!");
      return false;
    }

    const yearRegex = /^[0-9]{4}$/;
    if(!yearRegex.test(formData.year)){
      alert("Please enter a valid year");
      return false;
    }

    if(!formData.dob){
      alert("Please select date of birth");
      return false;
    }

    if (step === 1) {
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
    }

    if (step === 2) {
      if (!formData.college || !formData.degree || !formData.year) {
        alert("Please fill all the required fields");
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

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Create New Account</h1>
        </div>
        <div className="border p-6 w-60%">
        {step === 1 && (
          <PersonalFormDetails
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {step === 2 && (
          <EducationFormDetails
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {step === 3 && (
          <SkillsFormDetails formData={formData} handleChange={handleChange} />
        )}
        <div className="flex justify-center mt-5 gap-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={() => {
                if (validStep()) {
                  setStep(step + 1);
                }
              }}
              className="px-4 py-2 bg-green-300 text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
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