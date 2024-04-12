import { TouchableOpacity, View, Text } from "react-native";
import { Audio } from "expo-av";
import { useEffect } from "react";

const notes = {
  A: require(`../notes/a.mp3`),
  B: require(`../notes/b.mp3`),
  C: require(`../notes/c.mp3`),
  D: require(`../notes/d.mp3`),
  E: require(`../notes/e.mp3`),
  F: require(`../notes/f.mp3`),
  G: require(`../notes/g.mp3`),
};
const Tile = ({ note }: { note: any }) => {
  const playNote = async () => {
    await Audio.Sound.createAsync(notes[note], { shouldPlay: true });
  };
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={0.9}
      onPress={playNote}
    >
      <View style={{ flex: 1, backgroundColor: "#fff" }} />
    </TouchableOpacity>
  );
};
export const Piano = () => {
  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true }).then(() => {
      console.log("Play in silent mode active!");
    });
  }, []);
  return (
    <View
      style={{ flex: 1, paddingVertical: 20, backgroundColor: "#000", gap: 5 }}
    >
      {/* SI */}
      <Tile note="B" />
      {/* LYA */}
      <Tile note="A" />
      {/* SO */}
      <Tile note="G" />
      {/* PA */}
      <Tile note="F" />
      {/* MI */}
      <Tile note="E" />
      {/* RE */}
      <Tile note="D" />
      {/* DO */}
      <Tile note="C" />
    </View>
  );
};
