import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic AS5048A Magnetic Encoder Breakout. Header order: VCC, GND, SCK, MOSI, MISO, CS. */
export const GenericAS5048AMagneticEncoderBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(AS5048A)" as const;

export const GenericAS5048AMagneticEncoderBreakout_PIN_LABELS = {
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

export const GenericAS5048AMagneticEncoderBreakout_PIN_ATTRIBUTES = {
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

export type GenericAS5048AMagneticEncoderBreakoutProps = Omit<
  ChipProps<typeof GenericAS5048AMagneticEncoderBreakout_PIN_LABELS>,
  FixedProps
>;

export const GenericAS5048AMagneticEncoderBreakout = (
  props: GenericAS5048AMagneticEncoderBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Generic AS5048A Magnetic Encoder Breakout"
    mfn="Generic"
    datasheetUrl="https://ams-osram.com/products/sensor-solutions/position-sensors/ams-as5048a"
    footprint={GenericAS5048AMagneticEncoderBreakout_FOOTPRINT}
    pinLabels={GenericAS5048AMagneticEncoderBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
    }}
    pinAttributes={GenericAS5048AMagneticEncoderBreakout_PIN_ATTRIBUTES}
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
