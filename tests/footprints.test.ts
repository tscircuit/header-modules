import { expect, test } from "bun:test"
import { fp } from "@tscircuit/footprinter"
import * as catalog from "../index"
import {
  ADAFRUIT_FEATHER_M0_EXPRESS_FOOTPRINT,
  ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS,
  ADAFRUIT_FEATHER_M4_EXPRESS_FOOTPRINT,
  ADAFRUIT_FEATHER_M4_EXPRESS_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_M4_EXPRESS_PIN_LABELS,
  ADAFRUIT_FEATHER_NRF52840_EXPRESS_FOOTPRINT,
  ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_LABELS,
  ADAFRUIT_FEATHER_RP2040_FOOTPRINT,
  ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_RP2040_PIN_LABELS,
  ADAFRUIT_FEATHER_STM32F405_EXPRESS_FOOTPRINT,
  ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS,
  ADAFRUIT_FEATHER_ESP32_V2_FOOTPRINT,
  ADAFRUIT_FEATHER_ESP32_V2_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS,
  ADAFRUIT_FEATHER_ESP32_S2_FOOTPRINT,
  ADAFRUIT_FEATHER_ESP32_S2_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_ESP32_S2_PIN_LABELS,
  ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_FOOTPRINT,
  ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_LABELS,
  POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_FOOTPRINT,
  POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES,
  POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_LABELS,
  SEEED_XIAO_RP2040_FOOTPRINT,
  SEEED_XIAO_RP2040_PIN_ATTRIBUTES,
  SEEED_XIAO_RP2040_PIN_LABELS,
} from "../index"

type PlatedHole = {
  x: number
  y: number
}

const getPlatedHoles = (footprint: string) =>
  fp
    .string(footprint)
    .circuitJson()
    .filter((element) => element.type === "pcb_plated_hole")

const getRows = (holes: PlatedHole[]) =>
  [...new Set(holes.map(({ y }) => y))].sort((a, b) => a - b)

test("Adafruit Feather RP2040 is a 12+16 female header footprint", () => {
  const footprint = fp.string(ADAFRUIT_FEATHER_RP2040_FOOTPRINT)
  const holes = getPlatedHoles(ADAFRUIT_FEATHER_RP2040_FOOTPRINT)
  const rows = getRows(holes)

  expect(footprint.params().female).toBe(true)
  expect(holes).toHaveLength(28)
  expect(rows).toHaveLength(2)
  expect(rows[1] - rows[0]).toBeCloseTo(20.32)
  expect(rows.map((y) => holes.filter((hole) => hole.y === y).length)).toEqual([
    16, 12,
  ])
})

test("Adafruit Feather M0 Express is a 12+16 female header footprint", () => {
  const footprint = fp.string(ADAFRUIT_FEATHER_M0_EXPRESS_FOOTPRINT)
  const holes = getPlatedHoles(ADAFRUIT_FEATHER_M0_EXPRESS_FOOTPRINT)
  const rows = getRows(holes)

  expect(footprint.params().female).toBe(true)
  expect(holes).toHaveLength(28)
  expect(rows).toHaveLength(2)
  expect(rows[1] - rows[0]).toBeCloseTo(20.32)
  expect(rows.map((y) => holes.filter((hole) => hole.y === y).length)).toEqual([
    16, 12,
  ])
})

test("Adafruit Feather M4 Express is a 12+16 female header footprint", () => {
  const footprint = fp.string(ADAFRUIT_FEATHER_M4_EXPRESS_FOOTPRINT)
  const holes = getPlatedHoles(ADAFRUIT_FEATHER_M4_EXPRESS_FOOTPRINT)
  const rows = getRows(holes)

  expect(footprint.params().female).toBe(true)
  expect(holes).toHaveLength(28)
  expect(rows).toHaveLength(2)
  expect(rows[1] - rows[0]).toBeCloseTo(20.32)
  expect(rows.map((y) => holes.filter((hole) => hole.y === y).length)).toEqual([
    16, 12,
  ])
})

