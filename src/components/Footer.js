import { Image } from "react-bootstrap";

const Footer = ()=> {
  return(
    <div className=" d-flex flex-column justify-content-center align-items-center bg-dark text-white py-5 py-1 text-center">
        <Image src="/logo.png" width={40}/>
        <h3 className="display-6 fw-bold">PHINMA University of Pangasinan</h3>
        <p className="fs-6">Colllege of Information Technology(BSIT)</p>
    </div>
  );
}

export default Footer;