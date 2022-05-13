export default class Users {
  constructor(users) {
    this.users = users;
  }

  getItems() {
    return this.users;
  }

  findFurthersUsers() {
    let maxDist = -Infinity;
    let maxInd1 = 0;
    let maxInd2 = 1;
    for (let i = 0; i < this.users.length; i++) {
      for (let j = i + 1; j < this.users.length; j++) {
        let user1 = this.users[i];
        let user2 = this.users[j];
        let dist = distanceFrom(
          +user1.address.geolocation.lat,
          +user1.address.geolocation.long,
          +user2.address.geolocation.lat,
          +user2.address.geolocation.long
        );
        if (dist >= maxDist) {
          maxInd1 = i;
          maxInd2 = j;
          maxDist = dist;
        }
      }
    }

    return {
      dist: maxDist,
      user1: this.users[maxInd1],
      user2: this.users[maxInd2],
    };
  }

  getFullNameById(id) {
    for (const user of this.users) {
      if (user.id === id) {
        return { ...user.name };
      }
    }
  }
}

function distanceFrom(latitude1, longitude1, latitude2, longitude2) {
  let EarthRadius = 6371;
  let radians = (degree) => degree * (Math.PI / 180);
  let lat1 = radians(latitude1);
  let lat2 = radians(latitude2);
  let latitudeDiff = lat2 - lat1;
  let longitudeDiff = radians(longitude2 - longitude1);
  let c =
    Math.sin(latitudeDiff / 2) * Math.sin(latitudeDiff / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(longitudeDiff / 2) *
      Math.sin(longitudeDiff / 2);
  let distance = 2 * EarthRadius * Math.asin(Math.sqrt(c));
  return distance;
}
