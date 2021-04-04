const Footer = () => {
  return (
    <>
      <header>
        <h2>
          Made with
          <span>&hearts;</span> in Riihim&auml;ki, Finland
        </h2>
        <style jsx>{`
          header {
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
            color: '#000';
            background-color: #ffcb05;
            width: 100%;
            maxwidth: 100%;
          }
          span {
            color: #ff0000;
          }
        `}</style>
      </header>
    </>
  );
};

export default Footer;
