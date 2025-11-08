import Link from 'next/link'

export default function Careers() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-gray-800 text-center">Careers</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 text-center">
              Join our team and help shape the future of IT solutions
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Work With Us?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Texas to Success is a boutique IT Staffing consultancy & software development company that provides IT solutions. We're looking for talented individuals who are passionate about technology and innovation.
                </p>
                <p>
                  We work with hundreds of future-thinking businesses, including many of the world's top hardware, software, and brands. Join us and be part of a team that delivers exceptional results.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Competitive compensation packages</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Opportunities for professional growth</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Work with cutting-edge technologies</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Collaborative work environment</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible work arrangements</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Health and wellness benefits</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Open Positions</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  We're always looking for talented individuals to join our team. Whether you're a developer, designer, consultant, or marketing professional, we'd love to hear from you.
                </p>
                <p className="text-gray-700">
                  Current opportunities include positions in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Software Development (ERP, CRM, Web, Mobile)</li>
                  <li>Salesforce Development & Consulting</li>
                  <li>UX/UI Design</li>
                  <li>DevOps & Cloud Infrastructure</li>
                  <li>Digital Marketing & SEO</li>
                  <li>IT Staffing & Recruitment</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Interested in Joining Our Team?</h2>
              <p className="text-gray-700 mb-6">
                Send us your resume and let us know how you can contribute to our mission. We'll get back to you within 24 hours.
              </p>
              <Link 
                href="/contact" 
                className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

