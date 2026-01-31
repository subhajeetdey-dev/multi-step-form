"use client";

export default function EducationFormDetails({ formData, handleChange }) {
  const handleDateChange = (e) => {
    const { name, value } = e.target;

    handleChange(e);

    if( name === "dateOfJoining" && formData.dateOfComplition){
      if(value >= formData.dateOfComplition){
        alert('Date of Joining must be before Date of Completion!')
      }
    }

    if( name === "dateOfComplition" && formData.dateOfJoining){
      if(value <= formData.dateOfJoining){
        alert('Date of Completion must be after Date of Joining!')
      }
    }
  };

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
          Date of Joining <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="dateOfJoining"
          type="Date"
          value={formData.dateOfJoining}
          onChange={handleChange}
          max={formData.dateOfComplition || undefined}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your college year"
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <span className="font-bold">
          Date of Complition <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="dateOfComplition"
          type="Date"
          value={formData.dateOfComplition}
          onChange={handleDateChange}
          min={formData.dateOfJoining || undefined}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your college year"
        />
      </div>
    </div>
  );
}
