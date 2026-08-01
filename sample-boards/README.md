# Sample boards

## XIAO RP2040 + Pololu A4988 stepper controller

`xiao-rp2040-a4988-stepper-controller.circuit.tsx` combines the two pluggable
modules on a carrier board:

- XIAO `D0` → A4988 `STEP`
- XIAO `D1` → A4988 `DIR`
- XIAO `D2` → A4988 active-low `ENABLE`
- XIAO `3V3` → A4988 `VDD`, `RESET`, and `SLEEP`
- A4988 `MS1`, `MS2`, and `MS3` → ground for full-step mode
- separate 8–35 V motor input with a local 100 µF / 50 V electrolytic capacitor
- four-pin bipolar stepper output in `1A`, `1B`, `2A`, `2B` order

Build this example directly with:

```sh
npx tsci build sample-boards/xiao-rp2040-a4988-stepper-controller.circuit.tsx --disable-parts-engine
```

The XIAO is powered through USB; motor power is separate. Never connect the
motor supply to a XIAO power pin. Set the A4988 current limit for the motor
before use, and never connect or disconnect the motor while the driver is
powered. The connector footprints are generic examples; choose connectors and
traces rated for the motor's actual current in a production board.

The power range, control behavior, and recommendation for at least 47 µF of
local motor-supply bulk capacitance come from Pololu's
[A4988 carrier documentation](https://www.pololu.com/product/1182).
