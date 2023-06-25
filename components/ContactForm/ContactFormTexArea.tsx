import React from 'react';

interface Props {
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

const ContactFormTextArea = ({ inputRef }: Props) => {
  return (
    <div className="mt-5 form-control">
      <label className="label">
        <span className="label-text">Message</span>
      </label>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Message"
        rows={10}
        ref={inputRef}
      ></textarea>
    </div>
  );
};

export default ContactFormTextArea;
