function getUpgrades() {
  return [
    {
      id: "tesla",
      title: "Tesla Package",
      price: "$50,000",
      includes: "Includes 2 Tesla Power walls and photovoltic roofing panels.",
    },
  ];
}

function getUpgrade(id) {
  var upgrades = getUpgrades();
  return upgrades.filter(function(upgrade) {
    return upgrade.id === id;
  })[0];
}
