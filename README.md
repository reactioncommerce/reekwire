# reekwire
Workaround for using CommonJS named exports in ES modules.

## Overview

In order to import named CommonJS exports inside ES modules, you currently need to employ a [workaround](https://nodejs.org/api/modules.html#modules_module_createrequire_filename).
This project simplifies the workaround, wrapping it up into one package.

## Usage

```
import require from "reekwire";

const { registerSchema } = require("@reactioncommerce/schemas");
```
