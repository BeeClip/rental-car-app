import { Booking } from '../reservation/reservation';

export class Car {
    public id: number
    public make: string
    public model: string
    public year: number
    public color: string
    public seats: number
    public doors: number
    public available: boolean
    public classification: string
    public img_src: string
    public bookings: Booking[]
    public daily_rate: number
}