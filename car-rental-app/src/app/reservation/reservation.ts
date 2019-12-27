export class Booking {
    public start: Date
    public end: Date
    public car_id: number
    public customer: Customer
}

class Customer {
    public id: number
    public first_name: string
    public last_name: string
    public state: string
    public phone_number: string
    public payment: number
}

/**
 * Booking data object
 * {
 *  "start":
 *  "end":
 *   "car_id":
 *   "customer":
 * }
 */