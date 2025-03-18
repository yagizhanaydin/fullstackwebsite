import * as yup from "yup";

const loginyup = yup.object({
  tel: yup
    .string()
    .matches(/^\d+$/, "Telefon numarası yalnızca sayılardan oluşmalıdır") // Telefon numarasını sadece sayılardan yapıyoruz
    .required("Boş geçilemez"),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .required("Boş bırakılamaz"),
  name: yup
    .string()
    .required("İsim alanı boş geçilemez"),
  surname: yup
    .string()
    .required("Soyisim alanı boş geçilemez"),
  password: yup
    .string()
    .required("Doldurulması zorunlu alan")
    .min(6, "Şifre en az 6 karakter olmalı")
    .max(15, "Şifre en fazla 15 karakter içermeli"),
  passwordagain: yup
    .string()
    .required("Bu alan boş geçilemez")
    .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor")
});

export default loginyup;
