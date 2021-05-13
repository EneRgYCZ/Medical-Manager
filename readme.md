# Medical Manager

## 1.Install dependencies

#### A. Navigate to `/server` directory and execute:
```
-npm install
```

#### B. Navigate to the main directory and execute:
```
-npm install
```

## 2.Database 

#### For the moment the database that we are using is MongoDB.

#### A. Create a folder named `Api` in `/server/src`.
#### B. Create a file named `mongoKey` in `/server/src/Api`.
#### C. Add the following code in the `mongoKey` file.
```
const mongoUri = "YOUR_MONGODB_URI";

module.exports = mongoUri
```
#### D. Execute the following command in `/server`
```
-npm run dev 
```

## 3.Run `ngrok`
```
-ngrok http "your port or domain"
```
#### Navigate to `/src/api/tracker.js` file and replace the `baseURL` string with the ngrok url you just created

## 4.Run expo cli

#### Navigate to the main directory and execute:
```
-npm start
```

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
