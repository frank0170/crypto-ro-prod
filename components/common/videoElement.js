// import React from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { ImageBackground } from "react-native";
// import playButtonTrans from "../../public/playButton.png";
// import { LogInStyles } from "../LogIn/loginStyles";
// import stopwatchTimer from "../../public/timeClock.png";
// import { useExerciseContext } from "../context/exerciseContext";
// import back from "../../public/back.png";
// import StopWatch from "../../icons/stopWatch";
// import PlayButton from "../../icons/playButtonBig";
// import { workoutsStyle } from "./workoutsStyle.js";

// import { StyleSheet } from "react-native";
// import { Video, ResizeMode } from "expo-av";

// export function VideoPlayer({ video }) {
//   const [status, setStatus] = React.useState({});
//   const [initiateFullscreen, setInitiateFullscreen] = React.useState(true); // Add state to initiate fullscreen on load

//   const { exerciseData } = useExerciseContext();

//   React.useEffect(() => {
//     // Automatically attempt to enter fullscreen mode when the video component has loaded and is ready
//     if (status.isLoaded && initiateFullscreen) {
//       video.current.presentFullscreenPlayer();
//       setInitiateFullscreen(false); // Prevent further attempts to enter fullscreen
//     }
//   }, [status.isLoaded, initiateFullscreen]);

//   return (
//     <View style={styles.container}>
//       <Video
//         ref={video}
//         source={{
//           uri: `https://shape-mentor.fra1.cdn.digitaloceanspaces.com/${exerciseData?.video}.mp4`,
//         }}
//         useNativeControls
//         resizeMode={ResizeMode.CONTAIN}
//         isLooping
//         onPlaybackStatusUpdate={(statusUpdate) => {
//           setStatus(() => statusUpdate);
//           if (initiateFullscreen && statusUpdate.isLoaded) {
//             // Ensure fullscreen is only initiated when the video is fully loaded
//             video.current.presentFullscreenPlayer();
//             setInitiateFullscreen(false);
//           }
//         }}
//       />
//     </View>
//   );
// }
