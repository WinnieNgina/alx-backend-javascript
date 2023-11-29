import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = createUser();
    const photo = uploadPhoto();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
