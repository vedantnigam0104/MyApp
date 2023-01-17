import React from "react";

function Footer() {
  const newdate = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {newdate}</p>
    </footer>
  );
}

export default Footer;
