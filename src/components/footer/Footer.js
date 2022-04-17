
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer-bar'>
        <a href="https://github.com/D1183-Mustafa" target="_blank" rel="noopener noreferrer"><GitHubIcon className="icon"/></a>
        <a href="https://www.linkedin.com/in/mustafa-alta%C5%9F-b49b77225/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="icon"/></a>
        
       
    </div>
  );
}

export default Footer;
