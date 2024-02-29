"use client"
import Checkout from "@/components/Checkout/CheckoutPage"
import Navbar from "@/components/NavigationMenus/DefaultNavbar/Navbar"


const CheckOutPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-5">
      <Navbar/>
      <Checkout/>
    </div>
  )
}

export default CheckOutPage
