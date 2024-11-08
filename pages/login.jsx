import { authService } from "services/authService";
import useAuthForm from "hooks/useAuthForm";
import AuthForm from "components/templates/AuthForm";

function LoginPage() {
  const defaultValues = {
    username: "",
    password: "",
  };

  const { formData, handleChange, handleSubmit } = useAuthForm({
    type: "login",
    authService,
    defaultValues,
    redirectPath: "/",
  });

  const formFields = (
    <>
      <input type="text" name="username" placeholder="نام کاربری" value={formData.username} onChange={handleChange} autoComplete="off" />
      <input type="password" name="password" placeholder="رمز عبور" value={formData.password} onChange={handleChange} autoComplete="off" />
    </>
  );

  return <AuthForm title="فرم ورود" formFields={formFields} handleSubmit={handleSubmit} linkText="ایجاد حساب کاربری!" linkTo="/register" />;
}

export default LoginPage;
