import { calculatorPaths } from "@/config/seo";

export const contactConfig = {
  email: "info@canhopesteel.com",
  projectQuoteUrl: "https://canhopesteel.com/contact/",
  wechat: {
    contactName: "Hapa Lam",
    searchPhoneNumber: "18027418524",
    qrCodePath: calculatorPaths.asset("/images/wechat-qrcode.png"),
  },
  whatsapp: {
    displayNumber: "+86 18027418524",
    linkNumber: "8618027418524",
  },
} as const;
