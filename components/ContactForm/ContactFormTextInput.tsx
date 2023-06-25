import React from 'react';

interface Props {
  label: string;
  placeholder: string;
  type: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const ContactFormTextInput = ({
  label,
  placeholder,
  type,
  inputRef,
}: Props) => {
  return (
    <div className="w-full form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full input input-bordered"
        ref={inputRef}
      />
    </div>
  );
};

export default ContactFormTextInput;
