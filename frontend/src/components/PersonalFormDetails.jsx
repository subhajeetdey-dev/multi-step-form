"use client";

export default function PersonalFormDetails({ formData, handleChange }) {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="grid grid-cols-2 items-center ">
        <span>
          First Name <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl 
          focus:ring-2 focus:ring-purple-400 focus:border-purple-400 
          outline-none transition-all"
          placeholder="Enter your first name"
        />
      </div>
      <div className="grid grid-cols-2 items-center ">
        <span>
          Last Name <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your last name"
        />
      </div>
      <div className="grid grid-cols-2 items-center ">
        <span>
          Email <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your email id"
        />
      </div>
      <div className="grid grid-cols-2 items-center ">
        <span>
          Phone No. <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="grid grid-cols-2 items-center ">
        <span>
          DOB <span className="font-semibold text-gray-400">*</span>
        </span>
        <input
          type="Date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
          placeholder="Enter your date of birth"
        />
      </div>
    </div>
  );
}
