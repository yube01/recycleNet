import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="about-us">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-text">
            <span className="green-text">Recycle</span>
            <span className="black-text">Net</span>
          </h3>
          <p>
            <i>
              <b>RecycleNet</b>
              helps you track and manage your biodegradable materials,
              preventing waste and expiration. It a solution for the circular
              economy and waste management. <br />
            </i>
          </p>
          <p>Copyright © 2024. RecycleNet</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
