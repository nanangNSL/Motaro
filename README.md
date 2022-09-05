<h2 align="center">Motaro🦄</h2>
<p align="center">Motaro is where everyone shares thousands of recipes</p>
<p align="center"><a href="https://github.com/bug-hunter-squad/client/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/bug-hunter-squad/backend"> <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/bug-hunter-squad/client?color=277BC0"></a></p>
<p align="center"><img alt="GitHub package.json version" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DA">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white">
<img alt="GitHub package.json version" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></p>
<p align="center">
<a href="https://github.com/nanangNSL/Motaro/issues/1">Report a Bug • </a>
<a href="https://github.com/nanangNSL/Motaro/issues/2">Request a Feature • </a>
<a href="https://github.com/nanangNSL/Motaro/issues/3">Ask a Question</a></p>


<details>
<summary>Table of Contents</summary>
<br/>
  
* [Features](#feature)
* [Made with](#built)
* [Getting Started](#getting)
  * [Prerequisites](#Prerequisites)
  * [Installation](#Installation)
* [License](#License)
</details>
<h3 id=feature>Features</h3>
<ul>
<li>Recipe search by name and ingredients</li>
<li>Login safe and fast</li>
<li>Error management</li>
<li>Refresh tokens</li>
  <li>etc.</li>
</ul>

<h3 id=built>Made With</h3>
<ul>
  <li>Express JS</li>
   <li>PostgreSQL(databases)</li>
   <li>JOI</li>
   <li>Axios</li>
   <li>Multer</li>
   <li>JWT token</li>
   <li>Redis AWS Cloud</li>
  <li>Cloudinary (For media storage)</li>
  <li>Etc.</li>
</ul>
<h3 id=getting>Getting started</h3>
<ul>
   <li>
     <h4 id=Prerequisites>Prerequiresites</h4>
     <ul>
       <li>Downloading and installing Node.js and npm or you can use command:</li>
       <pre><code>npm install npm@latest -g</code> </pre>
       <li>Checking your version of npm and Node.js</li>
       <p>To see if you already have Node.js and npm installed and check the installed version, run the following commands:</p>
       <pre><code>node -v</code></pre>
        <pre><code>npm -v</code></pre>
       <p>In this project I use <code>version v16.15.1</code></p> 
       <li>Set up multiple accounts for configuration
       <ul>
         <li><a href="https://cloudinary.com/">Cloudinary<a></li>
         <li><a href="https://app.redislabs.com/#/login">Redis Cloud<a></li>
         </ul>
       </li>
     </ul>
  </li>
  <li>
     <h4 id=Installation>Intalation</h4>
      <ul>
        <li>Clone project
          <ul>
             <li>Backend (server) || or you can use an endpoint server 👉<code><a href="https://motaro.herokuapp.com">link<a></code> 
             <pre><code>git clone -b deployment https://github.com/nanangNSL/Motaro.git</code> </pre>
             </li>
            <li>Client
             <pre><code>git clone -b add-responsive https://github.com/nanangNSL/Motaro.git</code> </pre>
             </li>
          </ul>
        </li>
        <li>Install all dependencies
             <pre><code>npm install</code> </pre>
            </li>
       <li>Settup <code>.env.example</code></li>
         <code>Fill all secret keys</code>
          <li>Settup database in doc/motaro.psql </li>
             <pre><code>psql -U postgres -p 5432 -h localhost -d db_name -f motaro.psql</code> </pre>
         <li>Run project</li>
            <pre><code>npm start</code></pre>
      </ul>
   </li>
</ul> 
    
<h3 id=License>License</h3>
<ul>
  <li><code><a href="https://github.com/nanangNSL/Motaro/blob/main/LICENSE">MIT</a></code></li>
</ul>
<p>Happy code!☕</p>

