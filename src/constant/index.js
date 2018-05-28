const HELLO_ROUTE = {
    name: 'hello',
    path: '/hello',
    dispalyName: 'Hello',
    isActive: true
};

const BASE_PRATICE_ROUTE = {
    name: 'basePratice',
    path: '/basePratice',
    dispalyName: 'Base Pratice'
};

const TRANSFER_DATA_ROUTE = {
    name: 'transferData',
    path: '/transferData',
    dispalyName: 'Transfer Data'
};

const TRANSITON_ANIMATE_ROUTE = {
    name: 'transitonAnimate',
    path: '/transitonAnimate',
    dispalyName: 'Transiton Animate'
}

const SLOT_DEOM_ROUTE = {
    name: 'slotSection',
    path: '/slotSection',
    dispalyName: 'Slot Dome'
};

const ROUTE = [
    HELLO_ROUTE,
    BASE_PRATICE_ROUTE,
    TRANSFER_DATA_ROUTE,
    SLOT_DEOM_ROUTE,
    TRANSITON_ANIMATE_ROUTE
];

const HELLO_FOOTER = {
    to: BASE_PRATICE_ROUTE.name,
	nextPath: BASE_PRATICE_ROUTE.path
};

module.exports = {
    ROUTE,
    HELLO_ROUTE,
    BASE_PRATICE_ROUTE,
    TRANSFER_DATA_ROUTE,
    SLOT_DEOM_ROUTE,

    HELLO_FOOTER
};