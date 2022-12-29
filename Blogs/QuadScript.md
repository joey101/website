Helloooooooo and "wElCoMe tO mY yOuTuBe cHaNnEl",


Alright alright so, I started this project in 29 Jan 2022 lol, but like if you want king of procastination this was it. I had no idea 
what I was doing, and let me be real i barely actually worked on it, I just kept saying I would.

So just one day i sat down like an NPC following a youtube drone design, spent 3 days doing it, realised I couldn't even manufacture it lol,
showed it off on my instagram then basically sacked off the design. Then I went and said lets just do the dumbest, most simplest design and bam got something printed.
Realised hwo dumb I am and that 10 mm isnt the same as 10cm pictured in my brain. So that design was nice for more photos and showing off, but was not 
practical. Now I moved on to my final design, mind you final design to actually getting this sh** to just fly off the ground lol not final in the grand scheme of
things i have planned for this drone. Designed with 2 platforms, 4 arms and the landing gear.


The programming, uft was that the biggest headache ever. So how to start, I bought 4 random motors and ESC from Alibaba on line, did I know what an ESC is, of courseeee I did 
not. I also bought a gryoscope, the MPU-6050, whyy some may ask, because yolo, seemed to fit the description of what I wanted and bam "worked".
https://oscarliang.com/esc-firmware-protocols/

So i initially tried programming the Gyro at the start of the year same time I was designing the initial shit design of the drone and when I was still a NPC at coding. Not
that much has changed. Used the MPU-6050 library, did not work, put it to the side left it for a year lol. Then i came back to it in December, and i wanted to reattempt
I used the 6050 library, and it worked, I wanted to remove a level of abstraction and wanted to use the datasheet in order to code it myself and understand how they just
randomly look at a chip and say "oh lets hack the mainframe" (no one says that) and basically code it, so started reasearching on how to read a data sheet and how to 
communciate using the i2c prtocol, and understanding different protocols. 

Before I begin the technical part disclaimer, I am explaining what I understood after all my research what I say could be the most insanely wrong thing in the world
because I am a BOT lol so correct me in the comments.
Essentially from what I understood, You initiate by sending it a sepecific bit address, the device will respond, you then send it a specific request, say for example
the mpu-6050 has a temp sensor, gryo and acceleromotor, essentially i tell it I want your Gyro, then I read the data sheet and see how that specific tool within the chip
will respond will respond and in what manner. For example the LETS SAY the gyro will respond with 8 bits, 01bxx111111 where each pair of 1's represents the axis 
in one address. Disclaimer i forgot what the data sheet says this is just an example.

Now moving on, Once i got to that, it all failed so I just went back to the 6050 library, because like sack that effort why reinvent the wheel, I will learn to 
communicate with a device and its datasheet when I need to. As I was saying, moving on to the ESC, OH BOY DID THIS do my head in, you see curiosity killed the cat in this 
sense, being exposed to datasheets, and having the mindset that when you see a chip, either find the library online or read a data sheet confused me for the ESC.
I looked, and looked, and wondered and had NO Bloody clue how to code this shit, I found a data sheet, did not know how to understand it, or use it to code. 
Then I was just lazily searched how to code an ESC (DO NOT ask me why i did not lead with a google search like this). AND VOILA found the answer on this GITHUB, 
https://github.com/lobodol/ESC-calibration   oh mate once I hooked up one motor and use this code, I almost orgasmed at the fact that it worked.

Now why did it work some may ask, well down I went a rabbit hole of trying to understand, an ESC, coding it and controlling motors. TLDR ESC all have standard firmware on 
them and the firmware translates known protocols for communciating to them into signals for the motor to turn, example PWM, Dshot, etc these are all different ways of sending
signals to the motor through the ESC and the esc just knows how to convert them and talk to the motor. And thankfully ESC's accept PWM which an arduino alraedy has a library
for. What's PWM? well, go google because sack trying to explain, it isn't that hard to understand.

[back](../projects/quadcopter.html)





