// googleOneTap.js

export async function googleOneTap({
  client_id,
  auto_select = false,
  cancel_on_tap_outside = false,
  context = "signin",
  ...otherOptions
}) {
  if (!client_id) {
    throw new Error("client_id is required");
  }

  const contextValue = ["signin", "signup", "use"].includes(context) ? context : "signin";

  // Construct the Google One Tap API request (conceptual)
  const url = 'https://accounts.google.com/gsi/client'; // This is a placeholder

  const options = {
    method: 'POST', // Adjust method if necessary
    headers: {
      'Content-Type': 'application/json',
      // Include additional headers if needed
    },
    body: JSON.stringify({
      client_id: client_id,
      auto_select: auto_select,
      cancel_on_tap_outside: cancel_on_tap_outside,
      context: contextValue,
      ...otherOptions,
    })
  };

  try {
    // Perform the fetch request
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Process the response as needed
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}