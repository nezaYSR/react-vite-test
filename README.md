### Features

- Login, Logout (Create "token" in local storage);
- You can enter any string/numeric/any characters in "Phone Number" form ;
- "Password" can be anything as well, there is no authentication mechanism;
- "Phone Number" || "Password" can not be null;
- filtering users according search form payload(tags, min/max sent, min/max received);

# Chat Homey - a ChatDaddy testing

<img src="src/assets/screenshoot/lowgo.jpg" alt="Logo" height="80">

###Tech Explanation
Vite based React App, using MUI, Lottie, SCSS, Docker.

####How to run

    Git clone
    npm i / npm i --force (in case brute force is needed)
    docker build -t <container name> .
    docker run -p 8080:8080 <container name>
    go to http://localhost:8080/

Or simply run

    Git clone
    npm i / npm i --force (in case brute force is needed)
    npm run dev

###Screenshots
