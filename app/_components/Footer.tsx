function Footer() {
  return (
    <footer className="grid">
      <div className="max-w-7xl mx-auto z-10">
        &copy; {process.env.APP_NAME}
      </div>
    </footer>
  );
}

export default Footer;
