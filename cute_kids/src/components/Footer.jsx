import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Cute Kids</h1>
            <p className="text-sm">Quality Clothing for Kids</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Visit Us</h2>
            <p>Tyre Store:</p>
            <p>Nabatiyeh Store:</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email: cutekids@gmail.com</p>
            <p>Phone: +XX XXXX XXXX</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Cute Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;