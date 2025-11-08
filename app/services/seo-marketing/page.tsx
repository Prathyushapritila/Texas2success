import Link from 'next/link'

export default function SEOMarketing() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-gray-800 text-center">
            SEO & Digital Marketing
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 text-center">
              Boost your online presence and reach with our SEO and digital marketing services.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Marketing Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Search Engine Optimization (SEO)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Improve your website's visibility in search engine results. Our SEO strategies help you rank higher, attract more organic traffic, and generate quality leads.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Digital Marketing Strategy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive digital marketing campaigns that drive engagement and conversions. We develop strategies tailored to your business goals and target audience.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Content Marketing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create valuable, engaging content that attracts and retains customers. From blog posts to social media content, we help you build a strong online presence.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Social Media Marketing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Build your brand and engage with your audience across social media platforms. We create and manage campaigns that drive results.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Data-driven strategies</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Keyword research and optimization</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">On-page and off-page SEO</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Performance tracking and analytics</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Conversion rate optimization</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Regular reporting and insights</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Ready to Grow Your Online Presence?</h2>
              <p className="text-gray-700 mb-6">
                Let's develop a digital marketing strategy that drives results. Contact us for a free consultation and SEO audit.
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

