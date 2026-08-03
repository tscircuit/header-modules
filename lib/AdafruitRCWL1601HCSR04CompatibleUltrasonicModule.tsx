import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit RCWL-1601 HC-SR04-Compatible Ultrasonic Module — trigger/echo. */
export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit RCWL-1601 HC-SR04-Com)" as const;

export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TRIG"],
  pin4: ["ECHO"],
} as const;

export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  TRIG: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  ECHO: {
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

export type AdafruitRCWL1601HCSR04CompatibleUltrasonicModuleProps = Omit<
  ChipProps<typeof AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_LABELS>,
  FixedProps
>;

export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule = (
  props: AdafruitRCWL1601HCSR04CompatibleUltrasonicModuleProps,
) => (
  <chip
    {...props}
    displayName="Adafruit RCWL-1601 HC-SR04-Compatible Ultrasonic Module"
    mfn="Adafruit"
    footprint={AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_FOOTPRINT}
    pinLabels={AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TRIG",
      pin4: "ECHO",
    }}
    pinAttributes={
      AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["TRIG", "ECHO"],
      },
    }}
  />
);
