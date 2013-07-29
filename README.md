# Javascript code for smilebox
Smilebox is a tool to make the world a better place. You can read about it at the [smilebox blog](http://igsmilebox.blogspot.com/)

This is my first javascript project, so I'll be doing lots of tools work. Eventually I'll make a seperate repo for just the tools, but for now they'll live in this project.

## Javascript tools
Javascript is the [assembly language of the web](http://ig2600.blogspot.com/2012/05/assembly-to-javascript-tsrs-to.html). Web browsers have a built in "debugger",  aka the F12 tools, which we should be able to extend.
Below are some extension tools.

### inject.js
In the F12 tools it's very useful to inject  (aka load) pre-written scripts, but this functionality is not built in. Thus I've created inject.js which allows arbitrary javscript files to be injected into the current file.

#### Install Inject into the console - to be pasted into javascript console.
```javascript
var   ___i = document.createElement('script');___i.src = "https://raw.github.com/idvorkin/js_smilebox/master/src/inject.js"; document.getElementsByTagName('head')[0].appendChild(___i );
```

#### Inject a javascript files into your web pages.
After initial inject installation, you can now use the console to inject arbitrary javascript files. Here's a javascript file that adds a div with ID hello to the end of your body.
```javascript
inject("http://raw.github.com/idvorkin/js_smilebox/master/src/add_hello_div.js" , function(){add_hello_div()})
```

## Application Lifecycle Managment
Since this is my first javascript application I'll experiment with ALM, here's what I've got so far.  These ALM files will likely move to thier own repo 

### Node on Windows
I develop on windows, which means I need some extra setup. I've automated this setup into powershell commandlets.
Clone:   d4116407def918e8b955b7ed57eee46c495f89a0

#### Start a new build window
    setup_env.ps1
    
#### Refresh dependant libraries
    tests\lib\get_dependancies.ps1

#### Machine initial setup (after installing npm)
    install.ps1

### Unit tests + Automation via Grunt and QUnit
Copied from [Jordan Kasper] (http://jordankasper.com/blog/2013/04/automated-javascript-tests-using-grunt-phantomjs-and-qunit/)

## Finally 
This is my first git/javascript/node/qunit/ci project, it will be ugly. Please provide feedback on how to improve it.
