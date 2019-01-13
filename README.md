# Github-Notify
## Very small and simple program to to recieve webhooks and then play a sound from a passive buzzer
An http server is run with nodeJS and waits for webhooks, in this case from github. When the webhook is recieved, a C program is
executed and plays a song on an rPi buzzer.

#### Install instructions
* You will need to be running debian on the raspberryPi
* Installing node JS on my rPi was by far the hardest part of this process for me. I believe the trouble I was having was because I am using a raspberryPi zero. I had to downgrade the version of node for my particular ARM processor.
* You will need to install WiringPi on the raspberryPi to allow usage of the GPIO pins with this particular c program
* You will need to install and configure NGROK to allow data from the internet to reach the server
* place the the source folders in your home dir
* you should be all set to run your webhook server

#### To Run
* You will need to run ngrok on the port you plan to use, I reccomend 8080 (makes things easier)
* go to the github repository you want to get notifications from
* take the forwarding address provided in your instance of Ngrok
* Paste the address in the github webhook setup
* Start a new terminal, run the webhook server with "node Server.js"
* Boom, you should be ready to get a webhook. If you have the same speaker setup I do, you should hear a little song when you get a webhook.

## Dependencies
* WiringPI
* NodeJS

## Wiring setup
![alt text](https://github.com/austin0150/Github-Notify/blob/master/Images/20190101_184255.jpg "Wiring image")
* 5V to pin 2 (5V)
* GND to pin 6 (GND)
* Signal to pin 11 (GPIO 17)
