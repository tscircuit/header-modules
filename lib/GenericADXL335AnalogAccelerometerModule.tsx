import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic ADXL335 Analog Accelerometer Module — three analog axes. */
export const GenericADXL335AnalogAccelerometerModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic ADXL335 Analog Acceler)" as const;

export const GenericADXL335AnalogAccelerometerModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericADXL335AnalogAccelerometerModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "displayName"
  | "footprint"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type GenericADXL335AnalogAccelerometerModuleProps = Omit<
  ChipProps<typeof GenericADXL335AnalogAccelerometerModule_PIN_LABELS>,
  FixedProps
>;

export const GenericADXL335AnalogAccelerometerModule = (
  props: GenericADXL335AnalogAccelerometerModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic ADXL335 Analog Accelerometer Module"
    mfn="Generic"
    footprint={GenericADXL335AnalogAccelerometerModule_FOOTPRINT}
    pinLabels={GenericADXL335AnalogAccelerometerModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericADXL335AnalogAccelerometerModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
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
