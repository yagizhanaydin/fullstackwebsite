import * as yup from "yup";

export const loginuseryup = yup.object().shape({
  tel: yup
    .string()
    .matches(/^\d+$/, "Telefon numarası yalnızca sayılardan oluşmalıdır")
    .required("Telefon numarası boş geçilemez"),
  password: yup
    .string()
    .required("Şifre boş geçilemez")
    .min(6, "Şifre en az 6 karakter olmalıdır"),
});
