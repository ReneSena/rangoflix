import React from "react";
import { VideoCardGroupContainer, Title } from "./styles";
import VideoCard from "./components/VideoCard";
import SliderWrapper from "../Slider";

import { SliderItem } from "../Slider/styled";

function VideoCardGroup({ ignoreFirstVideo, category }) {
	const categoryTitle = category.titulo;
	const categoryColor = category.cor;
	const videos = category.videos;

	return (
		<VideoCardGroupContainer background={categoryColor}>
			{categoryTitle && (
				<>
					<Title>{categoryTitle}</Title>
				</>
			)}
			<SliderWrapper>
				{videos.map((video, index) => {
					if (ignoreFirstVideo && index === 0) {
						return null;
					}

					return (
						<SliderItem key={video.titulo}>
							<VideoCard
								videoTitle={video.titulo}
								videoURL={video.url}
								categoryColor={categoryColor}
							/>
						</SliderItem>
					);
				})}
			</SliderWrapper>
		</VideoCardGroupContainer>
	);
}

export default VideoCardGroup;
