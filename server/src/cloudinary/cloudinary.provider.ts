import { v2 } from "cloudinary";
export const CLOUDINARY = "Cloudinary";

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: "dkc9djhaq",
      api_key: "596931221327117",
      api_secret: "GLvmJuY9HssmuENOvX16Gq5P7Io",
    });
  },
};
