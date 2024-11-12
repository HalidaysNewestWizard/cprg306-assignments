// import the useUserAuth hook from the auth-context file
import { useUserAuth } from './_utils/auth-contex';

//ues th useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

//if the user object is null, display the login button
if (!user) {
  return <button onClick={gitHubSignIn}>Login with GitHub</button>;
}

// sign in to firebase with github authenication
await gitHubSignIn();

//sign out of firebase
await firebaseSignOut();

// display the user object

return (
  <div>
    <p>
      Welcome , {user.displayName} {user.email}
    </p>
  </div>
);
