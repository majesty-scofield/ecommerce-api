const index = (req, res) => {
    res.send('Get All Products');
}

const store = (req, res) => {
    res.send('Create Product');
}

const show = (req, res) => {
    res.send('Get Product');
}

const update = (req, res) => {
    res.send('Update Product');
}

const destroy = (req, res) => {
    res.send('Delete Product');
}

export const products = {
    index,
    store,
    show,
    update,
    destroy
}