import Link from 'next/link'

export default function ERPCRM() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-gray-800 text-center">
            Custom ERP & CRM Software
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 text-center">
              Custom software solutions for your business needs, including ERP and CRM systems.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">What We Offer</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Enterprise Resource Planning (ERP)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Streamline your business operations with custom ERP solutions designed to integrate all your core business processes. Our ERP systems help you manage inventory, finance, human resources, and more in one unified platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Customer Relationship Management (CRM)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Build stronger customer relationships with our custom CRM software. Track interactions, manage sales pipelines, automate marketing campaigns, and gain valuable insights into your customer base.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Custom Software Solutions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tailored applications designed specifically for your business needs, from enterprise systems to specialized tools that streamline operations and improve efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time data integration</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Scalable architecture</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom reporting and analytics</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Mobile accessibility</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Secure data management</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Ready to Get Started?</h2>
              <p className="text-gray-700 mb-6">
                Contact us today for a free consultation and learn how our custom ERP and CRM solutions can transform your business.
              </p>
              <Link 
                href="/contact" 
                className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition inline-block"
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

