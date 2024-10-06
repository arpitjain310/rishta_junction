import React from 'react'
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const About = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Matrimony Service</h3>
            <p className="mb-4">We are dedicated to helping you find your perfect life partner.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@matrimonyservice.com">info@matrimonyservice.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Wedding Lane, Love City, 12345</span>
              </li>
            </ul>
            <div className="mt-6 space-x-5">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Contact Us
              </button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968524028!3d40.748441679328506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635181410153!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default About;
