import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic PCF8574 I2C GPIO Expander Module — I2C. */
export const GenericPCF8574I2CGPIOExpanderModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic PCF8574 I2C GPIO Expan)" as const;

export const GenericPCF8574I2CGPIOExpanderModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const GenericPCF8574I2CGPIOExpanderModule_PIN_ATTRIBUTES = {
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

export type GenericPCF8574I2CGPIOExpanderModuleProps = Omit<
  ChipProps<typeof GenericPCF8574I2CGPIOExpanderModule_PIN_LABELS>,
  FixedProps
>;

export const GenericPCF8574I2CGPIOExpanderModule = (
  props: GenericPCF8574I2CGPIOExpanderModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic PCF8574 I2C GPIO Expander Module"
    mfn="Generic"
    footprint={GenericPCF8574I2CGPIOExpanderModule_FOOTPRINT}
    pinLabels={GenericPCF8574I2CGPIOExpanderModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={GenericPCF8574I2CGPIOExpanderModule_PIN_ATTRIBUTES}
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
