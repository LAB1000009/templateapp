// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function() {

//     const { Items } = this.entities;

//     // Реализация функции getItemsByQuantity
//     this.on('getItemsByQuantity', async (req) => {
//         const { quantity } = req.data;
//         return SELECT.from(Items).where({ quantity });
//     });

//     // Реализация действия createItem
//     this.on('createItem', async (req) => {
//         const { title, descr, quantity } = req.data;

//         // Валидация: если quantity > 100, выбрасываем ошибку
//         if (quantity > 100) {
//             req.error(400, 'Quantity cannot be greater than 100');
//         }

//         // Создание нового элемента
//         const result = await INSERT.into(Items).entries({ title, descr, quantity });
//         return result;
//     });
// });
