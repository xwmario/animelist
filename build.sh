git pull
sudo meteor update
sudo meteor build .
sudo mv animelist.tar.gz /opt/animelist/.
cd /opt/animelist/
sudo rm -rf bundle/
sudo tar -xvzf animelist.tar.gz
sudo rm -f animelist.tar.gz
cd bundle/programs/server/
sudo npm install
cd ../../..
sudo chown animelist -R *
sudo service animelist restart
