import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            A modular Learning Management System built to simplify education delivery. It supports course management, user roles, assessments, and reporting, ensuring a smooth experience for both learners and administrators.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="https://www.linkedin.com">About us</a></li>
            <li><a href="https://github.com/Malik-Jalihal">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm" type="email" placeholder="Enter your email" />
            <button className="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-white mb-2">Follow us</h3>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/90 hover:text-blue-400 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.08-.02-2.468-1.504-2.468-1.506 0-1.736 1.176-1.736 2.392v4.576h-3v-9h2.879v1.232h.041c.401-.759 1.379-1.56 2.839-1.56 3.038 0 3.6 2.001 3.6 4.599v4.729z"/>
                </svg>
              </a>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/90 hover:text-gray-300 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.526.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.654 1.65.243 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/90 hover:text-blue-500 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z"/>
                </svg>
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/90 hover:text-pink-400 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 2.003.25 2.47.415a4.92 4.92 0 011.717 1.12 4.92 4.92 0 011.12 1.717c.165.467.358 1.264.415 2.47.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.057 1.206-.25 2.003-.415 2.47a4.902 4.902 0 01-1.12 1.717 4.902 4.902 0 01-1.717 1.12c-.467.165-1.264.358-2.47.415-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.206-.057-2.003-.25-2.47-.415a4.902 4.902 0 01-1.717-1.12 4.902 4.902 0 01-1.12-1.717c-.165-.467-.358-1.264-.415-2.47-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.057-1.206.25-2.003.415-2.47a4.92 4.92 0 011.12-1.717 4.92 4.92 0 011.717-1.12c.467-.165 1.264-.358 2.47-.415 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.013-4.947.072-1.276.058-2.153.25-2.905.534a6.993 6.993 0 00-2.52 1.63 6.993 6.993 0 00-1.63 2.52c-.283.752-.476 1.629-.534 2.905-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.058 1.276.25 2.153.534 2.905.364 1.322.918 2.512 1.63 2.52 1.276.283 2.153.476 2.905.534 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.276-.058 2.153-.25 2.905-.534a6.99 6.99 0 002.52-1.63 6.99 6.99 0 001.63-2.52c.283-.752.476-1.629.534-2.905.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.058-1.276-.25-2.153-.534-2.905a6.993 6.993 0 00-1.63-2.52 6.993 6.993 0 00-2.52-1.63c-.752-.283-1.629-.476-2.905-.534-1.28-.059-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162 a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2026 © Malik-Jalihal. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
