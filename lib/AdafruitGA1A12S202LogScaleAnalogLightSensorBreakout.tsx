import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit GA1A12S202 Log-Scale Analog Light Sensor Breakout. Header order: VCC, GND, OUT. */
export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(GA1A12S202)" as const;

export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_LABELS = {
  pin1: ["VCC", "VIN", "VDD"],
  pin2: ["GND"],
  pin3: ["OUT", "AO", "ANALOG_OUT"],
} as const;

const ANALOG = {
  isGpio: true,
  includeInBoardPinout: true,
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

export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_ATTRIBUTES =
  {
    VCC: POWER_INPUT,
    GND: GROUND,
    OUT: ANALOG,
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

export type AdafruitGA1A12S202LogScaleAnalogLightSensorBreakoutProps = Omit<
  ChipProps<
    typeof AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_LABELS
  >,
  FixedProps
>;

export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout = (
  props: AdafruitGA1A12S202LogScaleAnalogLightSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit GA1A12S202 Log-Scale Analog Light Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-ga1a12s202-log-scale-analog-light-sensor/pinouts"
    footprint={AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={
      AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);
