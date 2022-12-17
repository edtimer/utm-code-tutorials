---
sidebar_position: 1
---

# VS Code setup Tutorial

Let's download and setup **Visual Studio code in less than 15 minutes**.



### What you'll need
1. Chocolatey
- you can run the following script to authomatically download and install MinGW. To do so, open powershell on your pc/laptop by navigating to start menu and searching for powershell. After opening it paste the following script and press enter. 
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Check installation was successful
-After the process is done, copy and paste the following command into the the same terminal 
```bash
choco --version
``` 
If you see version information on the screen then you are good to go!.
## Getting VS code and MingW

Type or copy paste the following command into powershell terminal 

```bash
choco install vscode mingw -y
```
This process might take sometime depending on your internet connection and hardware.

-After finishing you have the basic setup to code using C++ on your laptop.

## Help! , I cant make it work

Its alright! .
## Manually installing VS Code

If the tutorial didnt help, we can do this in a manual manner.
- We start by **Downloading VS Code**.

you can get it here-> **Download Visual Studio code here**  **[VSCODE Download](https://code.visualstudio.com/Download)**. Note that you will require to download MinGW and change PATH variables on your system.If you are not comfortable with this .Just show up early for Programming clinic venue and we will help you!
## Whats next

- In an upcoming tutorial we will discuss about extensions and how they help.
