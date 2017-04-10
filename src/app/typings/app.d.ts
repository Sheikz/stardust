declare module 'app' {

    interface IShopItem{
        id: number,
        name: string,
        description: string,
        price: number,
        image: string,
    }

    interface ICartItem extends IShopItem{
        quantity: number;
    }
}

// declare module "pxc" {
//     export = pxc;
// }