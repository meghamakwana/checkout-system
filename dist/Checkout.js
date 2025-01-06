"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
class Checkout {
    constructor(pricingRules) {
        this.items = {};
        this.pricingRules = pricingRules;
    }
    scan(item) {
        this.items[item] = (this.items[item] || 0) + 1;
    }
    total() {
        const prices = {
            'ipd': 549.99,
            'mbp': 1399.99,
            'atv': 109.50,
            'vga': 30.00
        };
        let total = 0;
        for (let rule of this.pricingRules) {
            total += rule(this.items, prices);
        }
        return total;
    }
}
exports.Checkout = Checkout;
