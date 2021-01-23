import { BaseComponent } from "../../base"
import "./button.scss"

export default class Button extends BaseComponent
{
	state = {

	}

	render()
	{
		return (
			<div className="button" onClick={this.$.click}>
				{this.slots}
			</div>
		)
	}
}