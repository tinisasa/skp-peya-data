const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {

  console.log('*************** In com.bohemiancoding.peya-cuisines Start: onStartup');
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'PeYa Cuisines Data', 'SupplyCuisineNames')
  DataSupplier.registerDataSupplier('public.image', 'PeYa Cuisines Pictures', 'SupplyCuisinePictures')

  console.log('*************** In com.bohemiancoding.peya-cuisines End: onStartup');
}

export function onShutdown () {
  console.log('*************** In com.bohemiancoding.datasupplier.example onShutdown');

  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyCuisineNames (context) {
  console.log('*************** In onSupplyNames');
  console.log('*************** Data description: ' + context.data.description)
  console.log('*************** isSymbolInstanceOverride: ' + context.data.isSymbolInstanceOverride)

  let dataKey = context.data.key
  let dataCount = context.data.requestedCount;

  // let dataIndex = 0;
  // while (dataIndex < dataCount) {
  //   DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
  //   dataIndex++;  
  // } 

  const cuisinesNames = ['Hamburguesas', 'Chivitos', 'Pizzas', 'Empanadas', 'Papas Fritas']
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = cuisinesNames[index]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onSupplyCuisinePictures (context) {
  console.log('*************** In onSupplyPictures');
  console.log('*************** Data description: ' + context.data.description)
  console.log('*************** isSymbolInstanceOverride: ' + context.data.isSymbolInstanceOverride)

  let dataKey = context.data.key
  let dataCount = context.data.requestedCount;

  // let dataIndex = 0;
  // while (dataIndex < dataCount) {
  //   DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
  //   dataIndex++;  
  // } 

  const cuisinesPictures = ['01-burger.png', '02-chivitos.png', '03-pizza.png', '04-empanadas.png', '05-papas.png']
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = cuisinesPictures[index]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}
