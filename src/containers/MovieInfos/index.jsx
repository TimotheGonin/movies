import React from "react";

const MovieInfos = () => {
	return (
		<div>
			MovieInfos
			<form>
				<label htmlFor="comment">Comment</label>
				<input type="text" name="comment" />
				<label htmlFor="rate"></label>
				<input type="range" name="rate" min="0" max="5" />
				<button type="submit" onClick={(e) => e.preventDefault()}>
					Send
				</button>
			</form>
		</div>
	);
};

export default MovieInfos;
