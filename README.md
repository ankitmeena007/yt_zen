# Youtube ZEN (uses youtube API)



## Features

* Has a custom slider to speficy the number of videos to show.

* Supports query search for both Video and Playlist.
 
* Accepts individual `video ID`, `playlist ID` and full `URL` too.

* Dark theme support based on user os preference




## Live Demo: [Here](https://ankitmeena007.github.io/yt_zen/)


![image](https://github.com/ankitmeena007/yt/assets/63893740/293ab5c9-1c66-4051-9fc9-a29ec281f728)


# To build your own app:

1. Get your youtube api v3 key
   See this [tutorial](https://blog.hubspot.com/website/how-to-get-youtube-api-key) for more info.

2. Fork or Clone this repo.

3. Create config.js file
   > create `config.js` file at the root of project
   
   > inside `config.js` file add `API_KEY: your API Key`:

```
// For example

var config = {
 
    API_KEY : "your API Key",
    
   }
```
Note: if adding config.js to .gitignore file at root of the project doesn't hide the config.js file for some reason, then you can use the following commands:

```
git rm -r --cached config.js

git add .
git commit -m 'your message'
git push
