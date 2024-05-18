class Store {
    listProduct;
    name;

    constructor(nameInput) {
        this.name = nameInput;
        this.listProduct = [];
        let sp1 = new Product(1, "Banh mi", 2000, "data:image/jpeg;base64,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");
        let sp2 = new Product(2, "Keo", 200, "data:image/jpeg;base64,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")
        this.listProduct.push(sp1);
        this.listProduct.push(sp2);
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
    }

    update(index, newProduct) {
        this.listProduct[index] = newProduct;
    }


    remove(index) {
        this.listProduct.splice(index, 1);
    }
}