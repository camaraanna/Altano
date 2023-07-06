import React from "react";
import ScrollToTop from "react-scroll-to-top";

export const Footer = () => {
  return (
    <div className="Footer">
      <p className="copyright">Copyright © 2023 ALTANO Ltd. </p>

      {/* ScrollToTop allow us to scroll up in the page  */}

      <ScrollToTop smooth="true" />
    </div>
  );
};
export default Footer;
