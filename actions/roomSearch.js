"use server"
import { siteConfig } from "../config/site"
import prisma from "../lib/db"

const states = siteConfig.nigerianStates
const Type = siteConfig.propertyType
const budget = siteConfig.budget

export const roomSearch = async (formData) => {
    const location = states[formData.get("location")]
    const propertyType = Type[formData.get("propertyType")]
    const minPrice = budget[formData.get("minPrice")]
    const maxPrice = budget[formData.get("maxPrice")]

    try {
        // const rooms = await prisma.roomAd.findMany({
        //     where: {
        //         location,
        //         propertyType,
        //         price,
        //     },
        // })
        // return rooms
        console.log({ location, minPrice, maxPrice, propertyType })
    } catch (error) {
        console.log(error)
    }
}
