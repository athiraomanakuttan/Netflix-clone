import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="social-icons flex justify-start items-start gap-10 mt-2">
        <img src={youtube_icon} alt="YouTube" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={twitter_icon} alt="Twitter" />
      </div>
      <div className="footer-links">
        <span>
          <ul>
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
          </ul>
        </span>
        <span>
          <ul>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>
        </span>
        <span>
          <ul>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
        </span>
      </div>
      <p className='mt-2 text-gray-400'>© 1997 - 2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
