const Header = () => {
  return (
    <header>
      <h1>WEB BLOG</h1>
      <h2>Made with Next.js</h2>
      <style jsx>{`
        header {
          text-align: center;
          color: '#000';
          background-color: #ffcb05;
          width: 100%;
          maxwidth: 100%;
        }
        h1 {
          margin: 0;
          padding-top: 0.5rem;
        }
        h2 {
          margin: 0;
          padding-bottom: 1rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
