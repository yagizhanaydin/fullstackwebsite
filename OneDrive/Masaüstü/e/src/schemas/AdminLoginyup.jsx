import * as yup from "yup";

const AdminLoginyup = yup.object({
  email: yup
    .string()
    .email("Geçersiz email adresi") 
    .required("Email boş geçilemez"), 

  password: yup
    .string()
    .required("Şifre boş olamaz") 
    .min(6, "Şifre en az 6 karakter olmalıdır") 
});

export { AdminLoginyup };
