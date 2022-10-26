---
sidebar_position: 2
---

# Creating a Package

:::caution

This section is only for Developers

:::

## Getting Started

### Preparation
**Note that its not recommended to have numbers or special characters in the names**

Create a folder named `packages/<YourName>/<YourPackageName>`in your CP.GG Root directory
To locally test your package, you will need to edit your `composer.json` file.
Below `    "license": "MIT",` add this line of Code

```
"repositories": [
    {  
        "type": "path",
        "url": "packages/*/*"
    }
]
```

This will enable CP.GG to use your package and any other local Packages created.

In your `PackageName` folder you need the following files:

| File                               | Description                                                                                                                                                 |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| README.md                          | In this file you will put a general description of your addon, maybe your contact details and everything else a end-user would need to use your Package     |
| src/PackageNameServiceProvider.php | More on that Below. This is the "Heart" of your Package                                                                                                     |
| composer.json                      | This file is very important. Here you will define the technical details which cpgg will use to work with. A Default composer.json would look like this<br/> 
```{
    "name": "1day2die/cpgg-discordwebhook",
    "description": "A Discord Message Webhook for controlpanel",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "OneDayToDie\\DiscordWebHook\\": "src/"
        }
    },
    "authors": [
        {
            "name": "1Day2Die",
            "email": "info@hafuga.de"
        }
    ],
    "extra": {
        "laravel": {
            "providers": [
                "OneDayToDie\\DiscordWebHook\\DiscordWebhookServiceProvider"
            ]
        }
    },
    "minimum-stability": "dev",
    "require": {}
}
|
```

* Name: This is the same as the Folder names you just created
* Description: Any description that suits your Package
* License: your prefered licence [like these](https://opensource.org/licenses)
* Authors: Your Details
* Providers: This is where the fun begins. This is the NameSpace path to your Serviceprovider file (more on that later)

A very Basic Package which you can use to build upon is the [DiscordWebhookPackage](https://github.com/1day2die/cpggdiscordwebhook)

## ServiceProvider
The Serviceprovider is the "heart" of your Package. Here everything needed is hooked and initialized.