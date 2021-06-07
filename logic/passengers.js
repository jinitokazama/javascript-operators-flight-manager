"use strict"
function Passengers() {
  function checkFlightCapacity(flightCapacity, passengerNumbers) {
    let totalPassengers = 0;
    for (let person of passengerNumbers ) {
      totalPassengers += person;
    }

    if (totalPassengers < flightCapacity) {
      return totalPassengers;
    } else {
      throw new Error("nope")
    }
  }

  function distributeAllSeatsToAllPassengers(numberOfVipPassengers, numberOfNormalPassengers, numOfFlights, numOfBusiness, numOfEconomy) {
    let vipBusiness = 0;
    let vipEconomy = 0;
    let normalBusiness = 0;
    let normalEconomy = 0;

    let totalBusinessSeats = numOfBusiness * numOfFlights;
    let totalEconomySeats = numOfEconomy * numOfFlights;

    while (numberOfVipPassengers > 0 && totalBusinessSeats > 0) {
      vipBusiness++;
      numberOfVipPassengers--;
      totalBusinessSeats--;
    }

    if (numberOfVipPassengers > 0) {
      while (numberOfVipPassengers > 0 && totalEconomySeats > 0) {
        vipEconomy++;
        numberOfVipPassengers--;
        totalEconomySeats--;
      }
    }

    while (numberOfNormalPassengers > 0 && totalBusinessSeats > 0) {
      normalBusiness++;
      numberOfNormalPassengers--;
      totalBusinessSeats--;
    }

    if (numberOfNormalPassengers > 0) {
      while (numberOfNormalPassengers > 0 && totalEconomySeats > 0) {
        normalEconomy++;
        numberOfNormalPassengers--;
        totalEconomySeats--;
      }
    }

    return {vipPassengersWithBusinessSeats: vipBusiness, vipPassengersWithEconomySeats: vipEconomy, regularPassengersWithBusinessSeats: normalBusiness, regularPassengersWithEconomySeats: normalEconomy}
  }

  return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();
