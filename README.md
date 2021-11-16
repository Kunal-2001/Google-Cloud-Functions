<div id="top"></div>

<br />

<!-- ABOUT THE PROJECT -->

## About The Project

This project represent the usage of REST endpoints using google cloud functions, firestore and admin SDK locally. The project uses firestore emulator to test the API's behaviour. NodeJS is used as a runtime enviroment

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Cloud Functions](https://cloud.google.com/functions)
- [Firestore](https://firebase.google.com/docs/firestore)

<p align="right">(<a href="#top">back to top</a>)</p>

### System Built On

- Operating System (Ubuntu 20.04.3 LTS)
- Node.js v14 (configured by firebase)

### Installation and Working

1. Clone the repo
   ```
   https://github.com/Kunal-2001/Google-Cloud-Functions.git
   ```
2. Install node packages
   ```
   cd functions && npm install
   ```
3. Install firebase tools globally
   ```
   npm install -g firebase-tools
   ```
   After installing the firebase tools run `firebase login` to log in via the browser and authenticate the firebase tool.
4. Running the firebase enviroment.

   - **(Recommended)** If you are using **firebase emulator** you just need to enter this command `firebase init emulators`. Choose the functions and firestore emulator from the list and configure them with dependencies [Documentation](https://firebase.google.com/docs/emulator-suite/install_and_configure).
   - If you want to use **firestore production database**. You need to follow these steps [Link](https://firebase.google.com/docs/firestore/quickstart) and alter the code accordingly.

5. Firestore Security Rules are configured and the file is available in the repository [Link](https://github.com/Kunal-2001/Google-Cloud-Functions/blob/main/firestore.rules). Since the project was built and tested on emulator, thereby security rules are public and freely available to modify.

**NOTE:** _Security rules might not work with emulator as locally AdminSDK is used for firebase which provides admin access by default._

<p align="right">(<a href="#top">back to top</a>)</p>
