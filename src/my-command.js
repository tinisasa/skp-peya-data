const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'PeYa Cuisines Data', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.image', 'datademo', 'SupplyData')
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyData (context) {
  let dataKey = context.data.key
  const cuisinesNames = ['Hamburguesas', 'Chivitos', 'Pizzas', 'Empanadas', 'Papas Fritas']
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = cuisinesNames[index]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}
