import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email forma" }),

  password: z.string().min(1, { message: "Password is required" }),
  // .min(8, { message: "Password must be at least 8 characters long" })
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   {
  //     message:
  //       "Password must include uppercase, lowercase, a number, and a special character",
  //   }
  // ),
});
