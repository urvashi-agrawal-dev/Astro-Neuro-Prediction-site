import React from 'react';

export default function ProfileTab() {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <div className="max-w-4xl mx-auto p-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="relative">
            <img
              src="https://storage.googleapis.com/a1aa/image/2GOE2snwLVZcKpNfWg9V9IgLRLHxRfDeLAfdeDVoAUmJBf3fJA.jpg"
              alt="Background gradient"
              className="w-full h-32 rounded-t-lg"
            />
            <div className="absolute top-16 left-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/O3kYJfN2KSSVVS5feCgX57ZhiTXsK7unEEgFyNnKXgkgwf9PB.jpg"
                alt="Profile picture of Amanda Smith"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div className="p-4 mt-4">
            <h1 className="text-2xl font-bold">Amanda Smith</h1>
            <p className="text-gray-600 flex items-center">
              <span className="mr-2">
                <i className="fas fa-flag-usa"></i>
              </span>
              Los Angeles, United States
            </p>
            <p className="text-gray-600">
              @amanda21
              <span className="mx-2">•</span>
              <i className="fab fa-google"></i>
              Lead product designer at Google
              <span className="mx-2">•</span>
              Full-time
            </p>
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md">
                Message
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-md">
                Share profile
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md mt-4 p-4">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Product Design',
              'UX Design',
              'Google Analytics',
              'SEO Content',
              'Customer Service',
              'UI Design',
              'Design Strategy',
              'Web-Development',
              'Integrated Design',
              'Front End',
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* People Associated Section */}
        <div className="bg-white rounded-lg shadow-md mt-4 p-4">
          <h2 className="text-xl font-bold mb-2">People Associated</h2>
          {[
            {
              name: 'Ahamd Ekstrom Bothman',
              role: 'Future Program Designer at Google',
              image:
                'https://storage.googleapis.com/a1aa/image/v1YR3m249zpoFhUH2HqWgqLtu1B2jv9my4Lk7LbpduEDevfTA.jpg',
            },
            {
              name: 'Sheldon Langosh',
              role: 'Dynamic Directives Architect at Freshbooks',
              image:
                'https://storage.googleapis.com/a1aa/image/ucrfRKzg5lzOMaQGrzekHwpl5OYewsf4KiJ5JV54fkMRBf3fJA.jpg',
            },
            {
              name: 'Jeremy Crist',
              role: 'Lead Configuration Architect at GitHub',
              image:
                'https://storage.googleapis.com/a1aa/image/yMUpeDWC2qToIS3QhEXy1y0QCVfHEjovS4xmcr3feSZcgf7fE.jpg',
            },
            {
              name: 'Wilbur Kohler',
              role: 'Future Applications Consultant at Gitlab',
              image:
                'https://storage.googleapis.com/a1aa/image/S8a2SZrfI6TJZarWChDHphAqEkAQQZrkhYMTYfFchWQR4fePB.jpg',
            },
          ].map((person) => (
            <div key={person.name} className="flex items-center space-x-4 mb-4">
              <img
                src={person.image}
                alt={`Profile picture of ${person.name}`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">{person.name}</p>
                <p className="text-gray-600">
                  {person.role.split(' at ')[0]} at{' '}
                  <a className="text-blue-600" href="#">
                    {person.role.split(' at ')[1]}
                  </a>
                </p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded-md">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
