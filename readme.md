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
#### D. Execute thw following command in `/server`
```
-npm run dev 
```

## 3.Run `ngrok`
```
-ngrok http "your port or domain"
```

## 4.Run expo cli

#### Navigate to the main directory and execute:
```
-npm start
```
