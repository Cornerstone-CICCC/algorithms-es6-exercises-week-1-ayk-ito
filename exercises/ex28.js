/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  "your name": "",
  "the number of friends you have": 50,
  "an array of messages you've posted": ["Hello", "I am a student", "I am from Japan"],

  postMessage: function postMessage(masage) {
    facebookProfile["an array of messages you've posted"].push(masage);
  },
  deleteMessage: function deleteMessage(index) {
    facebookProfile["an array of messages you've posted"].splice(index, 1);
  },
  addFriend: function addFriend() {
    facebookProfile["the number of friends you have"] =
      facebookProfile["the number of friends you have"] + 1;
  },
  removeFriend: function removeFriend() {
    facebookProfile["the number of friends you have"] =
      facebookProfile["the number of friends you have"] - 1;
  },
};

facebookProfile["your name"] = "AYAKA ITO";
facebookProfile["the number of friends you have"] = 50;
facebookProfile["an array of messages you've posted"] = [
  "Hello",
  "I am a student",
  "I am from Japan",
];
facebookProfile.postMessage("I love McDonald's");
facebookProfile.deleteMessage(1);
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.removeFriend();

console.log(facebookProfile);
