function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for your event planning needs.</p>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="4" required />
        </div>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
