export default function FinalFormReview({ formData }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Personal Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 font-semibold">Name</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">
              {formData.firstName} {formData.lastName}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Email</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Phone No.</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">{formData.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Date of Birth</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">{formData.dob}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Educational Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 font-semibold">College Name</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">
              {formData.college}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Degree</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">{formData.degree}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Date of Joining</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">{formData.dateOfJoining}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Date of Complition</p>
            <p className="mt-1 text-sm text-gray-800 font-bold">{formData.dateOfComplition}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Skill Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 font-semibold">Skills</p>
            <div className="flex flex-wrap gap-2 justify-center">
                {formData.skills.length > 0 ? (
                    formData.skills.map((skill, index) => (
                        <span key={index} className="mt-2 inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {skill}
                        </span>
                    ))
                ): (
                    <p className="text-sm text-gray-400 italic">No Skills added</p>
                )}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Experience</p>
            <p className="mt-2 text-sm text-gray-800 font-bold">{formData.experience || "Not specified"}</p>
          </div>
        </div>
      </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-2 md:p-4 rounded">
            <p className="text-xs sm:text-sm text-blue-700">
                Please review all details carefully before you submit your details.
            </p>
        </div>
    </div>
  );
}
