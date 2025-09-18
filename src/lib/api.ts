



export const fetchPatientData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = res.json()
    return data
  } catch (error) {
    console.log("Error fetching patients:", error)
    return [];
  }
}