test("Seeed XIAO RP2040 is a 2x7 female header footprint", () => {
  const footprint = fp.string(SEEED_XIAO_RP2040_FOOTPRINT)
  const holes = getPlatedHoles(SEEED_XIAO_RP2040_FOOTPRINT)
  const rows = getRows(holes)

  expect(footprint.params().female).toBe(true)
  expect(holes).toHaveLength(14)
  expect(rows).toHaveLength(2)
  expect(rows[1] - rows[0]).toBeCloseTo(15.24)
  expect(rows.map((y) => holes.filter((hole) => hole.y === y).length)).toEqual([
    7, 7,
  ])
})

test("header modules include a silkscreen pin-one arrow", () => {
  const arrow = fp
    .string(SEEED_XIAO_RP2040_FOOTPRINT)
    .circuitJson()
    .find(
      (element) =>
        element.type === "pcb_silkscreen_path" &&
        element.pcb_silkscreen_path_id === "pin_marker_1",
    )

  expect(arrow).toMatchObject({
    pcb_component_id: "pin_marker_1",
    layer: "top",
  })
  if (arrow?.type === "pcb_silkscreen_path") {
    expect(arrow.route[0]).toMatchObject({ x: -8.57, y: 7.62 })
    expect(arrow.route[3]).toMatchObject({ x: -8.57, y: 7.62 })
  }
})

test("Pololu A4988 carrier is a 2x8 female header footprint", () => {
  const footprint = fp.string(
    POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_FOOTPRINT,
  )
  const holes = getPlatedHoles(
    POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_FOOTPRINT,
  )
  const rows = getRows(holes)

  expect(footprint.params().female).toBe(true)
  expect(holes).toHaveLength(16)
  expect(rows).toHaveLength(2)
  expect(rows[1] - rows[0]).toBeCloseTo(12.7)
  expect(rows.map((y) => holes.filter((hole) => hole.y === y).length)).toEqual([
    8, 8,
  ])
})

const primaryLabels = (labels: Record<string, readonly string[]>) =>
  Object.values(labels).map(([primary]) => primary)

test("every Feather RP2040 header pin has pinAttributes", () => {
  expect(Object.keys(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES).sort()).toEqual(
    primaryLabels(ADAFRUIT_FEATHER_RP2040_PIN_LABELS).sort(),
  )
  expect(ADAFRUIT_FEATHER_RP2040_PIN_LABELS.pin1).toContain("BAT")
  expect(ADAFRUIT_FEATHER_RP2040_PIN_LABELS.pin28).toContain("D4")
  expect(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES.BAT).toMatchObject({
    providesPower: true,
  })
  expect(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES.USB).toMatchObject({
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
  })
  expect(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES.GND).toMatchObject({
    requiresGround: true,
    providesGround: true,
  })
  expect(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES.A0.capabilities).toContain(
    "i2c_sda",
  )
  expect(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES.D13.capabilities).toContain(
    "spi_cs",
  )
  expect(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES.TX.capabilities).toEqual(
    expect.arrayContaining(["uart_tx", "spi_miso", "i2c_sda"]),
  )
  expect(ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES.RX.capabilities).toEqual(
    expect.arrayContaining(["uart_rx", "spi_cs", "i2c_scl"]),
  )
})

test("every Feather M0 Express header pin has pinAttributes", () => {
  expect(
    Object.keys(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES).sort(),
  ).toEqual(primaryLabels(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS).sort())
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS.pin4).toContain("PA17")
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS.pin8).toContain("A7")
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS.pin23).toContain("PB11")
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES.USB).toMatchObject({
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
  })
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES.SCL.capabilities).toContain(
    "i2c_scl",
  )
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES.SDA.capabilities).toContain(
    "i2c_sda",
  )
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES.SCK.capabilities).toContain(
    "spi_sck",
  )
  expect(ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES.RX.capabilities).toContain(
    "uart_rx",
  )
})

