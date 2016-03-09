class Printer extends React.Component {
	constructor(){
		super();
		this.state = {
			content: "This is a sweet React component",
			name: "Josh"
		}
	}

	updateContent(event){
		this.setState({ content: event.target.value })	
	}

	render(){
		return(
			<div>
				<h1>{ this.state.content }</h1>
				<h4>{ this.state.name }</h4>
				<input 
					type="text" 
					value={this.state.content}
					onChange={this.updateContent.bind(this)}
				/>
			</div>
		)
	}
}