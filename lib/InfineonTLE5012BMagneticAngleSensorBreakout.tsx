import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Infineon TLE5012B Magnetic Angle Sensor Breakout. Header order: VCC, GND, SCK, MOSI, MISO, CS. */
export const InfineonTLE5012BMagneticAngleSensorBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(TLE5012B)" as const;

export const InfineonTLE5012BMagneticAngleSensorBreakout_PIN_LABELS = {
  pin1: ["VCC", "VIN", "VDD"],
  pin2: ["GND"],
  pin3: ["SCK", "CLOCK"],
  pin4: ["MOSI", "SDI", "DIN"],
  pin5: ["MISO", "SDO", "DOUT"],
  pin6: ["CS", "!CS", "nCS"],
} as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const SPI_SCK = {
  ...GPIO,
  capabilities: ["spi_sck"],
} as const satisfies PinAttributeMap;
const SPI_MOSI = {
  ...GPIO,
  capabilities: ["spi_mosi"],
} as const satisfies PinAttributeMap;
const SPI_MISO = {
  ...GPIO,
  capabilities: ["spi_miso"],
} as const satisfies PinAttributeMap;
const SPI_CS = {
  ...GPIO,
  capabilities: ["spi_cs"],
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const InfineonTLE5012BMagneticAngleSensorBreakout_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type InfineonTLE5012BMagneticAngleSensorBreakoutProps = Omit<
  ChipProps<typeof InfineonTLE5012BMagneticAngleSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const InfineonTLE5012BMagneticAngleSensorBreakout = (
  props: InfineonTLE5012BMagneticAngleSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Infineon TLE5012B Magnetic Angle Sensor Breakout"
    mfn="Infineon"
    datasheetUrl="https://www.infineon.com/cms/en/product/sensor/magnetic-sensors/magnetic-position-sensors/tle5012b/"
    footprint={InfineonTLE5012BMagneticAngleSensorBreakout_FOOTPRINT}
    pinLabels={InfineonTLE5012BMagneticAngleSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
    }}
    pinAttributes={InfineonTLE5012BMagneticAngleSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCK"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MOSI", "MISO", "CS"],
      },
    }}
  />
);
