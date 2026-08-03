import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic PCM5102A I2S DAC Module — I2S/audio. */
export const GenericPCM5102AI2SDACModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic PCM5102A I2S DAC)" as const;

export const GenericPCM5102AI2SDACModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["VOUT"],
  pin6: ["LDAC"],
} as const;

export const GenericPCM5102AI2SDACModule_PIN_ATTRIBUTES = {
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
  VOUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  LDAC: {
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

export type GenericPCM5102AI2SDACModuleProps = Omit<
  ChipProps<typeof GenericPCM5102AI2SDACModule_PIN_LABELS>,
  FixedProps
>;

export const GenericPCM5102AI2SDACModule = (
  props: GenericPCM5102AI2SDACModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic PCM5102A I2S DAC Module"
    mfn="Generic"
    footprint={GenericPCM5102AI2SDACModule_FOOTPRINT}
    pinLabels={GenericPCM5102AI2SDACModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "VOUT",
      pin6: "LDAC",
    }}
    pinAttributes={GenericPCM5102AI2SDACModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "VOUT", "LDAC"],
      },
    }}
  />
);
