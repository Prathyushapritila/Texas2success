import Link from 'next/link'

export default function Salesforce() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Salesforce Development
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-8 text-center text-gray-600 dark:text-gray-400">
              Expert Salesforce solutions, consulting, and integration for all business sizes.
            </p>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 transition-colors duration-300">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Our Salesforce Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Salesforce Implementation</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    From initial setup to full deployment, we guide you through every step of your Salesforce implementation. Our team ensures seamless integration with your existing systems and processes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Custom Development</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Build custom applications, workflows, and integrations tailored to your specific business needs. We leverage Salesforce's powerful platform to create solutions that drive results.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Salesforce Consulting</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Get expert guidance on Salesforce best practices, optimization strategies, and roadmap planning. Our consultants help you maximize your Salesforce investment.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Integration Services</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Connect Salesforce with your existing systems, third-party applications, and data sources. We ensure smooth data flow and synchronization across all platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-8 transition-colors duration-300">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Why Choose Our Salesforce Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Certified Salesforce professionals</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">End-to-end project management</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Custom solutions for all business sizes</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Ongoing support and training</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Proven track record</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Scalable and flexible solutions</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg text-center transition-colors duration-300">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Ready to Transform Your Business?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Let our Salesforce experts help you unlock the full potential of the platform. Contact us for a free consultation.
              </p>
              <Link 
                href="/contact" 
                className="bg-green-600 dark:bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition inline-block"
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
