export const up = (client) => {
  client.writeCoil(2058, true).catch((err) => console.error('Modbus write error:', err))
}

// Function to handle "down" command
export const down = (client) => {
  client.writeCoil(2059, true).catch((err) => console.error('Modbus write error:', err))
}
export const setEncoderZero = (client) => {
  client.writeCoil(2299, true).catch((err) => console.error('Modbus write error:', err))
}
