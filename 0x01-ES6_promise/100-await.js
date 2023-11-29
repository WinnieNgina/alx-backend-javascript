import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = createUser();
    const photo = uploadPhoto();
    const [resolvedPhoto, resolvedUser] = await Promise.all([photo, user]);
    return {
      photo: resolvedPhoto,
      user: resolvedUser,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
