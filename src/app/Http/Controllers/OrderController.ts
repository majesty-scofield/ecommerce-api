const index = (req, res) => {
    res.send('Get All Orders');
}

const store = (req, res) => {
    res.send('Create Order');
}

const show = (req, res) => {
    res.send('Get Order');
}

const update = (req, res) => {
    res.send('Update Order');
}

const destroy = (req, res) => {
    res.send('Delete Order');
}

export const orders = {
    index,
    store,
    show,
    update,
    destroy
}