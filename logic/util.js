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
    console.log("total passenger, is", totalPassengers)
    return totalPassengers;
  }

  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}

module.exports = Util();
