import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MCP2515 CAN Bus Module — SPI. */
export const GenericMCP2515CANBusModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic MCP2515 CAN Bus)" as const;

export const GenericMCP2515CANBusModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["CANH"],
  pin4: ["CANL"],
  pin5: ["RX"],
  pin6: ["TX"],
} as const;

export const GenericMCP2515CANBusModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  CANH: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  CANL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
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
  TX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
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

export type GenericMCP2515CANBusModuleProps = Omit<
  ChipProps<typeof GenericMCP2515CANBusModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMCP2515CANBusModule = (
  props: GenericMCP2515CANBusModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MCP2515 CAN Bus Module"
    mfn="Generic"
    footprint={GenericMCP2515CANBusModule_FOOTPRINT}
    pinLabels={GenericMCP2515CANBusModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "CANH",
      pin4: "CANL",
      pin5: "RX",
      pin6: "TX",
    }}
    pinAttributes={GenericMCP2515CANBusModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "CANH"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["CANL", "RX", "TX"],
      },
    }}
  />
);
