class CommentBox extends React.Component {
	constructor(){
		super();
		this.state = {
			comments: [
				{ user: "jalexy12@gmail.com", content: "This is my first post"},
				{ user: "faraz@turfsurf.co", content: "I like soccer"},
				{ user: "Mat", content: "I like Faraz"}
			]
		}
	}

	addComment(userInput){
		var comment = { user: "Anonymous", content: userInput }
		// Ajax to my rails API
		// On success 
		var comments = this.state.comments
		comments.push(comment);
		this.setState({ comments: comments })
	}

	render(){
		return(
			<div className="comment-wrapper">
				<CommentList comments={ this.state.comments } />
				<CommentForm onCommentAdd={this.addComment.bind(this)}/>
			</div>
		)
	}
}


