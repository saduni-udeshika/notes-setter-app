import { Link } from 'react-router-dom';

function Footer() {
   return (
      <footer className="footer">
         <p className="copyright">
            Copyright ©2022 by <Link to="/">NotesSetter</Link> - All Rights Reserved!
         </p>
      </footer>
   );
}

export default Footer;
