function Footer() {
  return (
    <footer className="fade-in">
      <div className="container py-2">
        <span>
          &copy; {new Date().getFullYear()} <b>Eventify</b> &mdash; All rights reserved.
        </span>
        <div style={{ fontSize: '0.95rem', color: '#a5b4fc', marginTop: '0.2rem' }}>
          Crafted with passion for your events.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
