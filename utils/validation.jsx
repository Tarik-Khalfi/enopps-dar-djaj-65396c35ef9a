import { z } from "zod";

export const validationSchema = z.object({
    name: z.string({
        required_error: "Veuillez entrer votre nom et prénom.",
    }),
    email: z.string({
        required_error: "Veuillez entrer votre email.",
    })
        .email(),
    message: z.string({
        required_error: "Veuillez saisir votre demande.",
    }),
    phoneNumber: z.string({
        required_error: "Veuillez entrer votre numéro de téléphone.",
    }),
    subject: z.string({
        required_error: "Veuillez saisir le sujet de votre demande.",
    }),
});
