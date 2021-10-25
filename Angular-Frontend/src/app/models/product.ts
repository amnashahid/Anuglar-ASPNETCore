export class Product{
    id: number;
    name: string;
    description: string;
    vender: string;
    stock: number;
    purchaseRate: number;
    sellingRate: number;
    constructor( id,name,description,vender,stock,purchaseRate, sellingRate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.vender = vender;
        this.stock = stock;
        this.purchaseRate = purchaseRate;
        this.sellingRate = sellingRate;
        
    }
}