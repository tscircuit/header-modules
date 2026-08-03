import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun Thumb Joystick Breakout — dual analog + switch. */
export const SparkFunThumbJoystickBreakout_FOOTPRINT =
  "headermodule5_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun Thumb Joystick)" as const;

export const SparkFunThumbJoystickBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["X"],
  pin4: ["Y"],
  pin5: ["SW"],
} as const;

export const SparkFunThumbJoystickBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  X: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  Y: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SW: {
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

export type SparkFunThumbJoystickBreakoutProps = Omit<
  ChipProps<typeof SparkFunThumbJoystickBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunThumbJoystickBreakout = (
  props: SparkFunThumbJoystickBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun Thumb Joystick Breakout"
    mfn="SparkFun"
    footprint={SparkFunThumbJoystickBreakout_FOOTPRINT}
    pinLabels={SparkFunThumbJoystickBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "X",
      pin4: "Y",
      pin5: "SW",
    }}
    pinAttributes={SparkFunThumbJoystickBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "X"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["Y", "SW"],
      },
    }}
  />
);
