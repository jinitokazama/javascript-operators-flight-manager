function Flights() {
  function calculateNumberOfFlights(numPassengers, flightCapacity) {
    if (numPassengers <= 0 || numPassengers % 1 !== 0) {
      throw new Error(
        "The number of passengers must be a positive integer value"
      );
    }
    if (flightCapacity <= 0 || flightCapacity % 1 !== 0) {
      throw new Error(
        "The capacity of the flight must be a positive integer value"
      );
    }
    let flights = Math.round(numPassengers / flightCapacity);
    if (numPassengers % flightCapacity !== 0) {
      flights++;
    }

    return flights;
  }

  function checkAircraftRevision(distanceLimit, distances) {
    let totalDistance = 0;
    for (let distance of distances) {
      totalDistance += distance;
    }

    if (totalDistance <= (distanceLimit / 2) ) {
      return "The revision needs to be done within the next 3 months";
    } else if (totalDistance > (distanceLimit / 2) && (totalDistance <= distanceLimit / 4 * 3)) {
      return "The revision needs to be done within the next 2 months";
    } else if (totalDistance > (distanceLimit / 4 * 3) && totalDistance <= distanceLimit) {
      return "The revision needs to be done within the next month";
    } else if (totalDistance > distanceLimit) {
      throw new Error("nope")
    }

  }

  return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();
