<img src="https://raw.githubusercontent.com/Borecjeborec1/Kohut/5283ca484e96af76d1c6815a5933b64a976cfc34/assets/kohut.svg" width="60%"/>

## What is Kohut?
Kohut is a simple CLI tool written in NodeJS for creating next level github contribution graphs. 

## Why Kohut?
Kohut is the first tool that let's you write text to your contributions graph. It's free and easy to use.

Just look how cute logo you can write on your github *mainpage*.
These are my github contributions in year 2003. [https://github.com/Borecjeborec1](https://github.com/Borecjeborec1?tab=overview&from=2003-12-01&to=2003-12-31)
<img src="https://github.com/Borecjeborec1/Kohut/blob/main/assets/white-atzuki.png?raw=true" width="80%"/>
<img src="https://github.com/Borecjeborec1/Kohut/blob/main/assets/black-atzuki.png?raw=true" width="80%"/>

## How can I use it?
Easily, just follow these 4 steps.

1) [Create GitHub repo](#1-create-github-repo)
2) [Initialize the new repo](#2-initialize-the-new-repo)
3) [Download kohut](#3-download-kohut)
4) [Running the Kohut](#4-running-the-kohut)


*Steps 1 and 2 are just normal GitHub repo creating, you can skip them and use existing repo, or create it your own way.*

#### 1) Create Github repo
Navigate to this page [https://github.com/new](https://github.com/new) and create a new repo. Fill out the form and click create. *It can be private repo as well.*

#### 2) Initialize the new repo
When you create the new repo a bunch of commands jumps into your face on GitHub website. Follow them. Create folder, open terminal and paste the commands there. When you are done you should have folder with readme.md inside on your local machine. The same folder structure should appear on GitHub page too.

The commands should look like this:
```
echo "# ds" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gymplgames/ds.git
git push -u origin main
```

#### 3) Download Kohut
If you have NodeJS installed, download the Kohut package from npm using 

```
npm i -g kohut
```

#### 4) Running the Kohut
You are nearly done. 1 last step to do. Open terminal in your folder where you have your git initialized and execute kohut command.
```
kohut [text] [year] 
```
In my case it's 
```
kohut atzuki 2003
```
Wait a few seconds and you are done!

Good Job! You should have your text written inside contribution graph on your main page.

> **Warning!**
Kohut is not supposed to spam GitHub servers or harass someone. Please do not abuse it that way. It's use case is only for fun and aesthetics.

## How does it work?
Basicly Kohut takes initialized repo and create a file called *fileName*. Then kohut makes changes in it *(concretly rewrites random number)* and assign commit date to a date mapped from a [letters hashmap](./letters.json).

## Future features?
I will try to implement more features in future.

Planned features:
* reversed option (reverse the text colors)
* more letters/numbers/languages (currently supports only A-Z and 0-9)
* some sort of image mapping maybe

This project is open-source, feel free to contribute.

