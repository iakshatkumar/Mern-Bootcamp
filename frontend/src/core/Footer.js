import React from "react";
import "../styles.css";


const Footer = () => {
  return (
    <footer className="footer bottom mt-4">
      <div className="container-fluid bg-dark text-dark text-center p-3">
        <h4 className="text-light copyright">
          © 2021 Tshirt Store, all rights reserved. Made with
          <i class="fas fa-heart px-2" />
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
