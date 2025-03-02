import Link from "next/link";
import styles from "./AuthForm.module.css";

function AuthForm({ title, formFields, handleSubmit, linkText, linkTo }) {
  return (
    <div className={styles.auth_page_container}>
      <h1>بوت کمپ بوتواستارت</h1>
      <form onSubmit={handleSubmit} className={styles.auth_page_form}>
        <div className={styles.form_logo}>
          <img src="Union.svg" alt="logo" />
          <h3>{title}</h3>
        </div>

        <div className={styles.form_fields}>
          {formFields}
          <button type="submit">{title}</button>

          <Link className={styles.auth_link} href={linkTo}>
            {linkText}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
