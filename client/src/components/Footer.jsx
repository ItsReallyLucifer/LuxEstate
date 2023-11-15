import {FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

export default function Footer() {

  return (
    <footer className="bg-gray-800 text-white py-5 text-center bottom-0 w-full">
  <div className="container mx-auto">
    <div className="flex items-center justify-center">
      <div className="footer-info">
        <p>&copy; 2023 Lucifer Morningstar | LuxEstate</p>
      </div>
    </div>
  </div>
</footer>
  );
}
