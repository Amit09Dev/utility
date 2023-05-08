import { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.setAlertMsg('Text convered to uppercase'  , 'success')
  };

  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.setAlertMsg('Text convered to lowercase'  , 'success')
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.setAlertMsg('Text cleared'  , 'danger')
  };

  const handleCopy = () => {
    let copyText = document.getElementById("text-box");
    copyText.select();
    copyText.setSelectionRange(0, copyText.length);
    navigator.clipboard.writeText(copyText.value);
    props.setAlertMsg('Text copied to clipboard' , 'success')
  };

  const handleTrimClick = () => {
    let wordsToKeep = Number(document.getElementById("trimWords").value);
    let newText = text.split(" ").slice(0, wordsToKeep).join(" ");
    setText(newText);
    props.setAlertMsg(`Text trimmed to ${Number(document.getElementById("trimWords").value)}`)
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Word and Character count
  const wordCounter = text
    .split(/\s+/)
    .filter((word) => word.trim().length > 0).length;
  const characterCounter = text.replace(/\s+/g, "").length;

  return (
    <div className="container">
      <h3 className="text-center mt-5">{props.heading}</h3>
      <div className="container mt-4">
        <label htmlFor="text-box" className="text-box form-label">
          Enter your text below:
        </label>
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="text-box"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-success mt-2 ms-3" onClick={handleUpClick}>
        UPPERCASE
      </button>
      <button className="btn btn-success mt-2 ms-2" onClick={handleLowClick}>
        lowercase
      </button>
      <button className="btn btn-success mt-2 ms-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-danger mt-2 ms-2" onClick={handleClearClick}>
        Clear
      </button>
      <label htmlFor="trimWords" className="ms-2">
        Trim Words
      </label>
      <input
        type="number"
        name=""
        className="mt-3 ms-2"
        id="trimWords"
        style={{ padding: "6px" }}
      />
      <button className="btn btn-primary mt-2 ms-2" onClick={handleTrimClick}>
        Trim
      </button>

      <div className="container mt-5">
        <p>
          You have written <strong>{wordCounter}</strong> Words &{" "}
          <strong>{characterCounter}</strong> Character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  heading: "Enter heading here",
};

TextForm.propTypes = {
  heading: PropTypes.string,
  setAlertMsg: PropTypes.string
};
