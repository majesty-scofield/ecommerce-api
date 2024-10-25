import {ProductTable} from "../../db/schema";

const all = () => {
    return ProductTable.findMany();
}

const create = (data: any) => {
    return ProductTable.insert(data);
}

const findOrFail = (id: number) => {
    if (id === undefined) {
        throw new Error('Id is required');
    }
    return ProductTable.find(id);
}

const update = (id: number, data: any) => {
    return ProductTable.update(id, data);
}

const destroy = (id: number) => {
    return ProductTable.delete(id);
}

export const products = {
    all,
    create,
    findOrFail,
    update,
    destroy
}