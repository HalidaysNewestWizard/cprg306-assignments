'use client';
import Link from 'next/link';
import Return from '../return';

// import the useUserAuth hook from the auth-context file
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  //ues th useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // sign in to firebase with github authenication
  const login = async () => {
    await gitHubSignIn();
  };
  //sign out of firebase
  const logout = async () => {
    await firebaseSignOut();
  };
  // display the user object

  return (
    <main>
      <h1>Week 10</h1>
      <div>
        {user ? (
          <div>
            <p>
              Welcome , {user.displayName} {user.email}
            </p>
            <button onClick={logout}>Sign out</button>
            <h1>
              <Link href='/week-10/shopping-list'>Shopping List</Link>
            </h1>
          </div>
        ) : (
          <div>
            <p>Welcome, Please sign in</p>
            <button onClick={login}>Sign in with GitHub</button>
          </div>
        )}
        <p>Welcome to the Landing page </p>
        <Return />
      </div>
    </main>
  );
}
