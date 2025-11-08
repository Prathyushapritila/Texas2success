import Link from 'next/link'

export default function WebsitesApps() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-gray-800 text-center">
            Websites & Mobile Apps
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 text-center">
              Modern, responsive websites and mobile applications to grow your business online.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Development Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Web Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create stunning, responsive websites that work seamlessly across all devices. From simple landing pages to complex web applications, we build solutions that engage users and drive conversions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Mobile App Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Develop native and cross-platform mobile applications for iOS and Android. Our apps are designed for performance, user experience, and scalability.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">UX/UI Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beautiful, intuitive designs that enhance user experience and drive engagement. We combine aesthetics with functionality to create interfaces that users love.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Product Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    End-to-end product development from concept to launch. We handle architecture, development, testing, and deployment to bring your vision to life.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">What We Deliver</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Responsive and mobile-first design</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fast loading and optimized performance</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SEO-friendly architecture</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cross-platform compatibility</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Scalable and maintainable code</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Ongoing support and updates</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Ready to Build Your Digital Presence?</h2>
              <p className="text-gray-700 mb-6">
                Let's discuss your project and create a stunning website or mobile app that grows your business. Contact us for a free consultation.
              </p>
              <Link 
                href="/contact" 
                className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition inline-block"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

