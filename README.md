## Create-VanillaJS-APP

<hr/>

A very simple vanilla js boilerplate
<br/>
Sample app: https://create-vanilla-js.netlify.app/

## Key features

<ul>
    <li>webpack and Babel support</li>
    <li>Lazy loading support</li>
    <li>Vendor chunking by default</li>
    <li> JavaScript minification</li>
    <li>Hashing by default for .js and .css files</li>
    <li>Caching supported for Netlify deploys</li>
    <li> ES6 fully supported</li>
    <li> import/export (ES Modules support)</li>
    <li>Inline image support (upto 8kb)</li>
    <li>ESLint support</li>
    <li>.env file support</li>
    <li>Config files for dev and prod mode</li>
</ul>

## Getting Started
<hr/>

Install `degit` if it's not already installed
```cmd
npm i -g degit
```
Run the `degit` command to get the files from repo, give your app name
```cmd
degit Madhusudan707/create-vanilla-js-app/tree/development my-app-name
```
Go inside your app's directory
```cmd
cd my-app-name
```
Get the required node modules
```cmd
npm install
```
Start the dev server and start coding!
```cmd
npm run start
```
**Optional**: 
Do `git init` in order to initialize a git repo.


## Advanced
If you want to add more loaders or plugins, please add them accordingly in the dev or prod webpack config.