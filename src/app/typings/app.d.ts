declare module 'app' {

    interface IShopItem{
        id?: number,
        name: string,
        description: string,
        price: number,
        image: string,
        quantity: number,
    }

    interface ICartItem extends IShopItem{
        quantity: number;
    }

    interface IGuest {
        name: string,
        dinner: boolean,
    }
}

interface Number {
    toFixedDigit : (nbrOfDigits: number) => string;
}
