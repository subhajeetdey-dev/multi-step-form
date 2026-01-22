"use client";

export default function SkillsFormDetails ({formData, handleChange}){

  return (
      <div className="border rounded-lg p-8">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 items-center">
            <span className="font-bold">Skills</span>
            <input name="skills" value={formData.skills} onChange={handleChange} required
              className="w-80 rounded-sm border"
              placeholder="Enter your skills"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <span className="font-bold">Experience</span>
            <input name="experience" value={formData.experience} onChange={handleChange} required
              className="w-80 rounded-sm border"
              placeholder="Enter your experience"
            />
          </div>
        </div>
      </div>
  );
};