import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userPromise = createUser();
  const profilePromise = uploadPhoto();

  Promise.all([userPromise, profilePromise])
    .then(([user, profile]) => {
      console.log(`${profile.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
