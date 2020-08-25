import React from 'react';
import '../css/Podcasts.css';

// AUTHOR ID:

export default function Podcasts() {
	return (
		<div>
			<iframe
				className="pod-frame"
				src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9NcHK1vd9rO"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
			/>
		</div>
	);
}
