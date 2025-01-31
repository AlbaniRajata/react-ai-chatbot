import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./Controls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Controls({ isDisabled = false, onSend }) {
  const [content, setContent] = useState("");

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleContentSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleContentSend();
    }
  }

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <TextareaAutosize
          className={styles.TextArea}
          disabled={isDisabled}
          placeholder="Message AI Chatbot"
          value={content}
          minRows={1}
          maxRows={4}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
        />
      </div>
      <button 
        className={styles.Button}
        disabled={isDisabled}
        onClick={handleContentSend}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
}