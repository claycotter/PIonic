angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
  /**
    { id: 0, title: 'Raspberry Pi 1 Model A', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Raspberry Pi 1 Model A+', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Raspberry Pi 1 Model B', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Raspberry Pi 1 Model B+', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
    */
    { title: 'Raspberry Pi 1 Model A', description: 'Model A is the lower-spec variant of the Raspberry Pi, with 256 MB of RAM, one USB port and no Ethernet port.', releaseDate: '2013-02-01', id: 0, imageUrl: 'http://upload.wikimedia.org/wikipedia/commons/9/90/Front_of_Raspberry_Pi.jpg' },
    { title: 'Raspberry Pi 1 Model A+', description: 'Upgraded from the A model.', releaseDate: '2014-11-01', id: 1, imageUrl: 'https://cdn-shop.adafruit.com/145x109/2266-05.jpg' },
    { title: 'Raspberry Pi 1 Model B+', description: 'The Model B+ is the final revision of the original Raspberry Pi. It replaced the Model B in July 2014 and was superseded by the Raspberry Pi 2 Model B in February 2015.', releaseDate: '2014-07-01', id: 3, imageUrl: 'https://www.raspberrypi.org/wp-content/uploads/2014/07/rsz_b-.jpg' },
    { title: 'Raspberry Pi 2 Model B',  description: 'A 900MHz quad-core ARM Cortex-A7 CPU and 1GB RAM', releaseDate: '2015-02-01', id: 4, imageUrl: 'https://www.raspberrypi.org/wp-content/uploads/2015/01/Pi2ModB1GB_-comp-500x283.jpeg' },
    { title: 'Raspberry Pi 3 Model B', description: 'A 1.2GHz 64-bit quad-core ARMv8 CPU, 802.11n Wireless LAN, Bluetooth 4.1, Bluetooth Low Energy, and more', releaseDate: '2016-02-01', id: 5, imageUrl: 'http://ecx.images-amazon.com/images/I/51bulZIcJUL.jpg' },
    { title: 'Raspberry Pi Zero', description: 'The Raspberry Pi Zero is half the size of a Model A+, with twice the utility. A tiny Raspberry Pi thats affordable enough for any project.', releaseDate: '2015-11-01', id: 5, imageUrl: 'http://cdni.wired.co.uk/620x413/o_r/rasp2.jpg' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
