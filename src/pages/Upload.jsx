import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import React, { useState } from "react";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

const Main = styled.main`
	min-height: 100vh;
	border-top-width: 20px;
	background: #171717;
	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		color: #ddd;
		font-size: 3.5em;
		margin: 1em;
	}

	h2 {
		color: #ddd;
		font-size: 1.5em;
		margin: 1em;
	}
	.container {
		position: relative;
		bottom: 130px;
		margin: 2em auto;
		width: 60%;
		padding: 1em;
		text-align: center;
		background-color: #1a1a1a;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.33);
		border-radius: 3px;
	}
`;

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const Upload = () => {
	const [file, setFile] = useState([]);

	return (
		<>
			<SearchNavBar />
			<Main>
				<div className="container">
					<h1>𝕎𝕒𝕝𝕝ℙ𝕒𝕡𝕖𝕣𝕎𝕠𝕣𝕝𝕕</h1>
					<h2>Wallpaper Upload</h2>
					<div>
						<FilePond
							files={file}
							onupdatefiles={setFile}
							allowMultiple={false}
							maxFiles={1}
							name="file"
							labelIdle="Drag & Drop your file or click to browse"
							allowBrowse={true}
							instantUpload={false}
							server={{
								process: {
									url: "http://localhost:8080/api/picture/addPicture",
									headers: {
										Authorization: "Bearer " + localStorage.getItem("jwt"),
									},
									ondata: (formData) => {
										formData.append("file", file);
										formData.append("tags", "batman");
										console.log(localStorage.getItem("jwt"));
										return formData;
									},
								},
							}}
						/>
					</div>
				</div>
			</Main>
		</>
	);
};

export default Upload;
