import { expect, test } from "bun:test"
import { fp } from "@tscircuit/footprinter"
import {
  ADAFRUIT_FEATHER_RP2040_FOOTPRINT,
  ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES,
  ADAFRUIT_FEATHER_RP2040_PIN_LABELS,
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
