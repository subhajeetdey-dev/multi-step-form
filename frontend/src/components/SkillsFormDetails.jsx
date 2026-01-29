"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function SkillsFormDetails({ formData, handleChange }) {
  const [skillInput, setSkillInput] = useState("");

  const addSkills = () => {
    const skill = skillInput.trim();
    if (!skill) return false;

    if (formData.skills.includes(skill)) {
      alert("Skill already added");
      return;
    }

    handleChange({
      target: {
        name: "skills",
        value: [...formData.skills, skill],
      },
    });

    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    handleChange({
      target: {
        name: "skills",
        value: formData.skills.filter((s) => s !== skillToRemove),
      },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkills();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 items-start gap-4">
        <span className="font-bold">
          Add Your Skills <span className="font-semibold text-gray-400">*</span>
        </span>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a Skill"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
            />
            <button
              type="button"
              onClick={addSkills}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              <Plus strokeWidth={3} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="text-red-500 font-bold"
                >
                  <X />
                </button>
              </span>
            ))}
          </div>

          {formData.skills.length === 0 && (
            <p className="text-sm text-red-500">Please add atlease one skill</p>
          )}
        </div>
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
