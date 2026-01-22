"use client";

export default function PersonalFormDetails({formData, handleChange}) {
  return (
      <div className="border-2 rounded-lg p-8">
        <div className="flex flex-col gap-5 ">
        <div className="grid grid-cols-2 items-center">
          <span>First Name</span>
          <input name="firstName" value={formData.firstName} onChange={handleChange} required
            className="border-2 w-80 rounded-lg"
            placeholder="Enter your first name"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <span>Last Name</span>
          <input name="lastName" value={formData.lastName} onChange={handleChange} required
            className="border-2 w-80 rounded-lg"
            placeholder="Enter your last name"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <span>Email</span>
          <input name="email" value={formData.email} onChange={handleChange} required
            className="border-2 w-80 rounded-lg"
            placeholder="Enter your email id"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <span>Phone No.</span>
          <input name="phone" value={formData.phone} onChange={handleChange} required
            className="border-2 w-80 rounded-lg"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <span>DOB</span>
          <input type="Date" name="dob" value={formData.dob} onChange={handleChange} required
            className="border-2 w-80 rounded-lg"
            placeholder="Enter your date of birth"
          />
        </div>
      </div>
      </div>
  );
}