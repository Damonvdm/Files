import { BaseComponent } from "../../components/base"
import { Button } from "../../components/generic"

export default class App extends BaseComponent
{
	render()
	{
		return (
			<div className="app">
				<Button name="John" $click={this.click}>
					Log
				</Button>
			</div>
		)
	}

	click(e)
	{
		console.log(e)
	}
}