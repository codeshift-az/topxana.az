function Footer() {
  return (
    <footer className="py-3 my-4 border-top">
      <div className="container">
        <p className="text-center text-body-secondary">
          &copy; {new Date().getFullYear()}{' '}
          <a href="https://www.codeshift.az" target="_blank">
            CodeShift
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
