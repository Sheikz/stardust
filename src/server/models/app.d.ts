declare module 'app' {

    interface IShopItem{
        id?: number,
        name: string,
        description: string,
        price: number,
        image: string,
        quantity?: number,
        category: "mauritius" | "florence",
    }

    interface ICartItem extends IShopItem{
        quantity: number;
    }

    interface IRegisterEntry{
        name: string,
        dinner: boolean,
        guests: [{name: string}];
        note: string,
    }
}