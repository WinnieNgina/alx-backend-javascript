import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const profilePromise = uploadPhoto(fileName);
  return Promise.allSettled([userPromise, profilePromise])
    .then(([user, profile]) => {
      const resultsArray = [
        {
          status: user.status,
          value: user.status === 'fulfilled' ? user.value : user.reason,
        },
        {
          status: profile.status,
          value: profile.status === 'fulfilled' ? profile.value : profile.reason,
        },
      ];
      return resultsArray;
    });
}
