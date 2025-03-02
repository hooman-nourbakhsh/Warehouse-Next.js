import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "utils/cookie";
import useFormFields from "./useFormFields";
import notifications from "utils/toastNotifications";

const useAuthForm = ({ type, authService, defaultValues, redirectPath }) => {
  const router = useRouter();
  const [formData, handleChange] = useFormFields(defaultValues);
  const { username, password, verifypassword } = formData;

  const { mutate } = useMutation({
    mutationFn: type === "login" ? authService.loginUser : authService.registerUser,
    onSuccess: (data) => {
      if (type === "login") {
        setCookie("token", data.data.token);
        notifications("success", "ورود با موفقیت انجام شد");
      } else {
        notifications("success", "ثبت نام با موفقیت انجام شد");
      }
      router.push(redirectPath);
    },
    onError: (error) => {
      if (error.response.statusText === "Unauthorized") {
        notifications("error", "شما مجوز حذف این محصول را ندارید - \n مجددا وارد شوید!");
      }
      if (error.response.data.message === "Invalid credentials") {
        notifications("error", "نام کاربری یا رمز عبور اشتباه است");
      } else if (error.response.data.message === "User already exists") {
        notifications("error", "نام کاربری تکراری است");
      } else {
        notifications("ERROR", error);
      }
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (type === "login") {
      if (!username || !password) {
        return notifications("error", "لطفاً نام کاربری و رمز عبور خود را وارد کنید");
      }
      mutate(formData);
    } else {
      if (!username || !password || !verifypassword) {
        return notifications("error", "لطفا تمام فیلدها را پر کنید");
      }
      if (password !== verifypassword) {
        return notifications("error", "رمز عبور و تکرار آن یکسان نیست");
      }
      mutate({
        username: username,
        password: password,
      });
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useAuthForm;
