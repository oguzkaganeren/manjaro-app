This directory contains configuration variables in 3 files:

- `index.dev.tsx` : contains development variables
- `index.production.tsx` : contains production variables
- `index.staging.tsx` : contains beta tests variables

You need to create `index.tsx` by copying the right file.

#### Warning

Each time you need to build, you need to verify if your `index.tsx` is the right one.
For example, during development, before building your app do:

```
cp App\Config\index.dev.tsx App\Config\index.tsx
```

In other environment, you must pay attention to change your `index.tsx` with the good one.
Also, make sure you add each configuration variable in each configuration file.

#### Usage

```
import Config from 'App/Config'

...
let uri = Config.API_URL
...

```
