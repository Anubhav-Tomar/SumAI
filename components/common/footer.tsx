export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto text-center px-4">
            <div className="mb-6">
              <p className="text-lg sm:text-xl font-semibold">
                SumAI
              </p>
              <p className="text-sm sm:text-base">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
    
            {/* Social media links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
    
            {/* Links to other pages (e.g., Privacy Policy, Terms of Service) */}
            <div className="text-sm text-gray-400">
              <a
                href="/"
                className="hover:text-white transition duration-300 mx-2"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="hover:text-white transition duration-300 mx-2"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      );    
}