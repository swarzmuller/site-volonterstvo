'use client';
import Script from 'next/script';

const spFormId = 'f4c3df4d796cf4aeca27605e355fdc84dd082aaf10a69c4b884e39bcc90fcb35';

const TestForm = () => {

  return (
    <>
      <div className="sp-form-outer sp-force-hide">
        <div
          id="sp-form-238518"
          sp-id="238518"
          sp-hash="f4c3df4d796cf4aeca27605e355fdc84dd082aaf10a69c4b884e39bcc90fcb35"
          sp-lang="en" className="sp-form sp-form-regular sp-form-embed"
          sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22submitRedirectUrl%22%3A%22%22%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22Subscription_form_qewr%22%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D">
          <div className="sp-form-fields-wrapper">
            <div className="sp-message">
              <div></div>
            </div>
            <form noValidate="" className="sp-element-container ">
              <div className="sp-field sp-field-full-width" sp-id="sp-f0dfd930-13da-4f97-8ebf-b4c97fc8dba5">
                <div>Once a week we send a digest with our most popular articles.</div>
              </div>
              <div className="sp-field " sp-id="sp-d9bc97db-1b3d-4dc4-888c-e7a75ce9cdae">
                <label className="sp-control-label">
                  <span>Email</span><strong>*</strong>
                </label>
                <input
                  type="email"
                  sp-type="email"
                  name="sform[email]"
                  className="sp-form-control "
                  placeholder="username@gmail.com"
                  sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D"
                  autoComplete="on"
                  required="required"
                />
              </div>
              <div
                className="sp-field sp-button-container "
                sp-id="sp-44dd5cc9-575c-419f-8702-e3ce74c43249"
              >
                <button id="sp-44dd5cc9-575c-419f-8702-e3ce74c43249" className="sp-button">Subscribe</button>
              </div>
            </form>
            <div className="sp-link-wrapper sp-brandname__left">
              <a className="sp-link " target="_blank"
                 href="https://sendpulse.com/forms-powered-by-sendpulse?from=8854902"><span
                className="sp-link-img">&nbsp;</span><span translate="FORM.PROVIDED_BY">Provided by SendPulse</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Script
        src={'//web.webformscr.com/apps/fc3/build/default-handler.js?1724834267561'}
      />
    </>
  );
};

export default TestForm;

