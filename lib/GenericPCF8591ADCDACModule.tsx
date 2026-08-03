import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic PCF8591 ADC/DAC Module — I2C. */
export const GenericPCF8591ADCDACModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic PCF8591 ADC DAC)" as const;

export const GenericPCF8591ADCDACModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["A0"],
  pin6: ["A1"],
  pin7: ["A2"],
  pin8: ["A3"],
} as const;

export const GenericPCF8591ADCDACModule_PIN_ATTRIBUTES = {
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
  A0: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A3: {
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

export type GenericPCF8591ADCDACModuleProps = Omit<
  ChipProps<typeof GenericPCF8591ADCDACModule_PIN_LABELS>,
  FixedProps
>;

export const GenericPCF8591ADCDACModule = (
  props: GenericPCF8591ADCDACModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic PCF8591 ADC/DAC Module"
    mfn="Generic"
    footprint={GenericPCF8591ADCDACModule_FOOTPRINT}
    pinLabels={GenericPCF8591ADCDACModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "A0",
      pin6: "A1",
      pin7: "A2",
      pin8: "A3",
    }}
    pinAttributes={GenericPCF8591ADCDACModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["A0", "A1", "A2", "A3"],
      },
    }}
  />
);
