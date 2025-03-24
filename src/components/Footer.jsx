import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Software Quality Assurance Engineer passionate about ensuring software excellence through comprehensive testing and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a href="tel:+8801611621958" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                <FaPhoneAlt className="text-primary-500" />
                <span>+880 1611-621958</span>
              </a>
              <a href="mailto:tamimahasan.ar@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                <FaEnvelope className="text-primary-500" />
                <span>tamimahasan.ar@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FaMapMarkerAlt className="text-primary-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © 2023 Tamim Ahasan Rijon. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <SocialLink href="https://github.com/tamim-ar" icon={<FaGithub size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/tamim-ar" icon={<FaLinkedin size={20} />} />
              <SocialLink href="https://www.facebook.com/hellotamim" icon={<FaFacebook size={20} />} />
              <SocialLink href="https://www.instagram.com/tamim__ahasan" icon={<FaInstagram size={20} />} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 text-sm"
  >
    {children}
  </a>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
