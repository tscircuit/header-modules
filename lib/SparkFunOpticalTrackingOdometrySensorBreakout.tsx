import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun Optical Tracking Odometry Sensor Breakout. Header order: V3_3, GND, SCK, MOSI, MISO, CS. */
export const SparkFunOpticalTrackingOdometrySensorBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ODOMETRY)" as const;

export const SparkFunOpticalTrackingOdometrySensorBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC"],
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
const POWER_INPUT_3V3 = {
  requiresPower: true,
  requiresVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const SparkFunOpticalTrackingOdometrySensorBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT_3V3,
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

export type SparkFunOpticalTrackingOdometrySensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunOpticalTrackingOdometrySensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunOpticalTrackingOdometrySensorBreakout = (
  props: SparkFunOpticalTrackingOdometrySensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun Optical Tracking Odometry Sensor Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/optical-tracking-odometry-sensor-hookup-guide/all"
    footprint={SparkFunOpticalTrackingOdometrySensorBreakout_FOOTPRINT}
    pinLabels={SparkFunOpticalTrackingOdometrySensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
    }}
    pinAttributes={SparkFunOpticalTrackingOdometrySensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "GND", "SCK"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MOSI", "MISO", "CS"],
      },
    }}
  />
);
