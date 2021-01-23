import { Component } from "react"

export default class BaseComponent extends Component
{
    get $()
	{
		let listeners = {}

        Object.entries(this.props)
            .filter(([key]) => key[0] === "$")
            .forEach(([key, index]) => listeners[key.replace("$", "")] = index)
        
        return listeners
	}

	get _()
	{
		let listeners = {}

        Object.entries(this.props)
            .filter(([key]) => key[0] !== "$" && key !== "children")
            .forEach(([key, index]) => listeners[key] = index)
        
        return listeners
    }
    
    get slots()
    {
        return this.props.children
    }
}