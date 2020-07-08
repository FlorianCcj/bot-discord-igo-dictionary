# Bot - Dreadnought

## Dependancies

cf package.json > engines

## Install

`npm i`

## Config

good luck with all variable in config.js and secret.js

### Secret variable

| Var name                      | Desc                                                                                        |
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

## Still todo

* test
