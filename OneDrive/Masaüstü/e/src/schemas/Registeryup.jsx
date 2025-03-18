import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    email: yup.string().email("Email formatında olmalı").required("Email doldurulması zorunludur"),
    age: yup.number().required("Yaş doldurulması zorunludur").positive("Yaşınız pozitif olmalıdır"),
    password: yup.string().required("Şifre doldurulması zorunludur"),
    passwordagain: yup.string()
        .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
        .required("Şifre tekrar doldurulması zorunludur"),
});
