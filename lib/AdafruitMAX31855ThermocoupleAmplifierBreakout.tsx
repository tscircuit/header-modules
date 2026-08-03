import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX31855 Thermocouple Amplifier Breakout. Header order: VIN, V3_3, GND, MISO, T_PLUS, T_MINUS. */
export const AdafruitMAX31855ThermocoupleAmplifierBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MAX31855)" as const;

export const AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_LABELS = {
  pin1: ["VIN", "+5V", "5V"],
  pin2: ["V3_3", "+3V3", "3V3"],
  pin3: ["GND"],
  pin4: ["MISO", "DO", "DOUT"],
  pin5: ["T_PLUS", "T+", "THERMOCOUPLE_PLUS"],
  pin6: ["T_MINUS", "T-", "THERMOCOUPLE_MINUS"],
} as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const SPI_MISO = {
  ...GPIO,
  capabilities: ["spi_miso"],
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
const CONTACT = {
  mustBeConnected: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_INPUT,
  GND: GROUND,
  MISO: SPI_MISO,
  T_PLUS: CONTACT,
  T_MINUS: CONTACT,
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

export type AdafruitMAX31855ThermocoupleAmplifierBreakoutProps = Omit<
  ChipProps<typeof AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMAX31855ThermocoupleAmplifierBreakout = (
  props: AdafruitMAX31855ThermocoupleAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX31855 Thermocouple Amplifier Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-max31855-thermocouple-amplifier/pinouts"
    footprint={AdafruitMAX31855ThermocoupleAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "MISO",
      pin5: "T_PLUS",
      pin6: "T_MINUS",
    }}
    pinAttributes={AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MISO", "T_PLUS", "T_MINUS"],
      },
    }}
  />
);
