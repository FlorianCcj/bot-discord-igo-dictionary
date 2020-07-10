# Bot - Dreadnought

## Dependancies

cf package.json > engines

## Install

`npm i`

## Config

good luck with all variable in config.js

### Secret variable

rename `secret.js.example` in `secret.js`

| Var name                      | Desc                                                                                        |
|-------------------------------|---------------------------------------------------------------------------------------------|
| TOKEN                         | Auth token, you get it on [discordapp](discordapp.com/developers/applications/)             |
| PREFIX                        | the first char you write to easy command                                                    |

### For heroku

all in secret.js must be in variable

### Rights

## Lauch dev

in `config.js` be sur of `exports.ENV = 'dev';`

then `npm run serve`

## Production with heroku

* on discordapp.com/developers/applications/
* create an application (it will be the bot s name)
* bot > add a bot > Token > copy > paste it in your secret
* oauth2 > check bot > copy link > open in a new tab > add the bot to your server


* on https://dashboard.heroku.com/login
* new app > deploy > do ... as you want or as you can to add code (you can find it in https://github.com/FlorianCcj/bot-dreadnought)
* settings > Configs Vars > Reveal Configs Vars > set all your vars
* Deploy > Manual deploy > Deploy Branch
* Resources > activate `web` and `worker`
* if you want to see log: more > views logs

## To top.gg

### Desc

igo_dictionnary is the first discord bot related with the anciant strategical chinese game popularized by japan : the so called game of go.
Its main aim is to help beginners in their go journey by clarifying the fearsome go jargon.
Through elegant and efficient commands, the user is able to acces to a large number of go related thermes with flawless definitions and explicit illustrations alongside.
In this manner, concepts such as 'ishi no shita' or 'sabaki' will have no secrets for the neophyte.
Ultimately our igo_dictionnary bot will act like a giant online vivid and interactiv encyclopedia, providing the go discord community a top-notch educational tool.

## Still todo

* test
