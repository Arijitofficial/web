# web-extension

# Steps to run :

### A) download zipfiles and unzip
### B) Load extension
steps >  
1> open chrome  
2> in address bar type  
```bash
chrome://extension
```
3> turn on developer mode  
4> load unpacked  
5> select extension folder  

### C) run server  
steps>  
1> install node.js and npm  
2> open the server folder loaction  
2> open cmd prompt there  
3> type  
```bash
npm i express amazon-cognito-identity-js aws-sdk dotenv ejs jwt-decode path url
```
4> sign up url >>  
```bash
https://exam-sim-auth.auth.ap-northeast-1.amazoncognito.com/login?client_id=6a3vueko41krpikj63pvuenpeb&response_type=code&scope=email+openid+phone&redirect_uri=localhost%3A8080%2Fexam
```
4> type  
```bash
npm run start
```
5> open localhost:8080 in chrome  

# what it does?
#### this chrome extension takes sign_in_data and makes a post request to server > redirects to a given url which has appended uid > server matches url uid with process uid to know if its the user failing which redirects back to sign-in  
#### in the current page> a new contentscript of the extension opens a webcam stream> takes snapshots and uploads to s3 bucket in a configurable interval
#### the server has many more unused utility functions using which a live proctoring admin panel can be created in the future
