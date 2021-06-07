"use strict"
function Prices() {
  function calculateFinalPrice(basePrice, passengerVariation, flightVariation) {
    let totalPrice = 0;

    totalPrice = basePrice + (passengerVariation / 100) * basePrice + (flightVariation / 100) * (basePrice + (passengerVariation / 100) * basePrice);
    return totalPrice.toFixed(2);
  }

  function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
    let passengerValue = 0;
    let flightValue = 0;
    if (passengerType.toLowerCase() === "regular") {
      passengerValue = -.05;
    } else if (passengerType.toLowerCase() === "vip") {
      passengerValue = .05;
    }

    if (flightType.toLowerCase() === "economy") {
      flightValue = -.03;
    } else if (flightType.toLowerCase() === "business") {
      flightValue = .1;
    }

    return basePrice + passengerValue * basePrice + flightValue * (basePrice + passengerValue * basePrice);
  }

  function calculateTotalFinalPrice(numberOfSeats, passengerType, flightType, basePrice) {
    return numberOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType)
  }

  return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice };
}

module.exports = Prices();