test("every Feather M4 Express header pin has pinAttributes", () => {
  expect(
    Object.keys(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_ATTRIBUTES).sort(),
  ).toEqual(primaryLabels(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_LABELS).sort())
  expect(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_LABELS.pin4).toContain("PA23")
  expect(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_LABELS.pin17).toContain("DAC0")
  expect(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_LABELS.pin23).toContain("PA17")
  expect(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_ATTRIBUTES["3V"]).toMatchObject({
    providesPower: true,
    providesVoltage: "3.3V",
  })
  expect(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_ATTRIBUTES.GND).toMatchObject({
    requiresGround: true,
    providesGround: true,
  })
  expect(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_ATTRIBUTES.SDA.capabilities).toContain(
    "i2c_sda",
  )
  expect(
    ADAFRUIT_FEATHER_M4_EXPRESS_PIN_ATTRIBUTES.MOSI.capabilities,
  ).toContain("spi_mosi")
  expect(ADAFRUIT_FEATHER_M4_EXPRESS_PIN_ATTRIBUTES.TX.capabilities).toContain(
    "uart_tx",
  )
})

test("Feather nRF52840 Express uses the researched nRF52840 aliases", () => {
  expect(
    Object.keys(ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_ATTRIBUTES).sort(),
  ).toEqual(primaryLabels(ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_LABELS).sort())
  expect(ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_LABELS.pin4).toContain("P1.09")
  expect(ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_LABELS.pin28).toContain("NFC2")
  expect(ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_ATTRIBUTES.SCL).toMatchObject({
    needsExternalPullup: true,
  })
  expect(
    fp.string(ADAFRUIT_FEATHER_NRF52840_EXPRESS_FOOTPRINT).params().female,
  ).toBe(true)
})

test("Feather STM32F405 Express uses its STM32F405 header aliases", () => {
  expect(
    Object.keys(ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_ATTRIBUTES).sort(),
  ).toEqual(primaryLabels(ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS).sort())
  expect(ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS.pin4).toContain("PC1")
  expect(ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS.pin17).toContain("PA4")
  expect(ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS.pin28).toContain("BOOT0")
  expect(
    ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_ATTRIBUTES.SDA.capabilities,
  ).toContain("i2c_sda")
  expect(
    fp.string(ADAFRUIT_FEATHER_STM32F405_EXPRESS_FOOTPRINT).params().female,
  ).toBe(true)
})

test("ESP32 Feather V2 preserves its NC and input-only header positions", () => {
  expect(Object.keys(ADAFRUIT_FEATHER_ESP32_V2_PIN_ATTRIBUTES).sort()).toEqual(
    primaryLabels(ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS).sort(),
  )
  expect(ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS.pin15).toEqual(["NC"])
  expect(ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS.pin17).toContain("DAC2")
  expect(ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS.pin28).toContain("GPIO37")
  expect(ADAFRUIT_FEATHER_ESP32_V2_PIN_ATTRIBUTES.NC).toMatchObject({
    doNotConnect: true,
  })
  expect(fp.string(ADAFRUIT_FEATHER_ESP32_V2_FOOTPRINT).params().female).toBe(
    true,
  )
})

test("ESP32-S2 Feather preserves its second 3V3 and debug TX positions", () => {
  expect(Object.keys(ADAFRUIT_FEATHER_ESP32_S2_PIN_ATTRIBUTES).sort()).toEqual(
    primaryLabels(ADAFRUIT_FEATHER_ESP32_S2_PIN_LABELS).sort(),
  )
  expect(ADAFRUIT_FEATHER_ESP32_S2_PIN_LABELS.pin11).toContain("GPIO4")
  expect(ADAFRUIT_FEATHER_ESP32_S2_PIN_LABELS.pin17).toContain("DAC_2")
  expect(ADAFRUIT_FEATHER_ESP32_S2_PIN_LABELS.pin15).toContain("3V3")
  expect(ADAFRUIT_FEATHER_ESP32_S2_PIN_LABELS.pin28).toContain("DEBUG_TX")
  expect(ADAFRUIT_FEATHER_ESP32_S2_PIN_ATTRIBUTES.DEBUG_TX).toMatchObject({
    capabilities: ["uart_tx"],
  })
  expect(fp.string(ADAFRUIT_FEATHER_ESP32_S2_FOOTPRINT).params().female).toBe(
    true,
  )
})

