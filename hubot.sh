mkdir myhubot
cd myhubot
sudo npm install -g hubot coffee-script yo generator-hubot
sudo yo hubot --adapter="slack"
sudo npm install hubot-slack --save