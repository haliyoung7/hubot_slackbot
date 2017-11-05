//This section prompts Rosie to RESPOND

module.exports = function(rosie) {
	rosie.hear(/Hey/, function(res) {
		return res.send("sup dude");
	});

	rosie.hear(/badger/i, function(res) {
		return res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
	});

	rosie.respond(/open the pod bay doors/i, function(res) {
		return res.reply("I'm afraid I can't let you do that.");
	});

	rosie.hear(/Please welcome (.*) and (.*)/i, function(msg) {
		var a;
		var b;
		a = msg.match[1];
		b = msg.match[2];
		return msg.reply("Welcome "+ a + " and " + b + ". Have a glorious day.");
	});

	rosie.respond(/open the (.*) doors/i, function(res) {
		doorType = res.match[1];
		if (doorType == "pod bay") {
			return res.reply("I'm afraid I can't let you do that.");
		} else {
			return res.reply("Opening " + doorType + " doors");
		}
	});

	var dogs = ["Golden Retriever", "Bulldog", "Terrier", "Weimeraner"]

	rosie.hear(/what is your favorite dog/i,function(res){
		var randomDog = dogs[Math.floor(dogs.length * Math.random())];
		console.log(randomDog);
		return res.reply("I don't have a favorite, but if I were to choose, I'd say " + randomDog);
	});

};

//This section prompts Rosie to SEND



//This section prompts Rosie to REPLY


// module.exports = function(rosie) {
//   rosie.respond (/open the pod bay doors/i, function(res) {
//     res.reply "I'm afraid I can't let you do that."
//   });

// module.exports = function(rosie) {
//   rosie.hear (/I like pie/i, function(res) {
//     res.emote "makes a freshly baked pie"
//   });

//This section prompts Rosie to RANDOMIZE