test("ESP32-S3 4MB/2MB Feather has no DAC aliases", () => {
  expect(
    Object.keys(
      ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_ATTRIBUTES,
    ).sort(),
  ).toEqual(
    primaryLabels(
      ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_LABELS,
    ).sort(),
  )
  expect(
    ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_LABELS.pin17,
  ).not.toContain("DAC_2")
  expect(
    ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_LABELS.pin28,
  ).toContain("TXD0")
  expect(
    ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_ATTRIBUTES.A0,
  ).toMatchObject({
    isGpio: true,
  })
  expect(
    fp.string(ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_FOOTPRINT).params()
      .female,
  ).toBe(true)
})

test("every XIAO RP2040 header pin has pinAttributes", () => {
  expect(Object.keys(SEEED_XIAO_RP2040_PIN_ATTRIBUTES).sort()).toEqual(
    primaryLabels(SEEED_XIAO_RP2040_PIN_LABELS).sort(),
  )
  expect(SEEED_XIAO_RP2040_PIN_LABELS.pin2).toContain("XIAO_PIN1")
  expect(SEEED_XIAO_RP2040_PIN_LABELS.pin1).toContain("XIAO_PIN14")
  expect(SEEED_XIAO_RP2040_PIN_ATTRIBUTES["5V"]).toMatchObject({
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
  })
  expect(SEEED_XIAO_RP2040_PIN_ATTRIBUTES.D4.capabilities).toContain("i2c_sda")
  expect(SEEED_XIAO_RP2040_PIN_ATTRIBUTES.D7.capabilities).toEqual(
    expect.arrayContaining(["uart_rx", "spi_cs", "i2c_scl"]),
  )
  expect(SEEED_XIAO_RP2040_PIN_ATTRIBUTES.D6.capabilities).toEqual(
    expect.arrayContaining(["uart_tx", "spi_miso", "i2c_sda"]),
  )
  expect(SEEED_XIAO_RP2040_PIN_ATTRIBUTES.D8.capabilities).toContain("spi_sck")
})

test("every Pololu A4988 carrier pin has pinAttributes", () => {
  expect(
    Object.keys(
      POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES,
    ).sort(),
  ).toEqual(
    primaryLabels(POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_LABELS).sort(),
  )
  expect(POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_LABELS.pin1).toContain(
    "ENABLE",
  )
  expect(POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_LABELS.pin2).toContain(
    "VMOT",
  )
  expect(
    POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES.VMOT,
  ).toMatchObject({
    requiresPower: true,
    mustBeConnected: true,
  })
  expect(
    POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES.GND_MOTOR,
  ).toMatchObject({
    requiresGround: true,
    mustBeConnected: true,
  })
  expect(
    POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES.MS1,
  ).toMatchObject({
    canUseInternalPulldown: true,
    isUsingInternalPulldown: true,
  })
  expect(
    POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES.STEP,
  ).toMatchObject({ mustBeConnected: true })
  expect(
    POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES.DIR,
  ).toMatchObject({ mustBeConnected: true })
})

test("every catalog module has a female footprint and complete pinAttributes", () => {
  const runtimeCatalog = catalog as Record<string, unknown>
  const footprintExports = Object.keys(runtimeCatalog).filter((exportName) => {
    if (!exportName.endsWith("_FOOTPRINT")) return false
    const prefix = exportName.slice(0, -"_FOOTPRINT".length)
    return `${prefix}_PIN_LABELS` in runtimeCatalog
  })

  expect(footprintExports.length).toBeGreaterThanOrEqual(428)

  for (const footprintExport of footprintExports) {
    const prefix = footprintExport.slice(0, -"_FOOTPRINT".length)
    const footprint = runtimeCatalog[footprintExport] as string
    const labels = runtimeCatalog[`${prefix}_PIN_LABELS`] as Record<
      string,
      readonly string[]
    >
    const attributes = runtimeCatalog[`${prefix}_PIN_ATTRIBUTES`] as Record<
      string,
      unknown
    >
    const primary = primaryLabels(labels)

    expect(new Set(primary).size).toBe(primary.length)
    expect(Object.keys(attributes).sort()).toEqual([...primary].sort())

    const footprintCircuitJson = fp.string(footprint).circuitJson()
    expect(fp.string(footprint).params().female).toBe(true)
    expect(
      footprintCircuitJson.filter(
        (element) => element.type === "pcb_plated_hole",
      ),
    ).toHaveLength(primary.length)
  }
})
