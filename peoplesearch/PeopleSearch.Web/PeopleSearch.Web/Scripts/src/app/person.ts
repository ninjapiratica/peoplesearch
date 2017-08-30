import Address from "./address"

export default class Person {
    id: number
    imageUrl: string
    firstName: string
    lastName: string
    age: number
    address: Address

    interests: string[]
}