#!/bin/ash

echo '######################## Setting up global NPM folder #########################'
[[ ! -d ~/.npm-global ]] && mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

echo '############################# Setting up profile ##############################'
rm -f ~/.profile
echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.profile
echo "cd /vagrant" >> ~/.profile
