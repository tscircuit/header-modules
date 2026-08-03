import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic HM-10 BLE Module with Baseboard — UART. */
export const GenericHM10BLEModuleWithBaseboard_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic HM-10 BLE with Baseboa)" as const;

export const GenericHM10BLEModuleWithBaseboard_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const;

export const GenericHM10BLEModuleWithBaseboard_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  TX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
  },
  RX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_rx"],
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

export type GenericHM10BLEModuleWithBaseboardProps = Omit<
  ChipProps<typeof GenericHM10BLEModuleWithBaseboard_PIN_LABELS>,
  FixedProps
>;

export const GenericHM10BLEModuleWithBaseboard = (
  props: GenericHM10BLEModuleWithBaseboardProps,
) => (
  <chip
    {...props}
    displayName="Generic HM-10 BLE Module with Baseboard"
    mfn="Generic"
    footprint={GenericHM10BLEModuleWithBaseboard_FOOTPRINT}
    pinLabels={GenericHM10BLEModuleWithBaseboard_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
    }}
    pinAttributes={GenericHM10BLEModuleWithBaseboard_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["TX", "RX"],
      },
    }}
  />
);
