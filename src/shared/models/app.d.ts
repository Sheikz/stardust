declare module 'app' {

    interface IShopItem{
        id?: number,
        name: string,
        name_french?: string,
        price: number,
        image?: string,
        quantity?: number,
        category?: "mauritius" | "florence",
    }

    interface IGuest {
        name: string,
        dinner: boolean,
    }

    interface IRegisterEntry {
        name?: string, 
        guests?: any[],
        note?: string,
        joining?: boolean,
        email?: string,
    }

    interface AuthResult {
        success: boolean,
        token: string
    }
}