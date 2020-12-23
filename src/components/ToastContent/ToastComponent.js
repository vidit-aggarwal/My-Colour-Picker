import React from 'react';
import styles from "./ToastComponent.module.css";

const ToastComponent = (props) => (
     <div className={styles.toastText}>
         Copied {props.text} in Clipboard
     </div>       
    );

export default ToastComponent;