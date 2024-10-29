function CarInventory({ inventory }) {
  return (
    <div>
      <h2>Car Inventory</h2>
      {inventory.map((car) => (
        <div key={car.id} className="car-item">
          <h3>
            {car.model} ({car.year})
          </h3>
          <p>Price: ${car.price.toLocaleString()}</p>
          <h4>Dealer Information</h4>
          <p>Name: {car.dealer.name}</p>
          <p>Address: {car.dealer.address}</p>
          <p>Contact: {car.dealer.contact}</p>
          <h4>Manufacturer</h4>
          <p>Name: {car.manufacturer.name}</p>
          <p>Country: {car.manufacturer.country}</p>
        </div>
      ))}
    </div>
  )
}

export default CarInventory
