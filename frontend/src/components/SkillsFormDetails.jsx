"use client";

export default function SkillsFormDetails({ formData, handleChange }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 items-center">
        <span className="font-bold">
          Skills <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your skills"
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <span className="font-bold">
          Experience <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your experience"
        />
      </div>
    </div>
  );
}
