import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Dedicated to helping you achieve your fitness goals and live a healthier, happier life. Our expert trainers, state-of-the-art facilities, and supportive community will help you every step of the way. Join us today and start evolving your fitness!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Facebook: @evogym</p>
          <p className="my-5">Instagram: @evogym</p>
          <p>Twitter: @evogym</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Mailto: info@evogym.com</p>
          <p className="my-5">Phone: (+91)12345-67890</p>
          <p>Address: UttarPradesh, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
