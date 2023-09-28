import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent py-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <h1>filip.halapir1@gmail.com</h1>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <h1>+385 99 999 99 99</h1>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <h1>Croatia, 51 000</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
