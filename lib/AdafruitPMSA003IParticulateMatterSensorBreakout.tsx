import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit PMSA003I Particulate Matter Sensor Breakout. Header order: VIN, V3_3, GND, SCL, SDA, RESET, SET. */
export const AdafruitPMSA003IParticulateMatterSensorBreakout_FOOTPRINT =
  "headermodule7_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(PMSA003I)" as const;

export const AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "5V"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["RESET", "RST", "!RESET"],
  pin7: ["SET", "ENABLE"],
} as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_OUTPUT_3V3 = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RESET: CONTROL,
  SET: CONTROL,
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

export type AdafruitPMSA003IParticulateMatterSensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitPMSA003IParticulateMatterSensorBreakout = (
  props: AdafruitPMSA003IParticulateMatterSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit PMSA003I Particulate Matter Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-pmsa003i-air-quality-breakout/pinouts"
    footprint={AdafruitPMSA003IParticulateMatterSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "RESET",
      pin7: "SET",
    }}
    pinAttributes={
      AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "RESET", "SET"],
      },
    }}
  />
);
