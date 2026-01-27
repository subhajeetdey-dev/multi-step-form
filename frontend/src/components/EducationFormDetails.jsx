"use client";

export default function EducationFormDetails({ formData, handleChange }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 items-center">
        <span className="font-bold">
          College <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter the name of your college"
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <span className="font-bold">
          Degree <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your degree"
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <span className="font-bold">
          Year <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your college year"
        />
      </div>
    </div>
  );
}
