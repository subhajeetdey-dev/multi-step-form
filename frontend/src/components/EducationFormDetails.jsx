"use client";



export default function EducationFormDetails ({formData, handleChange}) {
  return (
      <div className="border-3 rounded-lg p-8">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 items-center">
            <span className="font-bold">College</span>
            <input name='college' value={formData.college} onChange={handleChange} required
              className="border-2 w-80 rounded-sm"
              placeholder="Enter the name of your college"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <span className="font-bold">Degree</span>
            <input name='degree' value={formData.degree} onChange={handleChange} required
              className="border-2 w-80 rounded-sm"
              placeholder="Enter your degree"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <span className="font-bold">Year</span>
            <input name="year" value={formData.year} onChange={handleChange} required
              className="border-2 w-80 rounded-sm"
              placeholder="Enter your college year"
            />
          </div>
        </div>
      </div>
  );
};

