import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit PCA9685 16-Channel PWM/Servo Driver — I2C. */
export const AdafruitPCA968516ChannelPWMServoDriver_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit PCA9685 16-Channel PW)" as const;

export const AdafruitPCA968516ChannelPWMServoDriver_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitPCA968516ChannelPWMServoDriver_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SDA: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  SCL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
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

export type AdafruitPCA968516ChannelPWMServoDriverProps = Omit<
  ChipProps<typeof AdafruitPCA968516ChannelPWMServoDriver_PIN_LABELS>,
  FixedProps
>;

export const AdafruitPCA968516ChannelPWMServoDriver = (
  props: AdafruitPCA968516ChannelPWMServoDriverProps,
) => (
  <chip
    {...props}
    displayName="Adafruit PCA9685 16-Channel PWM/Servo Driver"
    mfn="Adafruit"
    footprint={AdafruitPCA968516ChannelPWMServoDriver_FOOTPRINT}
    pinLabels={AdafruitPCA968516ChannelPWMServoDriver_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitPCA968516ChannelPWMServoDriver_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);
