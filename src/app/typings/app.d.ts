declare module 'app' {

    interface IShopItem{
        id?: number,
        name: string,
        description: string,
        price: number,
        image: string,
    }

    interface ICartItem extends IShopItem{
        quantity: number;
    }

    interface IGuest {
        name: string,
        dinner: boolean,
    }
}