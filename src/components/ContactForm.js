import React from 'react'

const ContactForm = () => {

  return (
    <React.Fragment>
      <form method="post" action="https://ethicaltree.wufoo.com/forms/william-collins-music-contact-form">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="Field3" id="Field3" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="Field4" id="Field4" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="Field5" id="Field5" rows="4"></textarea>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" className="special" /></li>
          <li><input type="reset" value="Reset" /></li>
        </ul>

        <div style={{ display: 'none' }}>
          <input type="hidden" id="idstamp" name="idstamp" value={process.env.GATSBY_WUFOO_KEY} />
        </div>
      </form>

      <ul className="icons">
        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
      </ul>
    </React.Fragment>
  )
}

export default ContactForm

