import * as yup from "yup";

export const Forgetpasswordyup = yup.object({
    email: yup.string().email("Email türünde olmalı").required(" email Boş geçilemez"),
    password: yup.string().min(6, "Şifre en az 6 karakter olmalı").required("Boş geçilemez"),
    passwordagain: yup
      .string()
      .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
      .required("Boş geçilemez"),
});
