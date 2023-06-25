import React from 'react';

interface Props {
  reset: () => void;
}
const ContactFormControls = ({ reset }: Props) => {
  return (
    <div className="flex justify-end gap-2">
      <button
        className="btn btn-primary"
        type="submit"
      >
        Submit
      </button>
      <button
        className="btn btn-neutral btn-outline"
        onClick={reset}
        type="reset"
      >
        Reset
      </button>
    </div>
  );
};

export default ContactFormControls;
