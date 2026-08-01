# @tscircuit/header-modules

Model-specific tscircuit components for development boards that plug into
female pin headers.

The package currently includes:

- `AdafruitFeatherRP2040`: the Adafruit Feather RP2040 with one 12-pin row,
  one 16-pin row, and the supported I2C/SPI/UART mux capabilities for every
  exposed GPIO.
- `SeeedXiaoRP2040`: the Seeed Studio XIAO RP2040 with two 7-pin rows and all
  14 header pins mapped to the board and RP2040 names.

Each component is a single `<chip />` backed entirely by a female `pinrow`
footprinter string. Every exposed header pin has `pinAttributes`, including
GPIO behavior, internal pull support, I2C/SPI/UART capabilities, and explicit
power/ground direction and voltage where applicable.

## Usage

```tsx
import {
  AdafruitFeatherRP2040,
  SeeedXiaoRP2040,
} from "@tscircuit/header-modules"

export default () => (
  <board width="90mm" height="30mm">
    <AdafruitFeatherRP2040 name="U1" pcbX={-20} />
    <SeeedXiaoRP2040 name="U2" pcbX={30} />
  </board>
)
```

Both footprints place the USB connector on the negative PCB X side when
`pcbRotation={0}`. `Feather` and `Xiao` remain as deprecated aliases for the
two RP2040 models.

The exported model data includes:

- `ADAFRUIT_FEATHER_RP2040_FOOTPRINT`
- `ADAFRUIT_FEATHER_RP2040_PIN_LABELS`
- `ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES`
- `SEEED_XIAO_RP2040_FOOTPRINT`
- `SEEED_XIAO_RP2040_PIN_LABELS`
- `SEEED_XIAO_RP2040_PIN_ATTRIBUTES`

The XIAO component also provides `XIAO_PIN1` through `XIAO_PIN14` aliases for
Seeed's official header numbering. This keeps those numbers exact even though
the underlying generic pinrow footprinter has its own perimeter numbering.
All aliases are available in selectors; pass `showPinAliases` when you also
want them rendered inside the schematic symbol.

Pin mappings are based on the official
[Adafruit Feather RP2040 pinout](https://learn.adafruit.com/adafruit-feather-rp2040-pico/pinouts)
and [Seeed Studio XIAO RP2040 documentation](https://wiki.seeedstudio.com/XIAO-RP2040/).

## Footprinter compatibility

Independent row spacing and sparse pin grids are implemented in footprinter's
main branch but are not yet present in its latest published package. This repo
temporarily carries the matching upstream patch so installs and builds use the
correct geometry immediately. The patch can be removed after those features
are included in a footprinter release consumed by tscircuit.
