import React from 'react';
import Link from 'next/link';

// Define the type for the job data
interface Job {
  title: string;
  description: string;
  responsibilities: string[];
  link: string;
}

interface JobPostProps {
  jobs: Job[]; // Expecting an array of Job objects
}

const JobPost: React.FC<JobPostProps> = ({ jobs }) => {
  return (
    <div className="p-10">
      {jobs.map((job, index) => (
        <div key={index} className=" p-6 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
          <p className="text-gray-700 mb-4">{job.description}</p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-600">
            {job.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <div className="flex justify-center items-center h-full"> {/* Ensure this container has full height */}
        <Link href="/careers/Apply">
            <p className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-4 px-12 mt-4 rounded flex justify-center items-center">
              Apply Now
            </p>
        </Link>
      </div>

    </div>
  );
};

export default JobPost;
