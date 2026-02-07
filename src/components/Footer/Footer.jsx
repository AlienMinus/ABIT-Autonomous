import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Overlay */}
      <div className="footer-overlay"></div>

      {/* Main Content */}
      <div className="footer-content">
        {/* CONTACT INFO */}
        <div className="footer-column">
          <h3>CONTACT INFO</h3>
          <h4>CAMPUS 1</h4>
          <p>
            Ajay Binay Institute of Technology, Markat Nagar, Cuttack
            <br />
            Development Authority Sector – 1, Cuttack – 753014
          </p>
          <p>
            <strong>Phone:</strong> 0671 - 2362012, 2363014
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">UGC/AICTE (Mandatory Disclosure)</a></li>
            <li><a href="#">Anti-Ragging Posters</a></li>
            <li><a href="#">BPUT</a></li>
            <li><a href="#">BPUT Notices</a></li>
            <li><a href="#">Semester Results</a></li>
            <li><a href="#">AICTE</a></li>
            <li><a href="#">Admission</a></li>
            <li><a href="#">Grievance Redressal Cell</a></li>
            <li><a href="#">Service Rule</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* MAP */}
        <div className="footer-column">
          <h3>CONTACT ABIT</h3>
          <iframe
            title="ABIT Location"
            src="https://www.google.com/maps?q=Ajay%20Binay%20Institute%20of%20Technology%20Cuttack&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2026 <span>Ajay Binay Institute of Technology (Autonomous)</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
