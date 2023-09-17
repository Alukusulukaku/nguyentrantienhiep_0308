function Contact() {
  return (
    <section className="section-content padding-y">
      <div class="container">
        <div>
          <h1>Contact Us</h1>
        </div>
        <br />
        <div class="row">
          <div class="col-md-6 padding-bottom">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.987103826621!2d106.774999!3d10.8306805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1694927782574!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
          <div class="col-md-6">
            <form class="my-form">
              <div class="form-group">
                <label for="form-name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="form-name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="form-email">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="form-email"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
                <label for="form-subject">Telephone</label>
                <input
                  type="text"
                  class="form-control"
                  id="form-subject"
                  placeholder="Subject"
                />
              </div>
              <div class="form-group">
                <label for="form-subject">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="form-title"
                  placeholder="Your title"
                />
              </div>
              <div class="form-group">
                <label for="form-message">Email your Message</label>
                <textarea
                  class="form-control"
                  id="form-message"
                  placeholder="Enter your message..."
                  style={{ resize: "none", height: 175 }}
                ></textarea>
              </div>
              <div class="col-md-12 d-flex justify-content-center">
                <button type="submit" class="btn btn-block btn-warning w-50">
                  {" "}
                  Send{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
