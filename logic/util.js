"use strict"
function Util() {
  function calculateTotalDistributedPassengers(distributedPassengers) {
    let totalPassengers = 0;
    totalPassengers +=
      distributedPassengers.vipPassengersWithBusinessSeats +
      distributedPassengers.vipPassengersWithEconomySeats +
      distributedPassengers.regularPassengersWithBusinessSeats +
      distributedPassengers.regularPassengersWithEconomySeats;

    return totalPassengers;
  }

  function calculateTotalNumberOfPassengers(passengers) {
    let totalPassengers = 0;
    for (let passenger of passengers) {
      totalPassengers += passenger;
    }

    return totalPassengers;
  }

  function checkInput(input) {
    if (input === null || input.isNan()) {
      throw new Error("afwaf");
    }
  }

  function calculateTotalDistance(distances) {
    let totalDistance = 0;

    for (let distance of distances) {
      if (distance > 0) {
        totalDistance += distance;
      }
    }

    return totalDistance;
  }

  function calculateBonusPoints(businessDistances, economyDistances, businessBonusPercent, economyBonusPercent) {
    let totalPoints = 0;
    let businessDistance = calculateTotalDistance(businessDistances);
    let economyDistance = calculateTotalDistance(economyDistances);

    let buisnessPoints = businessDistance * (businessBonusPercent / 100);
    let economyPoints = economyDistance * (economyBonusPercent / 100);

    totalPoints = buisnessPoints + economyPoints;

    return totalPoints;
  }

  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints };
}

module.exports = Util();
