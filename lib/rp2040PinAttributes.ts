import type { PinAttributeMap, PinCapability } from "@tscircuit/props"

const spiCapabilityByGpioModulo4 = [
  "spi_miso",
  "spi_cs",
  "spi_sck",
  "spi_mosi",
] as const satisfies readonly PinCapability[]

/** RP2040 GPIO mux capabilities supported by tscircuit's pinAttributes. */
export const rp2040Gpio = (gpioNumber: number): PinAttributeMap => {
  if (!Number.isInteger(gpioNumber) || gpioNumber < 0 || gpioNumber > 29) {
    throw new RangeError(`RP2040 GPIO must be an integer from 0 through 29`)
  }

  const modulo4 = gpioNumber % 4
  const capabilities: PinCapability[] = [
    spiCapabilityByGpioModulo4[modulo4],
    gpioNumber % 2 === 0 ? "i2c_sda" : "i2c_scl",
  ]

  if (modulo4 === 0) capabilities.push("uart_tx")
  if (modulo4 === 1) capabilities.push("uart_rx")

  return {
    isGpio: true,
    capabilities,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  }
}
