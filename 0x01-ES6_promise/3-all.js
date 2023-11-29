import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userPromise = createUser();
  const profilePromise = uploadPhoto();

  Promise.all([userPromise, profilePromise])
    .then((info) => {
      console.log(`${info[1].body} ${info[0].firstName} ${info[0].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
