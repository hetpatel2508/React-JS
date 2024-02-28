function update_data() {
  fetch(`http://localhost:1234/users/${Prefilled.id}`, {
    method: 'PATCH', // Use PATCH method for partial updates
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ name: Prefilled.name }), // Send only the properties to be updated
  })
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    fetch_data(); // Fetch updated data after successful update
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}