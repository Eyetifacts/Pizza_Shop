import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const tabLinks = [
	{ text: "Pizza", to: "pizza", id: 1 },
	{ text: "Papa Bowls", to: "papa-bowls", id: 2 },
	{ text: "Papadias", to: "papadias", id: 3 },
	{ text: "Papa Bites", to: "papa-bites", id: 4 },
	{ text: "Wings", to: "wings", id: 5 },
	{ text: "Sides", to: "sides", id: 6 },
	{ text: "Desserts", to: "desserts", id: 7 },
	{ text: "Drinks", to: "drinks", id: 8 },
	{ text: "Extras", to: "extras", id: 9 },
]

const MenuPageTabBar = () => {
	const activeStyle = { backgroundColor: "black", color: "white" }
	return (
		<div className="mx-auto mt-5 px-3 sm:px-12 lg:px-24">
			<nav className="flex space-x-4 text-center overflow-x-auto pr-3 py-5 mb-3">
				{tabLinks.map((link) => (
					<NavLink
						to={`/order/menu/${link.to}`}
						key={link.id}
						className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg md:text-2xl font-semibold uppercase tracking-tight whitespace-nowrap"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						{" "}
						{link.text}
					</NavLink>
				))}
			</nav>
			<Outlet />
		</div>
	)
}

export default MenuPageTabBar
