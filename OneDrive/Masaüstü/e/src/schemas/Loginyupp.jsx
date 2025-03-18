import * as yup from "yup";

export const Loginyupp = yup.object({
  email: yup.string().email("Mail formatında olmalı").required("Email gerekli"),
  password: yup.string().required("Password boş geçilemez"),
});
