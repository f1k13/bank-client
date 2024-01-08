import { createForm } from "effector-forms";

import { required } from "@/shared/lib/validators/check-required";
import { checkLength } from "@/shared/lib/validators/check-length";
import { registerFx } from "@/entities/auth/lib/auth-effects";
import { checkPhoneNumber } from "@/shared/lib/validators/check-phone-number";
import { forward } from "effector";

export const registerForm = createForm({
  fields: {
    phoneNumber: {
      init: "",
      rules: [required(), checkPhoneNumber()],
    },
    firstName: {
      init: "",
      rules: [required(), checkLength(3, 15)],
    },
    lastName: {
      init: "",
      rules: [required(), checkLength(3, 15)],
    },
    password: {
      init: "",
      rules: [required(), checkLength(6, 20)],
    },
  },
  validateOn: ["submit"],
});

forward({
  from: registerForm.formValidated,
  to: registerFx,
});
