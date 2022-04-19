
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

//CSS
import '../App.css'

function Footer() {
  return (
    <Typography component={'span'} variant="h6" color="textPrimary" align="center">
      <div>
        <Link color="primary" href="https://github.com/sidchopp" target="_blank">
          <GitHubIcon />
        </Link>{' '}
        <Link color="primary" href="https://www.linkedin.com/in/sidchopp/" target="_blank">
          <LinkedInIcon />
        </Link>
      </div>
      <div>
        {' © '}
        <Link href="https://sid-projects.netlify.app/" target="_blank">
          <span className="face-detection">SID</span>
        </Link>{' '}
        {/* {new Date().getFullYear()} */}
        {/* {'.'} */}
      </div>
    </Typography>
  );
}

export default Footer;